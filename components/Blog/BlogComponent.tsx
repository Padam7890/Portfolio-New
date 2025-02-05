import { Blog, IBlog } from "@/types/apiResponse";
import { formatApiDate } from "@/utils/function";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import BlogContent from "./BlogContent";

const BlogComponent = ({ BlogLists }: { BlogLists: Blog }) => {
  console.log("blog", BlogLists);

  return (
    <>
      <article className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            {BlogLists.map((blog: IBlog, index: number) => (
              <li key={blog?.id} className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <Image
                      width={350}
                      height={300}
                      src={blog?.Featured_Image?.url}
                      alt={blog?.Featured_Image?.alt}
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time dateTime={blog?.publishedAt}>
                        {formatApiDate(blog?.publishedAt)}
                      </time>
                    </div>

                    <h3 className="h3 blog-item-title">{blog?.Title} </h3>

                    <p className="blog-text">
                      <div>
                        <BlogContent limit={200} description={blog?.Description} />
                      </div>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
};

export default BlogComponent;
