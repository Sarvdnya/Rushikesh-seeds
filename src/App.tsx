import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutSection from './sections/AboutSection';
import AimToScaleSection from './sections/AimToScaleSection';
import ChallengesSection from './sections/ChallengesSection';
import CompetitiveLandscapeSection from './sections/CompetitiveLandscapeSection';
import ContactSection from './sections/ContactSection';
import FundUtilizationSection from './sections/FundUtilizationSection';
import LeadershipSection from './sections/LeadershipSection';
import MarketSizeSection from './sections/MarketSizeSection';
import OurOfferingsSection from './sections/OurOfferingsSection';
import RevenueStrategySection from './sections/RevenueStrategySection';
import SolutionsSection from './sections/SolutionsSection';
import UspSection from './sections/UspSection';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-forest focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <AboutSection />
        <ChallengesSection />
        <SolutionsSection />
        <OurOfferingsSection />
        <UspSection />
        <MarketSizeSection />
        <CompetitiveLandscapeSection />
        <RevenueStrategySection />
        <AimToScaleSection />
        <FundUtilizationSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
