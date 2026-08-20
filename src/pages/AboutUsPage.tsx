import React from "react";

import AboutHeroSection from "../components/about/AboutHeroSection";
import OurStorySection from "../components/about/OurStorySection";
import TeamSection from "../components/about/TeamSection";
import ValuesSection from "../components/about/ValuesSection";
import ContactFormSection from "../components/about/ContactFormSection";

const AboutUsPage: React.FC = () => {
  const [action, setAction] = React.useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-background-light dark:bg-transparent text-slate-900 dark:text-slate-100 font-display overflow-x-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Abstract decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-10 py-24 flex flex-col gap-12 md:gap-20 max-w-7xl">
        <AboutHeroSection />
        <TeamSection />

        {/* Side by Side Section: Quest Log (2/3) and Clan Values (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <OurStorySection />
          </div>
          <div className="lg:col-span-1">
            <ValuesSection />
          </div>
        </div>

        <ContactFormSection action={action} setAction={setAction} />
      </div>
    </div>
  );
};

export default AboutUsPage;
