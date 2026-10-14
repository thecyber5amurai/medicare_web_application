import { createClient } from "../lib/supabase/server";
import SpecialistFilter from "../specialists/components/SpecialistsFilter";
import { ShieldCheck } from "lucide-react";

export default async function SpecialistsPage() {
  const supabase = await createClient();

  {/* Fetch all departments for the filter options. */ }
  const { data: specialists, error } = await supabase.from("specialists").select(`
      id,
      professional_title,
      consultation_fee,
      experience_years,
      qualification,
      hospital,
      is_verified,
      is_available,
      profile:profiles!specialists_profile_id_fkey (
        first_name,
        last_name,
        avatar_url
      ),
      specialist_departments (
        department:departments (
          id,
          name
        )
      )
    `);

  if (error) {
    console.error("Error fetching specialists:", error);
    return (
      <div>
        <div>Unable to load specialists.</div>
      </div>
    );
  }

  {/* Fetch specialists with their department relationships.*/ }
  const { data: specialties, error: specialtiesError } = await supabase
    .from("departments")
    .select("id, name")
    .order("name");

  if (specialtiesError) {
    console.error("Error fetching departments:", specialtiesError);
    return <div>Unable to load departments.</div>;
  }

  return (
    <>
      <main className="flex flex-col gap-8">
        <div className="space-y-3 max-w-2xl ml-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/80 text-sky-500 text-sm font-medium border border-indigo-100/50">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Verified Medical Staff • Board Certified Directory</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find Qualified Medical Specialists
          </h1>

          <p className="text-slate-600 text-base md:text-base leading-relaxed max-w-7xl">
            Connect with board-certified physicians for in-person consultations and telehealth appointments with real-time booking availability
          </p>
        </div>
        <SpecialistFilter
          specialists={specialists ?? []}
          specialties={specialties ?? []} />;
      </main>
    </>
  );
}