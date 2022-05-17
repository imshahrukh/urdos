import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

interface ILandingCard {
  width: number;
  playbutton?: boolean;
  image: string | any;
  prim?: boolean;
}
export const LandingPageCard: FC<ILandingCard> = ({
  width,
  playbutton = false,
  image,
  prim = false,
}) => {
  return (
    <div
      className={`relative rounded shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300 ease-in-out `}
      style={{
        width: width + "px",
      }}
    >
      <a className="relative block col-span-3 rounded-xl" href="">
        <Image
          src={image}
          className="rounded-t-xl max-w-44 rounded"
          alt="tour"
          width={280}
          height={300}
          //   lxayout="fill"
        />
        {prim ? (
          <div className="absolute top-1 right-2 bg-red-500 rounded px-2 shadow-2xl text-white z-20">
            Premium
          </div>
        ) : (
          <></>
        )}
      </a>

      <div className="flex justify-between items-center">
        <p className="text-md rounded md:text-md text-black pt-2 pl-1">
          {" "}
          Lembang{" "}
        </p>
        {playbutton ? (
          <Link href="/show/1">
            <AiFillPlayCircle className="text-5xl text-pinkDark cursor-pointer  hover:text-black"></AiFillPlayCircle>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
