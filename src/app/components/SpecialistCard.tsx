import Link from "next/link";
import { HeartPulse, Brain, Baby, CircleCheck, ArrowRight } from "lucide-react";

interface Specialist {
    id: number;
    name: string;
    specialty: string;
    description: string;
    icon: React.ReactNode;
    status: string;
}

const specialists: Specialist[] = [
    {
        id: 1,
        name: "Dr. Marcus Vance, MD",
        specialty: "Cardiovascular Surgery",
        description: "Senior attending specialist with 16+ years clinical practice in comprehensive cardiac care and structural diagnostics",
        icon: <HeartPulse className="w-6 h-6 text-sky-700" />,
        status: "In-Clinic Today"
    },

    {
        id: 2,
        name: "Dr. Sarah Lin, MD, PhD",
        specialty: "Neurology & Cognitive Care",
        description: "Chief Of outpatient neurology specializing in neuromuscular evaluations, migraine therapy and cognitive rehabilitation.",
        icon: <Brain className="w-6 h-6 text-sky-700" />,
        status: "Accepting Patients"
    },

    {
        id: 3,
        name: "Dr. Elena Gomez, MD",
        specialty: "Pediatric Medicine",
        description: "Dedicated pediatric clinician with extensive background in developmental milestone, early immunization and preventive care.",
        icon: <Baby className="w-6 h-6 text-sky-700" />,
        status: "Appointments Open"
    }
]



export default function Specialists() {
    return (
        <section className="w-full bg-slate-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto max-w-screen-2xl">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                            Featured Senior Specialists
                        </h2>
                        <p className="text-gray-500 text-base mt-1">
                            Direct consultations available with leading medical faculty.
                        </p>
                    </div>

                    {/* Real-time availability indicator */}
                    <div className="flex items-center gap-2 text-base text-gray-600 mt-4 md:mt-0">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        <span>Real-time availability</span>
                    </div>
                </div>

                {/* Responsive Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specialists.map((doc) => (
                        <div
                            key={doc.id}
                            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between hover:-translate-y-1"
                        >
                            <div>
                                {/* Header with Icon & Name */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100">
                                        {doc.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-lg">{doc.name}</h3>
                                        <p className="text-base text-gray-500">{doc.specialty}</p>
                                    </div>
                                </div>

                                {/* Bio / Description */}
                                <p className="text-gray-600 text-base leading-relaxed mb-6">
                                    {doc.description}
                                </p>
                            </div>

                            {/* Footer: Status & Link */}
                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-sky-700 font-medium">
                                    <CircleCheck className="w-4 h-4" />
                                    <span>{doc.status}</span>
                                </div>

                                <Link
                                    href={`/specialists/${doc.id}`}
                                    className="text-sky-700 font-medium hover:text-blue-700 flex items-center gap-1 transition-colors group"
                                >
                                    <span>View Profile</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


