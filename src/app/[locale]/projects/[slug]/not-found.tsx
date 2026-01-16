import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-dvh pt-28 md:pt-32">
      <section>
        <div className="container">
          <div className="gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Project not found</h2>
          </div>
          <p className="mt-2 text-gray-600">The project you’re looking for doesn’t exist.</p>
          <Link href="/" className="mt-6 inline-block underline">
            Go to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
