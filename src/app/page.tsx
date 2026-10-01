import HeroSection from "./components/HeroSection";
import SpecializedUnits from "./components/Departments";
import Specialists from "./components/SpecialistCard"
import ProcessSection from "./components/ProcessSection";
import AboutSection from "./components/AboutSection";
import ConsultationSection from "./components/Consultation";

export default function Home() {
    return (
        <>
       <HeroSection/>
       <SpecializedUnits />
       <Specialists/>
       <ProcessSection/>
       <AboutSection/>
       <ConsultationSection/>
        </>
    );
}