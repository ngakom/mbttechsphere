import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import BlogCard from "@/components/BlogCard";
import { posts, getPostBySlug, formatPostDate } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found | MBT TechSphere Solutions" };
  return {
    title: `${post.title} | MBT TechSphere Solutions`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-16 pt-36">
        <div className="glow-field">
          <div className="glow-orb -left-24 top-0 h-72 w-72 bg-accent/40" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-grey transition-colors hover:text-gold"
            >
              ← Back to Insights
            </Link>
            <span className="mt-6 block w-fit rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest-sm text-gold">
              {post.category}
            </span>
            <h1 className="font-heading mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-text-grey">
              {formatPostDate(post.date)} · {post.readTime}
            </p>
          </Reveal>
        </div>
      </section>

      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          {post.content.map((block, i) => {
            if (block.type === "h3") {
              return (
                <h3
                  key={i}
                  className="font-heading mt-10 text-xl font-bold text-ink first:mt-0"
                >
                  {block.text}
                </h3>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="mt-4 space-y-2.5">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-slate">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="mt-4 text-[15px] leading-relaxed text-slate first:mt-0">
                {block.text}
              </p>
            );
          })}

          <div className="mt-14 rounded-2xl bg-grey-light p-8 text-center">
            <p className="font-heading text-lg font-bold text-ink">
              Have a similar problem to solve?
            </p>
            <p className="mt-2 text-sm text-slate">
              Tell us what&apos;s slowing your team down — we&apos;ll tell you honestly whether
              it&apos;s worth automating.
            </p>
            <Link
              href="/#contact"
              className="btn-lift mt-5 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-light"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-grey-light py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="font-heading text-2xl font-bold text-ink">More from the blog</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
