import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#2d3142] text-lg font-semibold sm:text-2lg rounded md:p-0 hover:-translate-y-1 hover:delay-200 transition-transform ">
      <button className='flex'><svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d={title} />
      </svg></button>
    </Link>
  );
};

export default NavLink 