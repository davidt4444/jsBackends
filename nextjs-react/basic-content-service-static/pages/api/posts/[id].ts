import { NextApiRequest, NextApiResponse } from 'next';
import { data } from '../data'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  const { id } = req.query;
  const postId = Number(id);

  if (req.method === 'GET') {
    const post = data.filter(o => o.id==postId);
    res.json(post);
  } 
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
