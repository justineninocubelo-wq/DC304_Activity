
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-8 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Hi, I'm Justine Nino Cubelo!
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Welcome to my personal website. I am a BSIT student
          passionate about technology, programming, and
          learning new things. This website showcases my
          background and the projects I have worked on.
        </p>

        <Link
          href="/projects"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          View My Projects
        </Link>
      </div>
    </main>
  );
}
