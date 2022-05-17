/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import r2 from "./../kuku/religion2.jpeg";
import r3 from "./../kuku/religion1.jpeg";

import Image from "next/image";
import Link from "next/link";
export const SeriesDetailsCard = () => {
  return (
    <div className="flex w-1/4">
      <div className="p-4">
        <div className="h-full w-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
          <Image
            className="lg:h-48 md:h-36  w-full  object-center scale-110 transition-all duration-400 hover:scale-100"
            src={r3}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY-1
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3 text-sm text-gray-500">
              Photo booth fam kinfolk cold-pressed ...
            </p>
            <div className="flex items-center space-x-1 flex-wrap justify-center ">
              <Link href="/dashboard/new-series/12">
                <button className="bg-blue-500 px-6 text-white hover:scale-105  shadow-cla-blue  py-1 rounded-lg">
                  Add Audio
                </button>
              </Link>

              <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
