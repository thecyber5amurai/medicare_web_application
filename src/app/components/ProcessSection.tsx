import { UserSearch, CalendarDays, CircleCheck, SquarePlus } from "lucide-react";

interface Process {
    id: number;
    title: string;
    step: string;
    description: string;
    icon: React.ReactNode;
    status: string;
}

const process: Process[] = [
    {
        id: 1,
        title: "Find Your Doctor",
        description: "Filter through 500+ board-certified practitioners by specialty, hospital accreditation, language, and in-network insurance.",
        step: "01",
        icon: <UserSearch className="w-6 h-6 text-sky-700" />,
        status: "Verified Credentials"
    },

    {
        id: 2,
        title: "Select Date & Slot",
        description: "Review up-to-the-minute clinical availability calendars and select a consultation window that fits your schedule.",
        step: "02",
        icon: <CalendarDays className="w-6 h-6 text-sky-700" />,
        status: "Live Schedule Sync"
    },

    {
        id: 3,
        title: "Instant Confirmation",
        description: "Receive instant digital intake forms, calendar invites, preparation guidelines, and automatic insurance verification.",
        step: "03",
        icon: <CircleCheck className="w-6 h-6 text-sky-700" />,
        status: "Zero Paper Intake"
    },

    {
        id: 4,
        title: "In-Person Clinical Visit",
        description: "Attend your scheduled consultation at our medical center with your designated specialist team. Aftercare summaries and prescriptions sync instantly.",
        step: "04",
        icon: <SquarePlus className="w-6 h-6 text-sky-700" />,
        status: "Clinical Care"
    }
]


export default function ProcessSection() {
    return (
        <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto max-w-screen-2xl">
                <div className="flex flex-col md:flex-row md:items-end justify-center mb-10 gap-4 text-center">
                    <div>
                        <p className="tracking-wide font-semibold text-sky-700">SEAMLESS CARE PIPELINE</p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                            How MediCare Simplifies Your Clinical Path
                        </h2>
                        <p className="text-slate-600 mt-1.5 text-base sm:text-base">
                            From first search to ongoing clinical notes, our platform eliminates administrative delays.
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {process.map((process) => (
                        <div
                            key={process.id}
                            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6 font-bold text-sky-700 text-base">
                                    {process.step}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {process.title}
                                </h3>

                                {/* Unit Description */}
                                <p className="text-base text-slate-600 leading-relaxed mb-6">
                                    {process.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sky-700 font-medium">
                                {process.icon}
                                <span>{process.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}