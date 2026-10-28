import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card-light group flex h-full flex-col rounded-2xl p-7">
      <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
        {post.category}
      </span>
      <h3 className="font-heading mt-4 text-lg font-bold leading-snug text-ink">{post.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between border-t border-hairline-light pt-4 text-xs text-slate">
        <span>
          {formatPostDate(post.date)} · {post.readTime}
        </span>
        <span className="font-semibold text-accent transition-transform group-hover:translate-x-1">
          Read →
        </span>
      </div>
    </Link>
  );
}
