import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import BusinessConfirmation from "@/components/BusinessConfirmation";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <Hero />
      <WhoWeAre />
      <BusinessConfirmation />
    </div>
  );
}
