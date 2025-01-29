import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  const { id } = req.query;
  const postId = Number(id);

  if (req.method === 'GET') {
    const post = await prisma.post.findUnique(
      {
        where: { id: postId },
      }
    );
    res.json(post);
  } 
  else if (req.method === 'PUT') {
    try {
      const { title, content, author, category, isPublished, likesCount, views } = req.body;
      
      // Fully replace the existing post with new data
      const updatedPost = await prisma.post.update({
        where: { id: postId },
        data: {
          title, 
          content, 
          author, 
          category, 
          isPublished, 
          likesCount, 
          views,
          updatedAt: new Date()
        },
      });

      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: "Failed to update the post." });
    }
  } 
  else if (req.method === 'PATCH') {
    try {
      // Only update fields that are provided in the request body
      const updateData = {};
      if (req.body.title !== undefined) updateData.title = req.body.title;
      if (req.body.content !== undefined) updateData.content = req.body.content;
      if (req.body.author !== undefined) updateData.author = req.body.author;
      if (req.body.category !== undefined) updateData.category = req.body.category;
      if (req.body.isPublished !== undefined) updateData.isPublished = req.body.isPublished;
      if (req.body.likesCount !== undefined) updateData.likesCount = req.body.likesCount;
      if (req.body.views !== undefined) updateData.views = req.body.views;
  
      // Set updatedAt if any field is updated
      if (Object.keys(updateData).length > 0) {
        updateData.updatedAt = new Date();
      }
  
      const updatedPost = await prisma.post.update({
        where: { id: postId },
        data: updateData,
      });
  
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: "Failed to partially update the post." });
    }
  }
  else if (req.method === 'DELETE') {
    try {
      // Delete the post with the given ID
      await prisma.post.delete({
        where: { id: postId },
      });
  
      // No content to return after successful deletion
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete the post." });
    }
  }
  else if (req.method === 'OPTIONS') {
    res.status(200).end();
    // return;
  }
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
