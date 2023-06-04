"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import { FaMicrosoft, FaUser, FaReadme } from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();

  const navigationLinks = [
    { title: `About me`, href: `/home`, icon: <FaUser /> },
    { title: `Projects`, href: `/projects`, icon: <FaMicrosoft /> },
    { title: `Posts`, href: `/posts`, icon: <FaReadme /> },
  ];
  return (
    <div className="text-center w-1/5 bg-white pt-4">
      <Image
        alt="VuVanHoc's avatar"
        src="/avatar.jpg"
        width={100}
        height={100}
        className="rounded-full mx-auto"
        priority
      />
      <p className="text-xl font-bold">Vũ Văn Học</p>
      <code>{`Hello, I'm a Developer`}</code>
      <nav className="mt-8">
        <ul className="hover:cursor-pointer">
          {navigationLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cx(
                  "flex items-center py-4 px-5 hover:text-sky-700 hover:font-bold text-lg ml-4",
                  isActive
                    ? "text-sky-700 font-bold bg-slate-100 rounded-s-full"
                    : "text-slate-400 font-medium rounded-r-full"
                )}
              >
                {link.icon}
                <p className="pl-4">{link.title}</p>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
