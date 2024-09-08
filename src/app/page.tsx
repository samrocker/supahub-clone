import HeaderSection from '@/components/common/HeaderSection';
import BottomBannerSection from '@/components/LandingSection/BottomBannerSection';
import ChangelogSection from '@/components/LandingSection/ChangelogSection';
import FAQSection from '@/components/LandingSection/FAQ-Section';
import FeedbackHubSection from '@/components/LandingSection/FeedbackHubSection';
import FeedbackToolSection from '@/components/LandingSection/FeedbackToolSection';
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
    <FeedbackToolSection />
    <FAQSection />
    <BottomBannerSection />
    </>
  );
}
