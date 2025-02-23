import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { selectTopNFromPostTable } from '@prisma/client/sql'

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  const { id } = req.query;
  const count = Number(id);

  if (req.method === 'GET') {
    const posts  = await prisma.$queryRawTyped(selectTopNFromPostTable(count));
    res.json(posts);
  }
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
