"use client";

import {
  CogIcon,
  BookOpenIcon,
  DocumentIcon,
  UserIcon,
  FolderOpenIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Flashcards", href: "/dashboard/flashcards", icon: DocumentDuplicateIcon },
  {
    name: "Sets",
    href: "/dashboard/sets",
    icon: FolderOpenIcon,
  },
  {
    name: "Exercises",
    href: "/dashboard/exercises",
    icon: BookOpenIcon,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: CogIcon,
  },
  {
    name: "Account",
    href: "/dashboard/account",
    icon: UserIcon,
  },
];
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            // Apply `mt-auto` only to the last link element to push it to the bottom
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3", 
              {
                // Highlight the active link
                "bg-sky-100 text-white": pathname === link.href,
                // Add 'mt-auto' to the last link to push it to the bottom
                "mt-auto": index === links.length - 1,
              }
            )}
            style={{ backgroundColor: '#16B5B0' }}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

// export default function NavLinks() {
//   const pathname = usePathname();
//   return (
//     <>
//       {links.map((link) => {
//         const LinkIcon = link.icon;
//         return (
//           <Link
//             key={link.name}
//             href={link.href}
//             className={clsx(
//               "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3" ,
//               {
//                 "bg-sky-100 text-white": pathname === link.href,
//               }
              
//             ) } style={{ backgroundColor: '#16B5B0' }}
//           >
//             <LinkIcon className="w-6" />
//             <p className="hidden md:block">{link.name}</p>
//           </Link>
//         );
//       })}
//     </>
//   );
// }
