import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import BusinessConfirmation from "@/components/BusinessConfirmation";
import CountdownTimer from "@/components/CountdownTimer";
import ExclusiveBenefits from "@/components/ExclusiveBenefits";
import StepProcess from "@/components/StepProcess";
import ReadyDocuments from "@/components/ReadyDocuments";
import VideoGuide from "@/components/VideoGuide";
import DifferenceSection from "@/components/DifferenceSection";
import AprilRewards from "@/components/AprilRewards";
import FAQ from "@/components/FAQ";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <Hero />
      <WhoWeAre />
      <BusinessConfirmation />
      <CountdownTimer />
      <ExclusiveBenefits />
      <StepProcess />
      <ReadyDocuments />
      <VideoGuide />
      <DifferenceSection />
      <AprilRewards />
      <FAQ />
      <SocialProof />
    </div>
  );
}
