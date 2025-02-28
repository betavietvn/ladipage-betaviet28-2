import HeroSection from "./HeroSection";
import ContactForm from "./ContactForm";
import BenefitsSection from "./BenefitsSection";
import CustomerFeedback from "./CustomerFeedback";
import ProcessFlow from "./ProcessFlow";
import ArchitectureProjects from "./ArchitectureProjects";
import InteriorProjects from "./InteriorProjects";
import ConstructionVisit from "./ConstructionVisit";
import VideoReview from "./VideoReview";
import RegisterSection from "./RegisterSection";

import AboutUs from "./AboutUs";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialButtons from "./SocialButtons";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

function Home() {
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <div className="min-h-screen pt-16">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Contact Form */}
      <div className="relative">
        <HeroSection />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[400px] hidden lg:block">
          <ContactForm />
        </div>
        <div className="lg:hidden py-8 bg-[#B87B44]/10">
          <div className="container mx-auto px-4">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Floating consult button */}
      <Dialog
        open={consultOpen}
        onOpenChange={setConsultOpen}
        className="ml-10"
      >
        <DialogTrigger asChild>
          <button className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-[#B87B44] text-white py-3 px-4 rounded-r-md transform rotate-90 origin-left translate-y-20 shadow-lg whitespace-nowrap text-center translate-x-[12px]">
            Tư vấn miễn phí
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#B87B44]">
              Đăng ký tư vấn
            </h2>
            <button
              onClick={() => setConsultOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <ContactForm />
        </DialogContent>
      </Dialog>

      {/* Main Content in requested order */}
      <VideoReview />
      <CustomerFeedback />
      <section id="process">
        <ProcessFlow />
      </section>
      <section id="architecture">
        <ArchitectureProjects />
      </section>
      <section id="interior">
        <InteriorProjects />
      </section>
      <section id="construction">
        <ConstructionVisit />
      </section>
      <BenefitsSection />
      <AboutUs />
      <RegisterSection />

      {/* Social Buttons */}
      <SocialButtons />

      {/* Footer */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
