import Image from "next/image";
import { Calendar, Building2, Check} from "lucide-react";
import type { Database } from "@/types/database.types";
import { Button } from "../../components/ui/Button";

interface SpecialistCardProps {
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
   

export default function SpecialistCard({ specialist }: {specialist: SpecialistCardProps}) {

  const fullName = `${specialist.professional_title} ${specialist.profile?.first_name} ${specialist.profile?.last_name}`.trim();
  
  const firstName = specialist.profile?.first_name ?? "";
  const lastName = specialist.profile?.last_name?? "";

  

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  const specialties = specialist.specialist_departments
    .map((item) => item.department?.name)
    .filter((name): name is string => Boolean(name));
  
  return (
    <div className="max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      {/* Top Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        {/* Left: Avatar & Info */}
        <div className="flex items-start gap-4">
          {/* Avatar with Verified Status Badge */}
          <div className="relative flex-shrink-0">
            {specialist.profile?.avatar_url ? (
              <Image
                src={specialist.profile.avatar_url}
                alt={fullName}
                width={96}
                height={96}
                className="rounded-full object-cover h-[72px] w-[72px]" />
            ) : (
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-sky-100 text-xl font-bold text-sky-700"
                aria-label={fullName} >
                {initials ?? "S"}
              </div>
            )}
            {/* Verification Badge*/}
            {specialist.is_verified === "approved" && (
              <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white ring-2 ring-white">
                <Check className="h-4 w-4" />
              </span>
            )}
          </div>

          {/* Details */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900">{fullName}</h2>

              {specialist.qualification && (
                <p className="text-base font-bold uppercase text-gray-900">
                  {specialist.qualification}
                </p>
              )}

              {specialist.is_verified === "approved" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50/80 px-2.5 py-0.5 text-xs font-medium text-sky-700">
                  Verified Physician
                </span>
              )}
            </div>

            <p className="text-base font-medium text-sky-400">
              {specialties.join(" • ")}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5 text-gray-400" />
                {specialist.hospital}
              </span>
              <span>•</span>
              <span>{specialist.experience_years} yrs experience</span>
            </div>
          </div>
        </div>

        {/* Right: Consultation Pricing & Type Tags */}
        <div className="flex flex-row justify-between sm:flex-col sm:items-end">
          <div className="text-left sm:text-right">
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Consultation
            </span>
            <div className="text-xl font-bold text-gray-900">
              ${specialist.consultation_fee}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-5 border-gray-100" />

      {/* Bottom Footer Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Action Buttons */}
        <div className="flex items-center gap-8">
          <Button variant="primary" size="md" href={`/specialists/${specialist.id}`}>
          View Profile
          </Button>
            <Button variant="secondary" size="md" href="/book-appointment" className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-white" />
                Book Appointment
            </Button>
        </div>
      </div>
    </div>
  );
}