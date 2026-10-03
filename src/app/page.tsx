import HeroSection from "./components/HeroSection";
import SpecializedUnits from "./components/Departments";
import Specialists from "./components/SpecialistCard"
import ProcessSection from "./components/ProcessSection";
import AboutSection from "./components/AboutSection";
import ConsultationSection from "./components/Consultation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home - MediCare",
}

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