import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ComparePage from './pages/ComparePage';
import ModalitiesPage from './pages/ModalitiesPage';
import ReviewsPage from './pages/ReviewsPage';
import GuidesPage from './pages/GuidesPage';
import BestPage from './pages/BestPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ToolsPage from './pages/ToolsPage';
import ResourcesPage from './pages/ResourcesPage';
import LearnPage from './pages/LearnPage';
import BlogPage from './pages/BlogPage';
import BlogAll from './pages/blog/all';
import BlogStories from './pages/blog/stories/index';
import TherapistInterviews from './pages/blog/stories/therapist-interviews';
import SelfCarePractices from './pages/blog/stories/self-care-practices';
import BlogGuides from './pages/blog/guides/index';
import BlogInsuranceCoverageGuide from './pages/blog/guides/insurance-coverage-guide';
import BlogNews from './pages/blog/news/index';
import LatestTherapyResearch from './pages/blog/news/latest-therapy-research';
import NotFoundPage from './pages/NotFoundPage';
import MetaTags from './components/MetaTags';
import BetterHelpReview from './pages/BetterHelpReview';
import TalkspaceReview from './pages/TalkspaceReview';
import CerebralReview from './pages/CerebralReview';
import CalmerryReview from './pages/reviews/platforms/CalmerryReview';
import OnlineTherapyReview from './pages/reviews/platforms/OnlineTherapyReview';
import BrightsideReview from './pages/reviews/platforms/BrightsideReview';
import OnlineTherapyComReview from './pages/reviews/platforms/OnlineTherapyComReview';
import AmwellReview from './pages/reviews/platforms/AmwellReview';
import ReviewsFeatures from './pages/ReviewsFeatures';
import ReviewsSpecialty from './pages/ReviewsSpecialty';
import BetterHelpVsTalkspace from './pages/BetterHelpVsTalkspace';
import BetterHelpVsCerebral from './pages/comparisons/BetterHelpVsCerebral';
import TalkspaceVsCerebral from './pages/comparisons/TalkspaceVsCerebral';
import BetterHelpVsCalmerry from './pages/comparisons/BetterHelpVsCalmerry';
import CerebralVsBrightside from './pages/comparisons/CerebralVsBrightside';
import BetterHelpVsOnlineTherapy from './pages/comparisons/BetterHelpVsOnlineTherapy';
import CerebralVsTalkspace from './pages/comparisons/CerebralVsTalkspace';
import TalkspaceVsOnlineTherapy from './pages/comparisons/TalkspaceVsOnlineTherapy';
import CBTVsPsychodynamic from './pages/comparisons/CBTVsPsychodynamic';
import AffordableBetterHelpAlternatives from './pages/comparisons/AffordableBetterHelpAlternatives';
import TalkspaceAlternatives from './pages/comparisons/TalkspaceAlternatives';
import FreeTherapyOptions from './pages/comparisons/FreeTherapyOptions';
import TopTherapyPlatformsCompared from './pages/comparisons/TopTherapyPlatformsCompared';
import BestTherapyAppsCompared from './pages/comparisons/BestTherapyAppsCompared';
import InsuranceFriendlyPlatforms from './pages/comparisons/InsuranceFriendlyPlatforms';
import TherapyAlternatives from './pages/comparisons/TherapyAlternatives';
import IndividualVsGroupTherapy from './pages/comparisons/IndividualVsGroupTherapy';
import TherapyApproaches from './pages/comparisons/TherapyApproaches';
import TextVsVideoTherapy from './pages/comparisons/TextVsVideoTherapy';
import OnlineVsTraditionalTherapy from './pages/comparisons/OnlineVsTraditionalTherapy';
import ReviewsPlatforms from './pages/ReviewsPlatforms';
import BestOnlineTherapyPlatforms from './pages/BestOnlineTherapyPlatforms';
import BestTextTherapyServices from './pages/BestTextTherapyServices';
import BestPlatforms from './pages/BestPlatforms';
import BestConditions from './pages/BestConditions';
import BestAudiences from './pages/BestAudiences';
import BestForTeens from './pages/best/audiences/BestForTeens';
import BestForAddiction from './pages/best/conditions/BestForAddiction';
import BestForAnxiety from './pages/best/conditions/BestForAnxiety';
import BestForPTSD from './pages/best/conditions/BestForPTSD';
import BestForEatingDisorders from './pages/best/conditions/BestForEatingDisorders';
import BestForOCD from './pages/best/conditions/BestForOCD';
import BestForCouples from './pages/best/audiences/BestForCouples';
import BestForDepression from './pages/best/conditions/BestForDepression';
import BestForLGBTQ from './pages/best/audiences/BestForLGBTQ';
import BestForSeniors from './pages/best/audiences/BestForSeniors';
import BestForVeterans from './pages/best/audiences/BestForVeterans';
import BestForParents from './pages/best/audiences/BestForParents';
import BestMedicationTherapyPlatforms from './pages/best/platforms/BestMedicationTherapyPlatforms';
import BestSpecializedPlatforms from './pages/best/platforms/BestSpecializedPlatforms';
import BestSpecificNeeds from './pages/best/specific-needs/BestSpecificNeeds';
import ReGainReview from './pages/reviews/platforms/ReGainReview';
import MedicationTherapyPlatforms from './comparisons/MedicationTherapyPlatforms';
import GeneralTherapyPlatforms from './comparisons/GeneralTherapyPlatforms';
import SpecializedTherapyPlatforms from './comparisons/SpecializedTherapyPlatforms';
import ConditionsAZPage from './pages/ConditionsAZPage';
import AnxietyDisorderPage from './pages/conditions/AnxietyDisorderPage';
import DepressionPage from './pages/conditions/DepressionPage';
import BipolarDisorderPage from './pages/conditions/BipolarDisorderPage';
import PTSDPage from './pages/conditions/PTSDPage';
import OCDPage from './pages/conditions/OCDPage';
import EatingDisordersPage from './pages/conditions/EatingDisordersPage';
import ADHDPage from './pages/conditions/ADHDPage';
import SchizophreniaPage from './pages/conditions/SchizophreniaPage';
import BPDPage from './pages/conditions/BPDPage';
import AddictionPage from './pages/conditions/AddictionPage';
import SocialAnxietyPage from './pages/conditions/SocialAnxietyPage';
import OCDAssessment from './pages/tools/assessments/OCDAssessment';
import MentalHealthAssessment from './pages/tools/assessments/MentalHealthAssessment';
import AnxietyScreening from './pages/tools/assessments/AnxietyScreening';
import DepressionScreening from './pages/tools/assessments/DepressionScreening';
import StressLevelTest from './pages/tools/assessments/StressLevelTest';
import TherapyStyleAssessment from './pages/tools/assessments/TherapyStyleAssessment';
import AssessmentsPage from './pages/tools/AssessmentsPage';
import MatchersPage from './pages/tools/MatchersPage';
import TherapyPlatformMatcher from './pages/tools/matchers/TherapyPlatformMatcher';
import BudgetFriendlyFinder from './pages/tools/matchers/BudgetFriendlyFinder';
import InsuranceCoverageChecker from './pages/tools/matchers/InsuranceCoverageChecker';
import TherapyTypeFinder from './pages/tools/matchers/TherapyTypeFinder';
import PlatformFinderPage from './pages/PlatformFinderPage';
import VideoSessionQuality from './pages/reviews/features/VideoSessionQuality';
import BetterHelpTherapistQuality from './pages/reviews/features/BetterHelpTherapistQuality';
import Communication from './pages/reviews/features/Communication';
import TherapistMatchingSystems from './pages/reviews/features/TherapistMatchingSystems';
import TalkspaceForDepression from './pages/reviews/specialty/TalkspaceForDepression';
import OnlineTherapyForPTSD from './pages/reviews/specialty/OnlineTherapyForPTSD';
import AnxietyTreatment from './pages/reviews/specialty/AnxietyTreatment';
import CouplesTherapy from './pages/reviews/specialty/CouplesTherapy';
import InsuranceCoverageGuide from './pages/reviews/pricing/InsuranceCoverageGuide';
import OnlineTherapyPricingComparison from './pages/reviews/pricing/OnlineTherapyPricingComparison';
import ReviewsPricing from './pages/reviews/ReviewsPricing';
import MedicationTherapy from './pages/reviews/categories/MedicationTherapy';
import GeneralTherapy from './pages/reviews/categories/GeneralTherapy';
import SpecializedTherapy from './pages/reviews/categories/SpecializedTherapy';
import TherapyTypesExplained from './pages/learn/fundamentals/therapy-types-explained';
import ChoosingOnlineTherapist from './pages/guides/selection/choosing-online-therapist';
import FirstTherapySession from './pages/guides/selection/first-therapy-session';
import RedFlagsInTherapy from './pages/guides/selection/red-flags-in-therapy';
import TherapyTypesExplainedGuide from './pages/guides/selection/therapy-types-explained';
import OnlineTherapyGuide from './pages/learn/fundamentals/online-therapy-guide';
import CommonMentalHealthConditions from './pages/learn/fundamentals/common-mental-health-conditions';
import MedicationVsTherapy from './pages/learn/fundamentals/medication-vs-therapy';
import Depression from './pages/learn/fundamentals/depression';
import LearnFundamentals from './pages/learn/fundamentals/index';
import LearnStatistics from './pages/learn/statistics/index';
import MentalHealthStatistics from './pages/learn/statistics/mental-health-statistics';
import RoundupsPage from './pages/comparisons/RoundupsPage';
import WorksheetsPage from './pages/resources/WorksheetsPage';
import ConditionsPage from './pages/case-studies/ConditionsPage';
import DemographicsPage from './pages/case-studies/DemographicsPage';
import AnxietyTreatmentSuccess from './pages/case-studies/conditions/AnxietyTreatmentSuccess';
import DepressionRecoveryJourney from './pages/case-studies/conditions/DepressionRecoveryJourney';
import PTSDTreatmentOnline from './pages/case-studies/conditions/PTSDTreatmentOnline';
import OCDManagementSuccess from './pages/case-studies/conditions/OCDManagementSuccess';
import RemoteWorkerMentalHealth from './pages/case-studies/demographics/RemoteWorkerMentalHealth';
import RuralAccessToTherapy from './pages/case-studies/demographics/RuralAccessToTherapy';
import TherapyForNightOwls from './pages/case-studies/demographics/TherapyForNightOwls';
import CollegeStudentStressManagement from './pages/case-studies/demographics/CollegeStudentStressManagement';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageMetaTags = () => {
  const location = useLocation();
  const path = location.pathname;

  let metaInfo: {
    title?: string,
    description?: string,
    image?: string
  } = {};

  if (path === '/') {
    metaInfo = {
      title: "RealMindSolutions | Find Your Perfect Mental Health Solution",
      description: "Compare, review, and discover the best online therapy platforms tailored to your unique needs.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    };
  }

  return <MetaTags {...metaInfo} />;
};

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <PageMetaTags />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Convert (Top Priority) */}
            <Route path="/compare/*" element={<ComparePage />} />
            <Route path="/compare/modalities" element={<ModalitiesPage />} />
            <Route path="/compare/modalities/online-vs-traditional" element={<OnlineVsTraditionalTherapy />} />
            <Route path="/compare/modalities/online-vs-traditional-therapy" element={<OnlineVsTraditionalTherapy />} />
            <Route path="/compare/modalities/individual-vs-group-therapy" element={<IndividualVsGroupTherapy />} />
            <Route path="/compare/modalities/therapy-approaches" element={<TherapyApproaches />} />
            <Route path="/compare/modalities/text-vs-video-therapy" element={<TextVsVideoTherapy />} />
            <Route path="/compare/platforms/betterhelp-vs-talkspace" element={<BetterHelpVsTalkspace />} />
            <Route path="/compare/platforms/betterhelp-vs-cerebral" element={<BetterHelpVsCerebral />} />
            <Route path="/compare/platforms/talkspace-vs-cerebral" element={<TalkspaceVsCerebral />} />
            <Route path="/compare/platforms/betterhelp-vs-calmerry" element={<BetterHelpVsCalmerry />} />
            <Route path="/compare/platforms/cerebral-vs-brightside" element={<CerebralVsBrightside />} />
            <Route path="/compare/platforms/betterhelp-vs-online-therapy" element={<BetterHelpVsOnlineTherapy />} />
            <Route path="/compare/platforms/cerebral-vs-talkspace" element={<CerebralVsTalkspace />} />
            <Route path="/compare/platforms/talkspace-vs-online-therapy" element={<TalkspaceVsOnlineTherapy />} />
            <Route path="/compare/platforms/medication-therapy" element={<MedicationTherapyPlatforms />} />
            <Route path="/compare/platforms/general-therapy" element={<GeneralTherapyPlatforms />} />
            <Route path="/compare/platforms/specialized" element={<SpecializedTherapyPlatforms />} />
            <Route path="/compare/modalities/cbt-vs-psychodynamic" element={<CBTVsPsychodynamic />} />
            <Route path="/compare/alternatives/affordable-betterhelp-alternatives" element={<AffordableBetterHelpAlternatives />} />
            <Route path="/compare/alternatives/talkspace-alternatives" element={<TalkspaceAlternatives />} />
            <Route path="/compare/alternatives/free-therapy-options" element={<FreeTherapyOptions />} />
            <Route path="/compare/roundups" element={<RoundupsPage />} />
            <Route path="/compare/roundups/top-therapy-platforms-compared" element={<TopTherapyPlatformsCompared />} />
            <Route path="/compare/roundups/best-therapy-apps-compared" element={<BestTherapyAppsCompared />} />
            <Route path="/compare/roundups/insurance-friendly-platforms" element={<InsuranceFriendlyPlatforms />} />
            <Route path="/compare/alternatives" element={<TherapyAlternatives />} />
            <Route path="/reviews/*" element={<ReviewsPage />} />
            <Route path="/reviews/platforms" element={<ReviewsPlatforms />} />
            <Route path="/reviews/platforms/betterhelp" element={<BetterHelpReview />} />
            <Route path="/reviews/platforms/talkspace" element={<TalkspaceReview />} />
            <Route path="/reviews/platforms/cerebral" element={<CerebralReview />} />
            <Route path="/reviews/platforms/calmerry" element={<CalmerryReview />} />
            <Route path="/reviews/platforms/online-therapy" element={<OnlineTherapyReview />} />
            <Route path="/reviews/platforms/online-therapy-com" element={<OnlineTherapyComReview />} />
            <Route path="/reviews/platforms/brightside" element={<BrightsideReview />} />
            <Route path="/reviews/platforms/regain" element={<ReGainReview />} />
            <Route path="/reviews/platforms/amwell" element={<AmwellReview />} />
            <Route path="/reviews/features" element={<ReviewsFeatures />} />
            <Route path="/reviews/features/video-session-quality" element={<VideoSessionQuality />} />
            <Route path="/reviews/features/betterhelp-therapist-quality" element={<BetterHelpTherapistQuality />} />
            <Route path="/reviews/features/communication" element={<Communication />} />
            <Route path="/reviews/features/therapist-matching-systems" element={<TherapistMatchingSystems />} />
            <Route path="/reviews/pricing" element={<ReviewsPricing />} />
            <Route path="/reviews/pricing/insurance-coverage-guide" element={<InsuranceCoverageGuide />} />
            <Route path="/reviews/pricing/online-therapy-pricing-comparison" element={<OnlineTherapyPricingComparison />} />
            <Route path="/reviews/specialty" element={<ReviewsSpecialty />} />
            <Route path="/reviews/specialty/talkspace-for-depression" element={<TalkspaceForDepression />} />
            <Route path="/reviews/specialty/online-therapy-for-ptsd" element={<OnlineTherapyForPTSD />} />
            <Route path="/reviews/specialty/anxiety-treatment" element={<AnxietyTreatment />} />
            <Route path="/reviews/specialty/couples-therapy" element={<CouplesTherapy />} />
            <Route path="/reviews/categories/medication-therapy" element={<MedicationTherapy />} />
            <Route path="/reviews/categories/general-therapy" element={<GeneralTherapy />} />
            <Route path="/reviews/categories/specialized" element={<SpecializedTherapy />} />
            <Route path="/guides/*" element={<GuidesPage />} />
            <Route path="/guides/selection/choosing-online-therapist" element={<ChoosingOnlineTherapist />} />
            <Route path="/guides/selection/first-therapy-session" element={<FirstTherapySession />} />
            <Route path="/guides/selection/red-flags-in-therapy" element={<RedFlagsInTherapy />} />
            <Route path="/guides/selection/therapy-types-explained" element={<TherapyTypesExplainedGuide />} />
            
            {/* Interest (Mid Priority) */}
            <Route path="/best/*" element={<BestPage />} />
            <Route path="/best/platforms" element={<BestPlatforms />} />
            <Route path="/best/platforms/best-online-therapy-platforms" element={<BestOnlineTherapyPlatforms />} />
            <Route path="/best/platforms/best-text-therapy-services" element={<BestTextTherapyServices />} />
            <Route path="/best/platforms/best-medication-therapy-platforms" element={<BestMedicationTherapyPlatforms />} />
            <Route path="/best/platforms/best-specialized-platforms" element={<BestSpecializedPlatforms />} />
            <Route path="/best/specific-needs" element={<BestSpecificNeeds />} />
            <Route path="/best/conditions" element={<BestConditions />} />
            <Route path="/best/conditions/best-for-addiction" element={<BestForAddiction />} />
            <Route path="/best/conditions/best-for-anxiety" element={<BestForAnxiety />} />
            <Route path="/best/conditions/best-for-depression" element={<BestForDepression />} />
            <Route path="/best/conditions/best-for-ocd" element={<BestForOCD />} />
            <Route path="/best/conditions/best-for-ptsd" element={<BestForPTSD />} />
            <Route path="/best/conditions/best-for-eating-disorders" element={<BestForEatingDisorders />} />
            <Route path="/best/audiences" element={<BestAudiences />} />
            <Route path="/best/audiences/best-for-teens" element={<BestForTeens />} />
            <Route path="/best/audiences/best-for-couples" element={<BestForCouples />} />
            <Route path="/best/audiences/best-for-lgbtq" element={<BestForLGBTQ />} />
            <Route path="/best/audiences/best-for-seniors" element={<BestForSeniors />} />
            <Route path="/best/audiences/best-for-veterans" element={<BestForVeterans />} />
            <Route path="/best/audiences/best-for-parents" element={<BestForParents />} />
            <Route path="/case-studies/*" element={<CaseStudiesPage />} />
            <Route path="/case-studies/conditions" element={<ConditionsPage />} />
            <Route path="/case-studies/demographics" element={<DemographicsPage />} />
            <Route path="/case-studies/conditions/anxiety-treatment-success" element={<AnxietyTreatmentSuccess />} />
            <Route path="/case-studies/conditions/depression-recovery-journey" element={<DepressionRecoveryJourney />} />
            <Route path="/case-studies/conditions/ptsd-treatment-online" element={<PTSDTreatmentOnline />} />
            <Route path="/case-studies/conditions/ocd-management-success" element={<OCDManagementSuccess />} />
            <Route path="/case-studies/demographics/remote-worker-mental-health" element={<RemoteWorkerMentalHealth />} />
            <Route path="/case-studies/demographics/rural-access-to-therapy" element={<RuralAccessToTherapy />} />
            <Route path="/case-studies/demographics/therapy-for-night-owls" element={<TherapyForNightOwls />} />
            <Route path="/case-studies/demographics/college-student-stress-management" element={<CollegeStudentStressManagement />} />
            <Route path="/tools/*" element={<ToolsPage />} />
            <Route path="/tools/assessments" element={<AssessmentsPage />} />
            <Route path="/tools/assessments/ocd-assessment" element={<OCDAssessment />} />
            <Route path="/tools/assessments/mental-health-assessment" element={<MentalHealthAssessment />} />
            <Route path="/tools/assessments/anxiety-screening" element={<AnxietyScreening />} />
            <Route path="/tools/assessments/depression-screening" element={<DepressionScreening />} />
            <Route path="/tools/assessments/stress-level-test" element={<StressLevelTest />} />
            <Route path="/tools/assessments/therapy-style-assessment" element={<TherapyStyleAssessment />} />
            <Route path="/tools/matchers" element={<MatchersPage />} />
            <Route path="/tools/matchers/therapy-platform-matcher" element={<TherapyPlatformMatcher />} />
            <Route path="/tools/matchers/budget-friendly-finder" element={<BudgetFriendlyFinder />} />
            <Route path="/tools/matchers/insurance-coverage-checker" element={<InsuranceCoverageChecker />} />
            <Route path="/tools/matchers/therapy-type-finder" element={<TherapyTypeFinder />} />
            <Route path="/tools/matchers/platform-finder" element={<PlatformFinderPage />} />
            <Route path="/resources/*" element={<ResourcesPage />} />
            <Route path="/resources/worksheets" element={<WorksheetsPage />} />
            
            {/* Conditions A-Z */}
            <Route path="/conditions-az" element={<ConditionsAZPage />} />
            <Route path="/conditions-az/anxiety-disorders" element={<AnxietyDisorderPage />} />
            <Route path="/conditions-az/depression" element={<DepressionPage />} />
            <Route path="/conditions-az/bipolar-disorder" element={<BipolarDisorderPage />} />
            <Route path="/conditions-az/ptsd" element={<PTSDPage />} />
            <Route path="/conditions-az/ocd" element={<OCDPage />} />
            <Route path="/conditions-az/eating-disorders" element={<EatingDisordersPage />} />
            <Route path="/conditions-az/adhd" element={<ADHDPage />} />
            <Route path="/conditions-az/schizophrenia" element={<SchizophreniaPage />} />
            <Route path="/conditions-az/borderline-personality-disorder" element={<BPDPage />} />
            <Route path="/conditions-az/addiction" element={<AddictionPage />} />
            <Route path="/conditions-az/social-anxiety" element={<SocialAnxietyPage />} />
            
            {/* Awareness (Foundation) */}
            <Route path="/learn/*" element={<LearnPage />} />
            <Route path="/learn/fundamentals" element={<LearnFundamentals />} />
            <Route path="/learn/statistics" element={<LearnStatistics />} />
            <Route path="/learn/fundamentals/therapy-types-explained" element={<TherapyTypesExplained />} />
            <Route path="/learn/fundamentals/online-therapy-guide" element={<OnlineTherapyGuide />} />
            <Route path="/learn/fundamentals/common-mental-health-conditions" element={<CommonMentalHealthConditions />} />
            <Route path="/learn/fundamentals/medication-vs-therapy" element={<MedicationVsTherapy />} />
            <Route path="/learn/fundamentals/depression" element={<Depression />} />
            <Route path="/learn/statistics/mental-health-statistics" element={<MentalHealthStatistics />} />
            <Route path="/blog/*" element={<BlogPage />} />
            <Route path="/blog/all" element={<BlogAll />} />
            <Route path="/blog/stories" element={<BlogStories />} />
            <Route path="/blog/stories/therapist-interviews" element={<TherapistInterviews />} />
            <Route path="/blog/stories/self-care-practices" element={<SelfCarePractices />} />
            <Route path="/blog/guides" element={<BlogGuides />} />
            <Route path="/blog/guides/insurance-coverage-guide" element={<BlogInsuranceCoverageGuide />} />
            <Route path="/blog/news" element={<BlogNews />} />
            <Route path="/blog/news/latest-therapy-research" element={<LatestTherapyResearch />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
