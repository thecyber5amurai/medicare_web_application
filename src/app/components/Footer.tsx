"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, CircleCheck } from 'lucide-react';

const medicalCross = "/assets/medical-logo.png";

const links = [
    { href: "/", label: "Home" },
    { href: "/specialists", label: "Specialists" },
    { href: "/patient-care", label: "Patient Care" },
    { href: "/contact", label: "Contact" },
];

const departmentLinks = [
    { href: "/specialists?departments=cardiology", label: "Cardiology" },
    { href: "/specialists?departments=neurology", label: "Neurology" },
    { href: "/specialists?departments=orthopedics", label: "Orthopedics" },
    { href: "/specialists?departments=pediatrics", label: "Pediatrics" },
    { href: "/specialists?departments=dermatology", label: "Dermatology" },
    { href: "/specialists?departments=internal-medicine", label: "Internal Medicine" },
];

const patientCareLinks = [
    { href: "/book-appointment", label: "Book Appointment" },
    { href: "/specialists", label: "Find a Specialist" },
    { href: "/login", label: "Patient Portal" },
];

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 text-gray-600">
            <div className="px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="space-y-4 md:col-span-1">
                        <div className="flex items-center space-x-2">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="flex items-center justify-center">
                                    <Image src={medicalCross} width={50} height={50} alt="medical-logo-cross" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-slate-900 text-lg leading-none">Medi<span className="text-sky-400">Care</span></span>
                                    <span className="text-[10px] tracking-wider text-slate-400 font-semibold uppercase">Health Platform</span>
                                </div>
                            </Link>
                        </div>
                        <p className="text-lg text-gray-500">
                            Next-generation healthcare delivering clinical precision, patient dignity, and comprehensive in-person medical care.
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-base font-medium border border-slate-100">
                                <CircleCheck className="w-4 h-4 text-sky-700" /> HIPAA Compliant
                            </span>
                            <span className="inline-flex items-center gap-1 bg-slate-50 text-slate-700 px-3 py-1 rounded-full text-base font-medium border border-slate-100">
                                <Award className="w-4 h-4 text-sky-600" /> JCAHO Accredited
                            </span>
                            <span className="inline-flex items-center gap-1 bg-slate-50 text-slate-700 px-3 py-1 rounded-full text-base font-medium border border-slate-100">
                                <ShieldCheck className="w-4 h-4 text-sky-700" /> Board-Certified Faculty
                            </span>
                        </div>
                        <div className="bg-slate-100 border border-slate-100 p-4 rounded-2xl flex items-center justify-between mt-4">
                            <div>
                                <span className="text-xs font-bold tracking-wider text-slate-400 block">24/7 CLINICAL DESK</span>
                                <a href="tel:18006334227" className="text-sky-700 font-bold text-lg hover:underline">
                                    1-800-MEDICARE
                                </a>
                            </div>
                            <a
                                href="tel:18006334227"
                                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-4 py-2 rounded-xl text-sm font-medium shadow-sm transition"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4 text-lg">Quick Links</h3>
                        <ul className="space-y-3 text-base">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-sky-300 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4 text-lg">Specialists</h3>
                        <ul className="space-y-3 text-base">
                            {departmentLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-sky-300 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4 text-lg">Patient Care</h3>
                        <ul className="space-y-3 text-base">
                            {patientCareLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-sky-300 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
                    <p>© 2026 MediCare Health Systems Inc. All rights reserved.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 sm:mt-0">
                        <Link href="/privacy-policy" className="hover:underline">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:underline">
                            Terms of Clinical Service
                        </Link>
                        <Link href="/notice" className="hover:underline">
                            Notice of Privacy Practices (HIPAA)
                        </Link>
                        <Link href="/accessibility" className="hover:underline">
                            Nondiscrimination & Accessibility
                        </Link>
                    </div>
                </div>

            </div>
    </footer>
    );
}