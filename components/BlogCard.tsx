import type { BlogPost } from "@/types";

export default function BlogCard({ title, category, excerpt, readTime, date }: BlogPost) {
  return (
    <article className="blog-card">
      <div className="blog-meta">
        <span className="tag">{category}</span>
        <span>{readTime}</span>
      </div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <time>{date}</time>
    </article>
  );
}
