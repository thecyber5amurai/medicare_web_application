import Image from "next/image";
import HeroSearch from "./HeroSearch";

const heroBg = "/assets/doctors-are-here-for-you.jpg";

export default function HeroSection() {
    return (
        <section className="bg-slate-50">
            <div className="px-4 py-16 sm:px-6 lg:px-8 mx-auto max-w-screen-2xl">

                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <p className="flex items-center gap-2 text-base font-semibold uppercase tracking-wide text-sky-700">
                            <span className="h-2 w-2 rounded-full bg-sky-700" />
                            Board-certified clinical network
                        </p>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Your health, connected to{" "}
                            <span className="text-sky-700">
                                exceptional care.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
                            Find verified specialists, schedule in-person clinic
                            consultations, and manage diagnostics seamlessly with
                            HIPAA-compliant standards.
                        </p>

                        {/* Statistics */}
                        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
                            <div>
                                <strong className="text-base text-slate-900">500+</strong>{" "}
                                Doctors
                            </div>

                            <span className="text-slate-300">•</span>

                            <div>
                                <strong className="text-base text-slate-900">45+</strong>{" "}
                                Specialties
                            </div>

                            <span className="text-slate-300">•</span>

                            <div>
                                <strong className="text-base text-slate-900">24/7</strong>{" "}
                                On-Demand Triage
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src={heroBg}
                            alt="Doctor providing healthcare services"
                            width={400}
                            height={400}
                            priority
                            className="w-full rounded-2xl object-cover"
                        />
                    </div>

                </div>
                <HeroSearch />
            </div>
        </section>
    );
}