import Image from "next/image";
import { Calendar, Star, Building2, Check} from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/Button";

interface SpecialistCardProps {
    doctor: {
        first_name: string;
        last_name: string;
        profileUrl: string;
        bookUrl: string;
        isVerified: boolean;
        specialties: string[];
        hospital: string;
        rating: number;
        experience: number;
        reviewCount: number;
        consultationFee: number;
        nextAvailable: string;
        avatarUrl: string;
    }
}

export default function SpecialistCard({ doctor }: SpecialistCardProps) {
  return (
    <div className="max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      {/* Top Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        
        {/* Left: Avatar & Info */}
        <div className="flex items-start gap-4">
          {/* Avatar with Verified Status Badge */}
          <div className="relative flex-shrink-0">
            <Image
              src={doctor.avatarUrl}
              alt={`${doctor.first_name} ${doctor.last_name}`}
              width={72}
              height={72}
              className="h-18 w-18 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white ring-2 ring-white">
              <Check className="h-4 w-4" />
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900">{doctor.first_name} {doctor.last_name}</h2>
              {doctor.isVerified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50/80 px-2.5 py-0.5 text-xs font-medium text-sky-700">
                  Verified Physician
                </span>
              )}
            </div>

            <p className="text-base font-medium text-sky-400">
              {doctor.specialties.join(" • ")}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5 text-gray-400" />
                {doctor.hospital}
              </span>
              <span>•</span>
              <span>{doctor.experience} yrs experience</span>
            </div>

            <div className="flex items-center gap-1.5 pt-1 text-xs">
              <span className="flex items-center text-amber-500">
                <Star className="h-3.5 w-3.5 fill-current" />
              </span>
              <span className="font-semibold text-gray-900">{doctor.rating}</span>
              <span className="text-gray-500">({doctor.reviewCount} reviews)</span>
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
              ${doctor.consultationFee}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-5 border-gray-100" />

      {/* Bottom Footer Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Next Available Slot */}
        <div className="flex items-center gap-2 text-sm text-gray-700 sm:text-base">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="font-medium text-gray-500">Next Available:</span>
          <span className="font-semibold text-gray-900">{doctor.nextAvailable}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href={doctor.profileUrl}
          >
            <Button variant="primary" size="md">
                View Profile
            </Button>
          </Link>
          <Link
            href={doctor.bookUrl}
          >
            <Button variant="secondary" size="md">
                <Calendar className="h-4 w-4 text-white" />
                Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}