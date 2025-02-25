import { NextApiRequest, NextApiResponse } from 'next';
import { data } from '../../data'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'GET') {
    const posts = data.map(({   
      // id, 
      // uniqueId, 
      // title, 
      content, 
      // createdAt, 
      // author, 
      // category, 
      // updatedAt,
      // likesCount,
      // authorId,
      // isPublished,
      // views, 
      ...rest
     }) => rest);

    res.json(posts);
  }
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
