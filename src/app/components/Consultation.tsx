import Link from 'next/link';
import { Calendar, Compass, Clock } from 'lucide-react';
import { Button } from './ui/Button';

export default function ConsultationBanner() {
    return (
        <section className="w-full my-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0d4f7c] via-[#086375] to-[#11998e] p-8 md:p-12 text-white shadow-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-base font-medium backdrop-blur-md mb-6 border border-white/10">
                    <Clock className="w-4 h-4 text-white/80" />
                    <span>SAME-DAY APPOINTMENTS AVAILABLE</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-7xl leading-tight mb-4">
                    Ready to Prioritize Your Wellbeing? <br />
                    Schedule a Consultation Today.
                </h2>

                {/* Subtext */}
                <p className="text-gray-300 text-base md:text-base max-w-2xl mb-8 leading-relaxed">
                    Experience healthcare designed around dignity, transparency, and clinical excellence.
                    Book online in 60 seconds with our verified specialists.
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <Link href="/book-appointment">
                        <Button variant="secondary" size="lg" className="flex items-center gap-2">
                            <Calendar className="w-6 h-5 mr-2" />
                            Book Appointment
                        </Button>
                    </Link>
                    <Link href="/specialists">
                        <Button variant="primary" size="lg" className="flex items-center gap-2">
                            <Compass className="w-6 h-5 mr-2" />
                            Explore Specialists
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}