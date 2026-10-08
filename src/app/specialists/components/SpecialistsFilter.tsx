"use client";
import { PhoneCall, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";


interface SpecialtySelection  {
    id: number;
    label: string;
    count: number;
};

interface AvailabilityButton {
    id: string;
    label: string;
};

const availabilityButtons: AvailabilityButton[] = [
    { id: "today", label: "Today" },
    { id: "tomorrow", label: "Tomorrow" },
    { id: "week", label: "This Week" },
    { id: "weekend", label: "Weekend" },
];

const specialtySelections: SpecialtySelection[] = [
    { id: 1, label: "All Specialties", count: 480 },
    { id: 2, label: "Cardiology", count: 42 },
    { id: 3, label: "Dermatology", count: 38 },
    { id: 4, label: "Pediatrics", count: 56 },
    { id: 5, label: "Orthopedics", count: 29 },
    { id: 6, label: "Neurology", count: 18 },
]

type SortOption = "Highest Rated" | "Earliest Available" | "Most Experienced" | "Price: Low to High";

export default function SpecialistsFilter() {
    const [fee, setFee] = useState(220);
    const [availability, setAvailability] = useState("today");
    const [selectedSpecialty, setSelectedSpecialty] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState<SortOption>("Highest Rated");

    function handleSpecialtyChange(specialtyId: number) {
        setSelectedSpecialty((prev) => 
            prev.includes(specialtyId.toString())
                ? prev.filter((id) => id !== specialtyId.toString())
                : [...prev, specialtyId.toString()]
        );
    }


    return (
        <aside className="w-80 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-6 m-8">

            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <SlidersHorizontal className="w-4 h-4 text-slate-700" />
                    <span>Filter Practitioners</span>
                </div>
                <button className="text-sm font-medium text-sky-700 hover:underline">
                    Reset
                </button>
            </div>

            {/* 1. Doctor/Hospital Name Search */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">
                    Doctor or Hospital Name
                </label>
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                        type="search"
                        value={searchQuery}
                        placeholder="e.g. Vance, St. Jude...."
                        className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50/50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* 2. Clinical Specialty Checklist */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 text-base">Clinical Specialty</span>
                    <span className="text-slate-500">7 Available</span>
                </div>

                <div className="flex flex-col gap-2.5">
                    {specialtySelections.map((specialty) => (
                        <label key={specialty.id} className="flex items-center justify-between text-sm cursor-pointer group">
                            <div className="flex items-center gap-2.5">
                                <input
                                    type="checkbox"
                                    checked={selectedSpecialty.includes(specialty.id.toString())}
                                    onChange={() => handleSpecialtyChange(specialty.id)}
                                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                                />
                                <span className="text-slate-700 group-hover:text-slate-900 text-base">{specialty.label}</span>
                            </div>
                            <span className="text-sm bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                                {specialty.count}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* 3. Earliest Availability (Segmented Buttons) */}
            <div className="flex flex-col gap-2.5">
                <span className="text-base font-semibold text-slate-900">Earliest Availability</span>
                <div className="grid grid-cols-2 gap-2">
                    {availabilityButtons.map((btn) => (
                        <button
                            key={btn.id}
                            onClick={() => setAvailability(btn.id)}
                            className={`py-2 text-xs font-medium rounded-lg transition-all ${availability === btn.id
                                ? "bg-sky-700 text-white shadow-sm"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* 5. Max Consultation Fee (Range Slider) */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-slate-900">Max Consultation Fee</span>
                    <span className="text-sm font-bold text-sky-900 bg-slate-100 px-2 py-0.5 rounded">
                        ${fee}
                    </span>
                </div>
                <input
                    type="range"
                    min="50"
                    max="300"
                    value={fee}
                    onChange={(e) => setFee(Number(e.target.value))}
                    className="w-full accent-sky-900 cursor-pointer"
                />
                <div className="flex justify-between text-[12px] text-slate-400 font-medium">
                    <span>$50</span>
                    <span>$300+</span>
                </div>
            </div>

            {/* 6. Alert/Support Banner */}
            <div className="bg-indigo-50/60 border border-indigo-100/60 rounded-xl p-3.5 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-sm font-bold text-sky-900">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Need Immediate Triage?</span>
                </div>
                <p className="text-[12px] text-slate-600 leading-relaxed">
                    24/7 on-call nurse line for quick clinical guidance.
                </p>
                <a href="tel:18006334227" className="text-sm font-semibold text-sky-900 hover:underline inline-flex items-center gap-1">
                    Call 1-800-633-4227 &rarr;
                </a>
            </div>

        </aside>

    );
}