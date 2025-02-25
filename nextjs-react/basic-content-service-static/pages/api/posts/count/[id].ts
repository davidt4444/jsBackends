import { NextApiRequest, NextApiResponse } from 'next';
import { data, Post } from '../../data'

function getTop(jsonArray: Post[], num:number): Post[] {
  const sortedArray = [...jsonArray].sort((a, b) => b.id - a.id);
  return sortedArray.slice(0, num);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  const { id } = req.query;
  const count = Number(id);

  if (req.method === 'GET') {
    const stuff = data as Post[];
    const posts  = getTop(stuff, count);
    res.json(posts);
  }
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
