'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`relative group hover:text-pink-500 ${isActive ? 'text-pink-500' : 'text-white'}`}>
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-[2px] bg-pink-500 transition-all ease-in-out duration-300 transform ${
          isActive ? 'scale-x-100' : 'scale-x-0'
        } group-hover:scale-x-100`}
      ></span>
    </Link>
  );
}
