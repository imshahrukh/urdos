/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CustomDropdown } from "../components/dropdown";
import { LandingPageCard } from "../components/landing-page-card";
import { ListContainor } from "../components/list-containor";
import { TopNav } from "../components/top-nav";
import { VerticalScroll } from "../components/vertical-scroll-containor";
import r1 from "./../kuku/religion2.jpeg";
import r2 from "./../kuku/religion2.jpeg";
import r3 from "./../kuku/religion3.jpeg";
import r4 from "./../kuku/religion4.jpeg";
import r5 from "./../kuku/religion5.jpeg";
import { FaLock } from "react-icons/fa";
const Show = () => {
  return (
    <>
      <TopNav />
      <div className=" border flex justify-center items-center">
        <CustomDropdown title="Full Book" items={Books} />
        <CustomDropdown title="Book Summery" items={BookSummery} />
        <CustomDropdown title="Course" items={Course} />
        <CustomDropdown title="Story" items={Story} />
      </div>

      <div className="my-8"></div>

      <div className="flex justify-center items-center w-full ">
        <div className="w-3/6 ">
          {/* audio information */}
          <div className="space-y-2">
            <div className="flex justify-center items-center">
              <img
                className="inline object-cover w-40 h-40 rounded"
                src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image"
              />
            </div>
            <button className="w-full p-4 flex justify-center items-center bg-pinkDark text-white rounded">
              Play
            </button>
            <h6 className="text-gray-400 text-sm">BOOK SUMMARY | 127MINS</h6>
            <h5 className="font-bold text-xl pb-1">
              How to Make Money With Breakout Trading in Hindi
            </h5>
            <div className="flex space-x-1 items-center">
              <img
                className="inline object-cover w-8 h-8 rounded-full"
                src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image"
              />
              <div className="font-bold text-gray-600">Avadhesh Srivastava</div>
            </div>
            <p className="text-gray-500 text-sm pt-3">
              Paise banana ek art hai aur jo is kala mein maahir ho gaya, paise
              banana uske liye ek game ban jaata hai. Is khel mein maza toh boht
              aata hai magar saath risk bhi utni hi hoti hai. Lekn jaha risk
            </p>
            <div className="flex justify-between items-center ">
              <p className="text-gray-500">Urdu</p>
              <p>
                <span className="text-gray-500">Listen</span>{" "}
                <span className="font-bold">34,57,332</span>
              </p>
            </div>

            {/*  */}
            <h5 className="font-semibold mt-2">More For You 😍</h5>
            <div className=" flex flex-nowrap overflow-x-auto">
              <ListContainor title="">
                <VerticalScroll>
                  <LandingPageCard
                    width={220}
                    image={r2}
                    prim={true}
                  ></LandingPageCard>
                  <LandingPageCard width={220} image={r1}></LandingPageCard>
                  <LandingPageCard
                    width={220}
                    image={r3}
                    prim={true}
                  ></LandingPageCard>
                  <LandingPageCard width={220} image={r4}></LandingPageCard>
                  <LandingPageCard width={220} image={r5}></LandingPageCard>
                  <LandingPageCard
                    width={220}
                    image={r1}
                    prim={true}
                  ></LandingPageCard>
                  <LandingPageCard width={220} image={r4}></LandingPageCard>
                </VerticalScroll>
              </ListContainor>
            </div>
            <h2 className="font-bold text-xl">15 Episode</h2>

            {[2, 1, 13, 243, 335, 6, 7, 8, 9, 99, 99].map((el) => (
              <>
                <div className="card flex flex-row space-x-2 border-b-2 py-3">
                  <div className="relative">
                    {el % 2 == 0 ? (
                      <img
                        className="inline object-cover w-16 h-16 rounded bg-primaryColor"
                        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image"
                      />
                    ) : (
                      <div>
                        <img
                          className="inline object-cover w-16 h-16 rounded"
                          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                          alt="Profile image"
                        />
                        <div className="inline absolute left-0 bg-opacity-40 object-cover w-16 h-16 rounded bg-primaryColor">
                          <div className="w-full flex justify-center h-full items-center text-white">
                            <FaLock />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col2">
                    <div className="row1 text-sm text-gray-400 flex justify-center items-center">
                      Part1
                      <span className="rounded-full inline-block h-2 w-2 mx-1 bg-gray-400" />
                      2mins{" "}
                      <span className="rounded-full inline-block h-2 w-2 mx-1 bg-gray-400" />
                      Dec 01,2021
                    </div>
                    <div className="row2">
                      <h6>1. Introduction</h6>
                    </div>
                    <div className="row3 flex space-x-4">
                      <button className="bg-yellow-600 rounded text-white text-sm px-1">
                        Premium
                      </button>
                      <Link href="/episode/1">
                        <p className="text-pinkDark font-bold text-sm cursor-pointer">
                          Details
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}

            <div className="mb-8">
              <h2 className="font-bold text-xl mb-4 mt-14">Detials</h2>

              <div className="card space-y-4">
                <p className="text-sm text-gray-400  font-medium">Writer</p>
                {[1].map((el: any) => (
                  <>
                    <div className="flex space-x-2 items-center">
                      <img
                        className="inline object-cover w-5 h-5 rounded-full"
                        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image"
                      />
                      <div className="text-red-600 text-sm font-bold cursor-pointer">
                        Avadhesh Srivastava {" >"}
                      </div>
                    </div>
                  </>
                ))}

                <p className="text-sm text-gray-400  font-medium">
                  Voice Artist
                </p>
                {[1, 2].map((el: any) => (
                  <>
                    <div className="flex space-x-4 items-center">
                      <img
                        className="inline object-cover w-5 h-5 rounded-full"
                        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image"
                      />
                      <div className="text-red-600 text-sm font-bold cursor-pointer">
                        Avadhesh Srivastava {" >"}
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <p className="mt-10 pb-4 text-gray-500 text-sm">
                Paise banana ek art hai aur jo is kala mein maahir ho gaya,
                paise banana uske liye ek game ban jaata hai. Is khel mein maza
                toh boht aata hai magar saath risk bhi utni hi hoti hai. Lekn
                jaha risk nahi, vaha bada paisa banane ka sawaal hi nahi. Toh
                kya aap breakout trading ke baare mein seekhna chahenge? Jo
                aapko share market ke maidaan mein ghar baithe paise banakar
                dega. Candlestick chart kya hota hai, use kaise read kiya jaata
                hai aur share market se jude kai concepts ko aap tak pohcha rahi
                hai yeh book summary. Toh intezaar kis baat ka hai, aaiye,
                suniye aur utar jaaiye share bazaar mein apni kismat aazmaane!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Show;
var Books = [
  "Biography",
  "Comedy",
  "Crime",
  "Historical",
  "Kids",
  "Love",
  "Motivation",
];
var BookSummery = [
  "Biography",
  "Comedy",
  "Crime",
  "Historical",
  "Kids",
  "Love",
  "Motivation",
];
var Course = ["Help"];
var Story = [
  "Biography",
  "Comedy",
  "Crime",
  "Historical",
  "Kids",
  "Love",
  "Motivation",
  "Biography",
  "Comedy",
  "Crime",
  "Historical",
  "Kids",
  "Love",
  "Motivation",
];
