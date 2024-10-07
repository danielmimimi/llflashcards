import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
        className="mb-2 flex h-20 items-center justify-start rounded-md bg-blue-200 p-4 md:h-40"
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
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
