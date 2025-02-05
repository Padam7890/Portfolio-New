import BlogComponent from "@/components/Blog/BlogComponent";
import { fetchBlogs } from "@/services/generalService";
import { Blog } from "@/types/apiResponse";
import React from "react";

const BlogPage = async () => {
  const BlogLists:Blog = await fetchBlogs();
  return <BlogComponent BlogLists={BlogLists} />;
};

export default BlogPage;
