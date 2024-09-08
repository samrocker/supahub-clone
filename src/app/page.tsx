import HeaderSection from '@/components/common/HeaderSection';
import ChangelogSection from '@/components/LandingSection/ChangelogSection';
import FeedbackHubSection from '@/components/LandingSection/FeedbackHubSection';
import HeroSection from '@/components/LandingSection/HeroSection';
import PriotizingSection from '@/components/LandingSection/PriotizingSection';
import RoadmapSection from '@/components/LandingSection/RoadmapSection';
import react from 'react';

export default function Home() {
  return (
    <>
    <HeaderSection />
    <HeroSection />
    <FeedbackHubSection />
    <RoadmapSection />
    <PriotizingSection />
    <ChangelogSection />
    </>
  );
}
