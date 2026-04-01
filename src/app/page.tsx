import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import BusinessConfirmation from "@/components/BusinessConfirmation";
import CountdownTimer from "@/components/CountdownTimer";
import ExclusiveBenefits from "@/components/ExclusiveBenefits";
import StepProcess from "@/components/StepProcess";

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
    </div>
  );
}
