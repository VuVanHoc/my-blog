"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navigationLinks = [
    { title: `About me`, href: `/` },
    { title: `Projects`, href: `/projects` },
    { title: `Posts`, href: `/posts` },
  ];
  return (
    <div className="text-center">
      <Image
        alt="VuVanHoc's avatar"
        src="/avatar.jpg"
        width={200}
        height={200}
        className="rounded-full"
        priority
      />
      <p className="text-xl font-bold">Vũ Văn Học</p>

      <nav>
        <ul className="hover:cursor-pointer">
          {navigationLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li
                key={link.href}
                className="flex justify-center items-center text-slate-400 px-1 py-2 hover:text-sky-700 font-medium hover:font-bold"
              >
                {link.icon}
                <Link
                  href={link.href}
                  // className={isActive ? "text-sky-700" : "text-slate-400"}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
