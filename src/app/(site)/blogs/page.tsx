"use client";
import React, { useState, useEffect } from "react";
import BlogItem from "@/src/components/Blog/BlogItem";
import axios from "axios";


export default function BlogPage() {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const { data } = await axios.get("/api/get-all-blogs");
        setBlogData(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    if (blogData.length === 0) {
      fetchBlogs();
    }
  }, []);

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 text-center px-4 md:px-8 xl:mt-20 xl:px-0">
          {blogData.length === 0 && (
            <p className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-black duration-300 dark:text-white  xl:text-itemtitle1">
              No blogs available. Please check back soon for our latest updates
              and articles!
            </p>
          )}
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {blogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
}
