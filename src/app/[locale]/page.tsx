import HeroSection from '@/features/home/hero-section';
import ContactBar from '@/features/home/hero-section/contact-bar';
import AboutMe from '@/features/home/about-me';
import EducationSkills from '@/features/home/education-skills';
import LatestWork from '@/features/home/latest-work';
import Experience from '@/features/home/experience';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContactBar />
      <AboutMe />
      <Experience />
      <EducationSkills />
      <LatestWork />
    </main>
  );
}
