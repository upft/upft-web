"use client";
import BlogSwipe from "@/components/blog/blog-swipe";
import BlogPostsSwipe from "@/components/blog/blog-post-swipe";
import BlogSubscribe from "@/components/blog/blog-subscribe";

export default function Blog() {
  return (
    <section>
      {/* <div className="blog-section relative py-10 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <BlogSwipe />
        </div>
      </div> */}
      <div className="blog-section relative py-10 lg:py-20 px-4">
        <BlogPostsSwipe />
      </div>
      {/* <BlogSubscribe /> */}
    </section>
  );
}
