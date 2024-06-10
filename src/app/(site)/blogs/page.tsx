import BlogData from "@/src/components/Blog/blogData";
import BlogItem from "@/src/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WaitlistNinja - Blog",
  description: "Blog listing by WaitlistNinja",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 text-center px-4 md:px-8 xl:mt-20 xl:px-0">
          {BlogData.length === 0 && (
            <p className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-black duration-300 dark:text-white  xl:text-itemtitle1">
              No blogs available. Please check back soon for our latest updates
              and articles!
            </p>
          )}
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
