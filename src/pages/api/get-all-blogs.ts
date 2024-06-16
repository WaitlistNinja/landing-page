import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {

    try {
      const client = await clientPromise;
      const db = client.db("wnlp");
      const blogsCollection = db.collection("blogs");

      const allBlogs = await blogsCollection.find().toArray();
      res
        .status(201)
        .json({ message: "success", blogs: allBlogs });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
