import Link from "next/link";
import logo from "./../kuku/icons/Urdios-Logo-180x40.png";
import Image from "next/image";

export const SideNav = () => {
  const items = [
    {
      name: "Dashboard",
      route: "/dashboard",
    },
    {
      name: "Add Book",
      route: "/dashboard/new-series/add-information",
    },
    {
      name: "All Books",
      route: "/dashboard/all-series",
    },
    {
      name: "Category",
      route: "/dashboard/category",
    },
  ];
  return (
    <div className="w-1/6 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
      <div className="px-8">
        <div className="h-16 w-full flex items-center">
          <Image
            src={logo}
            className="rounded-t-xl max-w-44 rounded text-white"
            alt="tour"
            width={180}
            height={40}
            //   lxayout="fill"
          />
        </div>
        <ul className="mt-12">
          {items.map((el, key) => (
            // eslint-disable-next-line @next/next/link-passhref
            <Link key={key} href={el.route}>
              <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-grid"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={4} width={6} height={6} rx={1} />
                    <rect x={14} y={4} width={6} height={6} rx={1} />
                    <rect x={4} y={14} width={6} height={6} rx={1} />
                    <rect x={14} y={14} width={6} height={6} rx={1} />
                  </svg>
                  <span className="text-sm  ml-2">{el.name}</span>
                </div>
                {/* <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                  5
                </div> */}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
