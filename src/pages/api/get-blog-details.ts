import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { slug } = req.query;

    try {
      const client = await clientPromise;
      const db = client.db("wnlp");
      const collection = db.collection("blogData");

      const blogData = await collection
        .aggregate([
          {
            $match: { slug },
          },
          {
            $lookup: {
              from: "blogs",
              localField: "blogId",
              foreignField: "_id",
              as: "blogInfo",
            },
          },
          {
            $unwind: "$blogInfo",
          },
        ])
        .toArray();

      if (blogData.length === 0) {
        return res.status(404).json({ message: "Blog not found" });
      }

      res.status(200).json({ message: "success", blog: blogData[0] });
    } catch (error) {
      console.error("Error fetching blog:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
