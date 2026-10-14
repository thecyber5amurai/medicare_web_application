"use client";
import { PhoneCall, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import type { Database } from "@/types/database.types";
import SpecialistCard from "./SpecialistCard";


interface SpecialtySelection {
    id: string;
    name: string;
};

type AvailabilityButton = {
    value: "today" | "tomorrow" | "week" | "weekend"
    label: string;
};

interface Specialist {
    id: string;
    professional_title: string | null;
    consultation_fee: number | null;
    experience_years: number | null;
    qualification: string | null;
    hospital: string | null;
    is_available: boolean | null;
    is_verified: Database["public"]["Enums"]["is_verified"];
    profile: {
        first_name: string | null;
        last_name: string | null;
        avatar_url: string | null;
    } | null;
    specialist_departments: {
        department: {
            id: string;
            name: string;
        } | null;
    }[];
}

interface SpecialistsFilterProps {
    specialists: Specialist[];
    specialties: SpecialtySelection[];
}

const availabilityButtons: AvailabilityButton[] = [
    { value: "today", label: "Today" },
    { value: "tomorrow", label: "Tomorrow" },
    { value: "week", label: "This Week" },
    { value: "weekend", label: "Weekend" },
];

type SortOption = "Most Experienced" | "Price: Low to High";

export default function SpecialistsFilter({ specialists, specialties }: SpecialistsFilterProps) {
    const [fee, setFee] = useState(220);
    const [available, setAvailable] = useState(false);
    const [selectedSpecialty, setSelectedSpecialty] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState<SortOption>("Most Experienced");
    const [availability, setAvailability] = useState("");

    function handleSpecialtyChange(specialtyId: string) {
        setSelectedSpecialty((prev) =>
            prev.includes(specialtyId)
                ? prev.filter((id) => id !== specialtyId)
                : [...prev, specialtyId]
        );
    }


    const departmentCounts = useMemo(() => {
        const counts: Record<string, number> = {};

        for (const department of specialties) {
            counts[department.id] = 0;
        }

        for (const specialist of specialists) {
            for (const item of specialist.specialist_departments ?? []) {
                const departmentId = item.department?.id;

                if (departmentId && departmentId in counts) {
                    counts[departmentId] += 1;
                }
            }
        }
        return counts;
    }, [specialists, specialties]); 

    const availableCount = specialists.filter((specialist) => specialist.is_available === true).length;


    const filteredSpecialists = useMemo(() => {
        const filtered = specialists.filter((specialist) => {
            const fullName = [
                specialist.profile?.first_name ?? "",
                specialist.profile?.last_name ?? "",
            ]
                .join(" ")
                .toLowerCase()
                .trim();

            const query = searchQuery.toLowerCase().trim();

            const matchesSearch =
                !query ||
                fullName.includes(query) ||
                (specialist.hospital ?? "").toLowerCase().includes(query);

            const matchesSpecialty =
                selectedSpecialty.length === 0 ||
                specialist.specialist_departments?.some(
                    (item) =>
                        item.department !== null &&
                        selectedSpecialty.includes(item.department.id)
                );

            const matchesAvailable =
                !available || specialist.is_available === true;

            const matchesFee =
                specialist.consultation_fee !== null &&
                specialist.consultation_fee <= fee;

            return (
                matchesSearch &&
                matchesAvailable &&
                matchesFee &&
                matchesSpecialty
            );
        });

        return [...filtered].sort((a, b) => {
            if (sortOption === "Most Experienced") {
                return (b.experience_years ?? -1) -
                    (a.experience_years ?? -1);
            }

            if (sortOption === "Price: Low to High") {
                return (a.consultation_fee ?? Infinity) -
                    (b.consultation_fee ?? Infinity);
            }
            return 0;
        });

    }, [
        specialists,
        searchQuery,
        available,
        fee,
        selectedSpecialty,
        sortOption
    ]);
    

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-80 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-6 m-8">

                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                        <SlidersHorizontal className="w-4 h-4 text-slate-700" />
                        <span>Filter Practitioners</span>
                    </div>
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
                        <span className="text-slate-500"> {availableCount} available</span>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <label className="flex items-center gap-2.5 text-sm cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedSpecialty.length === 0}
                                onChange={() => setSelectedSpecialty([])}
                                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                            />
                            <span className="text-slate-700 text-base">
                                All Specialists
                            </span>
                        </label>
                        {specialties.map((specialty) => (
                            <label key={specialty.id} className="flex items-center justify-between text-sm cursor-pointer group">
                                <div className="flex items-center gap-2.5">
                                    <input
                                        type="checkbox"
                                        checked={selectedSpecialty.includes(specialty.id)}
                                        onChange={() => handleSpecialtyChange(specialty.id)}
                                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                                    />
                                    <span className="text-slate-700 group-hover:text-slate-900 text-base">{specialty.name}</span>
                                </div>
                                <span className="text-sm bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                                    {departmentCounts[specialty.id] ?? 0}
                                </span>
                            </label>
                        ))}

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={available}
                                onChange={(e) =>
                                    setAvailable(e.target.checked)
                                }
                                className="h-4 w-4 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                                Accepting Appointments
                            </span>
                        </label>
                    </div>
                </div>

                {/* 3. Earliest Availability (Segmented Buttons) */}
                <div className="flex flex-col gap-2.5">
                    <span className="text-base font-semibold text-slate-900">Earliest Availability (Unavailable For Now)</span>
                    <div className="grid grid-cols-2 gap-2">
                        {availabilityButtons.map((btn) => (
                            <button
                                key={btn.value}
                                disabled
                                onClick={() => setAvailability(btn.value)}
                                className={`py-2 text-xs font-medium rounded-lg transition-all ${availability === btn.value
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

            {/* Result display along side the SortBy Dropdown*/}
            <main>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <p className="text-sm text-slate-600">
                       Showing {filteredSpecialists.length} of {specialists.length} specialists
                    </p>

                    <div className="flex items-center gap-2">
                        <label htmlFor="sortBy" className="text-sm font-medium">
                            Sort by:
                        </label>

                        <select
                            id="sortBy"
                            value={sortOption}
                            onChange={(e) =>
                                setSortOption(e.target.value as SortOption)
                            }
                            className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
                        >
                            <option value="Most Experienced">Most Experienced</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                        </select>
                    </div>
                </div>

                {/* Specialist cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredSpecialists.length > 0 ? (
                        filteredSpecialists.map((specialist) => (
                            <SpecialistCard
                                key={specialist.id}
                                specialist={specialist}
                            />
                        ))
                    ) : (
                        <div className="col-span-full py-10 text-center text-slate-500">
                            No specialists match was found
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}