'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              { 'bg-sky-100 text-blue-600' : pathname === link.href ,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

// export default function NavLinks(){
//   return (
//     <>
//       {links.map(item => {
//         return (
//           <Link
//             key={item.name}
//             href={item.href}
//             className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
//           >
//             <LinkIcon className='w-6' />
//             <p className='hidden md:block'>{item.name}</p>
//           </Link>
//         )
//       })}
//     </>
//   );
// }

// export default function NavLinks(){
//   return (
//     <>
//     <Link
//       key={links[0].name}
//       href={links[0].href}
//       className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
//     >
//       <LinkIcon className='w-6'/>
//       <p className='hidden md:block'>{links[0].name}</p>
//     </Link>
//     <Link
//       key={links[1].name}
//       href={links[1].href}
//       className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
//     >
//       <LinkIcon className='w-6'/>
//       <p className='hidden md:block'>{links[1].name}</p>
//     </Link>
//     <Link
//       key={links[2].name}
//       href={links[2].href}
//       className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
//     >
//       <LinkIcon className='w-6'/>
//       <p className='hidden md:block'>{links[2].name}</p>
//     </Link>
//     </>
//   );
// }


