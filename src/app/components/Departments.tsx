import Link from "next/link";
import {
    ArrowRight,
    Baby,
    Bone,
    Brain,
    HeartPulse,
    ScanFace,
    Stethoscope,
} from "lucide-react";


interface ClinicalUnits {
    id: string;
    title: string;
    description: string;
    href: string;
    icon: React.ReactNode;
}

const clinicalUnits: ClinicalUnits[] = [
    {
        id: "1",
        title: "Cardiovascular Care",
        description: "Hemodynamic evaluation, Holter telemetry, arrhythmia monitoring, and preventive cardiac health.",
        href: "/specialists?department=cardiology",
        icon: <HeartPulse className="w-6 h-6 text-sky-700" />,
    },
    
    {
        id: "2",
        title: "Pediatrics & Adolescent Health",
        description: "Developmental milestones, immunizations, pediatric wellness, and compassionate family care.",
        href: "/specialists?department=pediatrics",
        icon: <Baby className="w-6 h-6 text-sky-700" />,
    },

    {
        id: "3",
        title: "Dermatology & Skin Health",
        description: "Dermoscopic evaluation, inflammatory therapies, eczema management, and preventative screening.",
        href: "/specialists?department=dermatology",
        icon: <ScanFace className="w-6 h-6 text-sky-700" />,
    },

    {
        id: "4",
        title: "Orthopedics & Sports Medicine",
        description: "Joint care, post-surgical recovery, sports injury management, and physical rehabilitation.",
        href: "/specialists?department=orthopedics",
        icon: <Bone className="w-6 h-6 text-sky-700" />,
    },

    {
        id: "5",
        title: "Internal Medicine & Diagnostics",
        description: "Routine annual exams, multi-system wellness evaluations, and chronic care management.",
        href: "/specialists?department=internal-medicine",
        icon: <Stethoscope className="w-6 h-6 text-sky-700" />,
    },

    {
        id: "6",
        title: "Neurology & Cognitive Health",
        description: "Central nervous system evaluations, headache and migraine care and cognitive wellness",
        href: "/specialists?department=neurology",
        icon: <Brain className="w-6 h-6 text-sky-700" />,
    },
];

export default function SpecializedUnits() {
    return (
        <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto max-w-screen-2xl">

                {/* Section Header with Title, Description, and Link */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                            Specialized Clinical Units
                        </h2>
                        <p className="text-slate-600 mt-1.5 text-base sm:text-base">
                            Board-certified departments providing coordinated outpatient and diagnostic treatment paths.
                        </p>
                    </div>

                    <Link
                        href="/specialists"
                        className="inline-flex items-center space-x-1.5 text-lg font-semibold text-sky-700 hover:text-blue-700 transition-colors group"
                    >
                        <span>View All Specialties</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clinicalUnits.map((department) => (
                        <div
                            key={department.id}
                            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between hover:-translate-y-1"
                        >
                            <div>
                                {/* Icon Container with light background */}
                                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
                                    {department.icon}
                                </div>

                                {/* Unit Title */}
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {department.title}
                                </h3>

                                {/* Unit Description */}
                                <p className="text-base text-slate-600 leading-relaxed mb-6">
                                    {department.description}
                                </p>
                            </div>

                            {/* Action Link */}
                            <Link
                                href={department.href}
                                className="inline-flex items-center space-x-1 text-base font-bold text-slate-600 hover:text-blue-700 transition-colors group/link pt-2 border-t border-slate-50"
                            >
                                <span>Explore Department</span>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );

}