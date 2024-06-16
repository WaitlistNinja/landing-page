import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id, publishedAt, slug, mainImage, tags, title, metadata, body } =
      req.body;

    try {
      const client = await clientPromise;
      const db = client.db("wnlp");
      const blogsCollection = db.collection("blogs");

      const newBlog = await blogsCollection.insertOne({
        id,
        publishedAt,
        slug,
        mainImage,
        tags,
        title,
        metadata,
      });

      const blogDataCollection = db.collection("blogData");
      await blogDataCollection.insertOne({
        blogId: newBlog.insertedId,
        slug,
        body,
      });

      res
        .status(201)
        .json({ message: "Data stored successfully", blog: newBlog });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
