import { Link } from '@/i18n/navigation';
import SectionHeader from '@/shared/ui/SectionHeader';

export default function NotFound() {
  return (
    <main className="min-h-dvh pt-28 md:pt-32">
      <section>
        <div className="container">
          <SectionHeader title="Project not found" className="mb-9 md:mb-16" />
          <p className="mt-2 text-gray-600">The project you’re looking for doesn’t exist.</p>
          <Link href="/" className="mt-6 inline-block underline">
            Go to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
