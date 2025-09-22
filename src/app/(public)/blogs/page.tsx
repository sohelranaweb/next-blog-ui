import BlogCard from "@/components/modules/Blogs/BlogCard";
import { Post } from "@/types";

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store",
  });
  const { data: blogs } = await res.json();
  // console.log(blogs);
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto my-5">
        {blogs.map((blog: Post) => (
          <BlogCard key={blog?.id} post={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
