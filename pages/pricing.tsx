import { useState } from "react";
import { Banner } from "./components/banner";
import { TopNav } from "./components/top-nav";
import { AiFillHeart, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

let Question = () => {
  const [show, setShow] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setShow(!show)}
      className="focus:outline-none w-full flex flex-col p-5 rounded-xl bg-white bg-opacity-10 mb-2"
    >
      <div className="space-y-3 leading-5 w-full">
        <p className="font-medium flex-1 text-md leading-5 text-left">
          Kuku FM subscription ke kya fayde hain?
        </p>

        {show ? (
          <p className="font-medium flex-1 text-xs leading-5 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            placeat corporis. Quia officia delectus, eveniet quibusdam eos
            magnam commodi velit possimus rem, nisi dolorem ab eaque dolorum
            minima saepe in.
          </p>
        ) : (
          <></>
        )}
      </div>
    </button>
  );
};
const Pricing = () => {
  return (
    <div className="">
      <TopNav />
      <div className="bg-black flex justify-center items-center flex-col">
        <div className="w-3/5">
          / {/* Banner */}
          <Banner />
          {/* Banner Image */}
          {/* Offers - 1 */}
          <div className=" w-full ">
            <div className="bg-white relative cursor-pointer rounded-lg p-3 justify-between m-5 flex">
              <div>
                <div className="font-bold text-sm text-black">Annual Plan</div>
                <div className="text-xs text-black text-opacity-70">
                  Effective price 33/month
                </div>
              </div>
              <div className="pr-4 mt-2 ">
                <span className="text-xs relative -top-2 right-0.5">PKR</span>
                <span className="text-2xl font-bold">399</span>
                <span className="text-xs">/Year</span>
              </div>
              <div className="bg-black rounded-full absolute h-4 w-4  flex justify-center items-center right-3 top-3"></div>
            </div>
          </div>
          <div className=" w-full ">
            <div className="bg-white relative cursor-pointer rounded-lg p-3 justify-between m-5 flex">
              <div>
                <div className="font-bold text-sm text-black">
                  6 Months Plan
                </div>
                <div className="text-xs text-black text-opacity-70">
                  Effective price 17/month
                </div>
              </div>
              <div className="pr-4 mt-2 ">
                <span className="text-xs relative -top-2 right-0.5">PKR</span>
                <span className="text-2xl font-bold">159</span>
                <span className="text-xs">/ Half Year</span>
              </div>
              <div className="bg-black rounded-full absolute h-4 w-4  flex justify-center items-center right-3 top-3"></div>
            </div>
          </div>
          {/* Input */}
          <div className="mt-5 w-full">
            <div className="relative rounded-lg m-5 ">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full pl-2 pr-20 py-3 font-medium rounded-md text-sm box-border border-solid border focus:outline-none bg-transparent border-opacity-4 bg-white bg-opacity-10 border-white  text-white"
                value=""
              />
              <button
                type="button"
                className="absolute right-0 bg-none h-full text-sm py-2 px-4 font-bold text-brand-500 text-primary-dark focus:outline-none"
              >
                Apply
              </button>
            </div>
            <p className="h-4 text-xs w-full"></p>
          </div>
          {/* Offer - 2 */}
          {/* Enter Coupin */}
          {/* Our top premium shows PlansPlans */}
          {/* testomonials */}
          <div className="mt-0 w-full">
            <div className="relative rounded-lg m-5 ">
              <p className="text-xl font-bold text-white text-opacity-80 mb-2">
                Loved by 5 Lakh+ subscribers
              </p>
              <div className="flex">
                {["a", "b", "c"].map((el, key) => (
                  <div
                    key={key}
                    className="flex flex-col pt-3 rounded-lg text-white bg-white bg-opacity-15 items-center bg-opacity-10 w-60 ml-3.5 sm:ml-0 sm:mr-3.5"
                  >
                    <img
                      src="https://lh3.googleusercontent.com/a-/AOh14Ggnevh1Wbvd-k2BiAcDYv-4CVK-1kVB8on1YspW"
                      className="rounded-full mb-3 w-14 h-14"
                      alt="Avinash Chouhan"
                    />
                    <p className="font-medium text-xs w-64 px-4 text-center opacity-70">
                      This app wonderful for knowledge and I like this App..
                    </p>
                    <p className="font-bold text-xs text-brand-500 my-3">
                      Avinash Chouhan
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Messages */}
          <div className="mt-0 w-full">
            <div className="relative rounded-lg m-5 ">
              <div className="text-white mt-9 px-7 py-8 relative overflow-x-hidden bg-white bg-opacity-5">
                <div className="sm:w-150 sm:mx-auto">
                  <div className="flex flex-col mt-7 w-56 sm:w-auto">
                    <p className="font-bold text-2xl">Hi ,</p>
                    <p className="text-sm opacity-70 mt-2">
                      We’re here to help!
                    </p>
                  </div>

                  <div className="flex flex-col mt-12">
                    <header className="font-bold text-xl text-white text-opacity-80">
                      Popular questions
                    </header>

                    <div className="flex flex-col mt-3">
                      <Question />
                      <Question />
                      <Question />
                      <Question />
                      <Question />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Benifets */}
          {/* FAQ */}
          <div className="mt-0 w-full">
            <div className="relative rounded-lg m-5 ">
              <div className="font-bold text-base text-center">
                Stay connected
              </div>
              <div className="flex flex-row items-center text-white justify-center text-sm mt-1">
                <span className="opacity-50 mr-1">Made with</span>
                <div className="w-5 h-3 bg-rose bg-opacity-100">
                  <AiFillHeart className="text-red-500 text-lg" />
                </div>
                <span className="opacity-50 ml-1">in Pakistan</span>
              </div>
            </div>

            {/* btn links */}
            <div className="flex flex-row items-center justify-center mt-10 mb-10">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/kukufm/"
                className="w-36 h-10 flex items-center justify-center rounded-md bg-white last:ml-5 bg-opacity-5"
              >
                <AiFillFacebook className="text-[#1877F2] text-lg" />
                <span className="ml-2 font-bold text-[#1877F2] ">kukufm</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/kuku_fm/?hl=en"
                className="w-36 h-10 flex items-center justify-center rounded-md bg-white last:ml-5 bg-opacity-5"
              >
                <AiFillInstagram className="text-[#FC5237] text-lg" />

                <span className="ml-2 font-bold text-[#FC5237]">kuku_fm</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
