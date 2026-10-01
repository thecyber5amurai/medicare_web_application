import { Button } from "./ui/Button";

export default function HeroSearch() {
    return (
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

            <form className="grid gap-4 lg:grid-cols-[1.5fr_1.1fr_1.1fr_auto]">
                <div>
                    <label
                        htmlFor="condition"
                        className="mb-2 block text-sm font-medium uppercase tracking-wide text-slate-600"
                    >
                        Condition or provider
                    </label>

                    <input
                        id="condition"
                        type="text"
                        placeholder="e.g. Cardiology, Dr. Marcus"
                        className="w-full rounded-lg bg-slate-100 px-8 py-4  text-base outline-none focus:ring-2 focus:ring-sky-700"
                    />
                </div>
                <div>
                    <label
                        htmlFor="specialty"
                        className="mb-2 block text-base font-medium uppercase tracking-wide text-slate-600"
                    >
                        Specialty
                    </label>

                    <select
                        id="specialty"
                        className="w-full rounded-lg bg-slate-100 px-8 py-4  text-base outline-none focus:ring-2 focus:ring-sky-700"
                    >
                        <option>All Specialties</option>
                        <option>Cardiology</option>
                        <option>Dermatology</option>
                        <option>Neurology</option>
                        <option>Pediatrics</option>
                    </select>
                </div>

                {/* Location */}
                <div>
                    <label
                        htmlFor="location"
                        className="mb-2 block text-base font-medium uppercase tracking-wide text-slate-600"
                    >
                        Location
                    </label>

                    <input
                        id="location"
                        type="text"
                        placeholder="City or ZIP code"
                        className="w-full rounded-lg bg-slate-100 px-8 py-4  text-base outline-none focus:ring-2 focus:ring-sky-700"
                    />
                </div>

                {/* Button */}
                <div className="flex items-end">
                    <Button
                        type="submit"
                        size="lg"
                        variant="secondary"
                        className="w-full lg:w-auto"
                    >
                        Find Care
                    </Button>
                </div>

            </form>
        </div>
    );
}