"use client";

import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Image from 'next/image';
import clsx from "clsx";
import {
  UserIcon
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
        className="mb-2 flex h-20 items-center justify-start rounded-md p-4 md:h-40" style={{ backgroundColor: '#16B5B0' }}
        href="/"
      >

  <div className="relative w-32 h-32 md:w-64 md:h-32">
        <Image
          src="/hslu.svg"
          alt="Example Image"
          layout="fill"
        />
      </div>

      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      <NavLinks />
      <div
        className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"
        style={{ backgroundColor: '#16B5B0' }}
      >
        {/* <Link key="User"
            href="/dashboard/user"

            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3", 
              {
                // Highlight the active link
                "bg-sky-100 text-white": pathname === "/dashboard/user"
              }
            )}>
        <UserIcon className="w-6" />
        <p className="hidden md:block">User</p>
        </Link> */}
      </div>
    </div>

  </div>


  );
}
