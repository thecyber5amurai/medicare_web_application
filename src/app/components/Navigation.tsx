'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './ui/Button';

const medicalCross = "/assets/medical-logo.png";
const links = [
    { href: "/", label: "Home" },
    { href: "/specialists", label: "Specialists" },
    { href: "/patient-care", label: "Patient Care" },
    { href: "/contact", label: "Contact" },
];

export default function NavigationBar() {
    const pathname = usePathname();

    return (
        <header className="flex items-center m-10 gap-8 justify-between">
            <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center">
                    <Image src={medicalCross} width={50} height={50} alt="medical-logo-cross" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-slate-900 text-lg leading-none">Medi<span className="text-sky-400">Care</span></span>
                    <span className="text-[10px] tracking-wider text-slate-400 font-semibold uppercase">Health Platform</span>
                </div>
            </Link>

            <nav className="flex items-center gap-12">
                {links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`font-medium text-lg transition-colors ${isActive
                                    ? 'text-sky-400 font-semibold'
                                    : 'text-slate-500 hover:text-sky-300'
                                }`}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
            <div className="flex items-center gap-8">
                <div className="hidden lg:flex items-center gap-2 bg-blue-50/80 px-4 py-2 rounded-full text-xs font-bold border border-blue-100 mx-12">
                    <span className="text-sky-700 text-sm">✳</span>
                    <span className="text-xs text-sky-700">HOTLINE: 1-800-MEDICARE</span>
                </div>
                <Button variant='secondary' size='md'>
                    <Link href="/login">Sign In</Link>
                </Button>
                <Button variant="primary" size="md">
                    <Link href="/book-appointment">Book Appointment</Link>
                </Button>
            </div>
        </header>
    );
}