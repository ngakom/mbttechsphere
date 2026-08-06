import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights | MM Digital Solutions",
  description:
    "Practical guidance on Power Platform, SharePoint, Power BI and AI from the MM Digital Solutions team.",
};

export default function BlogIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-20 pt-36">
        <div className="glow-field">
          <div className="glow-orb -left-24 top-0 h-80 w-80 bg-maroon/40" />
          <div className="glow-orb right-0 bottom-0 h-72 w-72 bg-gold/20" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest-sm text-gold">
              Insights
            </span>
            <h1 className="font-heading mt-4 text-4xl font-bold text-white sm:text-5xl">
              Ideas on Power Platform, Data &amp; AI
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-text-grey">
              Practical write-ups from the team building automations, apps and dashboards — no
              vendor fluff, just what we&apos;ve learned shipping this stuff.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-grey-light py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 70}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
