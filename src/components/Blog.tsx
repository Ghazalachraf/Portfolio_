import { blogPosts } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Articles
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gradient">Blog</span>
        </h2>
        <p className="mt-2 text-sm text-amber-700">{blogPosts.note}</p>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {blogPosts.posts.map((post, i) => (
          <Reveal key={post.title} delay={i * 0.08}>
            <div className="h-full rounded-3xl border border-dashed border-slate-300 bg-white/60 p-7 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
