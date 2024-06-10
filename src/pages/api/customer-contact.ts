import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fullName, email, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res
        .status(400)
        .json({ message: 'Please enter all the required fields' });
    }

    try {
      const client = await clientPromise;
      const db = client.db('wnlp');
      const collection = db.collection('contact');

      const result = await collection.insertOne({
        fullName,
        email,
        subject,
        message,
      });

      res.status(201).json({ message: 'Data stored successfully', result });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
