import { ShieldCheck, Award, Smile, Users } from 'lucide-react';

interface Stats {
    id: number;
    title: string;
    description: string;
    value: string;
    icon: React.ReactNode;
}

const statsData: Stats[] = [
    {
        id: 1,
        icon: <ShieldCheck className="w-6 h-6 text-sky-700" />,
        value: "15+ Years",
        title: "Clinical Excellence",
        description: "Continuous community service and inpatient/outpatient healthcare leadership across the region."
    },

    {
        id: 2,
        icon: <Users className="w-6 h-6 text-sky-700" />,
        value: "120+",
        title: "Board-Certified Specialists",
        description: "Senior attending practitioners vetted through rigorous clinical credentials and academic faculty criteria."
    },

    {
        id: 3,
        icon: <Smile className="w-6 h-6 text-sky-700" />,
        value: "99.0%",
        title: "Patient Satisfaction",
        description: "Demonstrated therapeutic outcomes and consistent top ratings across outpatient post-visit surveys."
    },

    {
        id: 4,
        icon: <Award className="w-6 h-6 text-sky-700" />,
        value: "Accredited",
        title: "JCAHO & HIPAA Standards",
        description: "Fully compliant medical center adhering to the highest patient safety and federal privacy directives."
    }
]

export default function AboutSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left side of the grid*/}
                <div className="lg:col-span-5 space-y-6">
                    <div className="inline-flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-700"></span>
                        <span className="text-base font-bold tracking-wider text-sky-700 uppercase">About MediCare</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">Dedicated to Uncompromising Clinical Standards & Compassionate Care</h2>
                    <p className="text-gray-500 leading-relaxed text-base">Founded on the belief that healthcare must center on clinical precision, dignity, and personal connection, MediCare bridges advanced diagnostic infrastructure with an elite network of multidisciplinary physicians. Our integrated ambulatory campuses provide coordinated outpatient treatments, specialized diagnostics, and longitudinal preventive care under one roof.</p>
                    <div className='flex items-center gap-4'>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between gap-4">
                            <div className='flex items-center gap-3'>
                                <ShieldCheck className="w-6 h-6 text-sky-700" />
                                <span className='text-base font-bold'>Hospital-Grade Rigor</span>
                            </div>
                            <p className='text-base text-gray-500'>On-site certified laboratories, digital imaging suites, and multidisciplinary surgical consultation rooms.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between gap-4">
                            <div className='flex items-center gap-3'>
                                <Users className="w-6 h-6 text-sky-700" />
                                <span className='text-base font-bold'>Patient-First Focus</span>
                            </div>
                            <p className='text-base text-gray-500'>Unrushed face-to-face clinical consultations tailored to your individual health journey and family needs.</p>
                        </div>
                    </div>
                </div>

                {/*Right side of the grid*/}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {statsData.map((stats) => (
                        <div
                            key={stats.id}
                            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex flex-col gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100">
                                        {stats.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-xl">{stats.value}</h3>
                                        <p className="text-base text-gray-500">{stats.title}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-base leading-relaxed mb-6">
                                    {stats.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}