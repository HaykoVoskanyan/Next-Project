'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');

    return (
        <div>
            <Link 
                className={`hover:text-amber-950 font-semibold ${genre === param ? 'border-b-2 border-red-600' : ''}`}
                href={`/?genre=${param}`}
            >
                {title}
            </Link>
        </div>
    );
}