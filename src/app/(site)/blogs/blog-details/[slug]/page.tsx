import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import RecentPosts from "@/src/components/Blog/RecentPosts";
import SharePost from "@/src/components/Blog/SharePost";
import axios from "axios";
import { Blog } from "@/types/blog";

// Fetch all blog slugs for static generation
export async function generateStaticParams() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-all-blogs`
  );
  const blogs: Blog[] = data.blogs;

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Fetch blog details based on the slug parameter
async function getBlogDetails(slug: string) {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/get-blog-details/?slug=${slug}`
    );
    return data.blog;
  } catch (error) {
    console.log("Blog not found");
  }
}

// Fetch blog details based on the slug parameter
async function getRecentBlogs() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/get-all-blogs`
    );
    return data.blogs;
  } catch (error) {
    console.log("Blog not found");
  }
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getBlogDetails(params.slug);

  return {
    title: `WaitlistNinja - ${blog?.blogInfo.title || "Blog"}`,
    description: blog?.blogInfo.metadata || "Blog listing by WaitlistNinja",
  };
}

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlogDetails(params.slug);
  const recentBlogs = await getRecentBlogs();

  if (!blog) {
    notFound();
  }

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="md:w-1/2 lg:w-[32%]">
            <RecentPosts blogs={recentBlogs} />
          </div>
          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <div className="mb-10 w-full overflow-hidden">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={blog.blogInfo.mainImage}
                    alt={blog.blogInfo.title}
                    fill
                    className="rounded-md object-cover object-center"
                  />
                </div>
              </div>
              <h2 className="mb-10 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {blog.blogInfo.title}
              </h2>
              <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                <li>
                  <span className="text-black dark:text-white">
                    Published On: {blog.blogInfo.publishedAt}
                  </span>
                </li>
              </ul>
              <div
                className="blog-details custom-ul-padding"
                dangerouslySetInnerHTML={{ __html: blog.body || "" }}
              />
              <SharePost tags={blog.blogInfo.tags} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
