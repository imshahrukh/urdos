/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import { CustomDropdown } from "../components/dropdown";
import { TopNav } from "../components/top-nav";

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
              <div className="font-semibold text-sm space-x-2 text-gray-600">
                Avadhesh Srivastava
              </div>
            </div>

            <div className="flex justify-between items-center py-4">
              <p className="text-gray-500">Horrer</p>
              <p>
                <span className="text-gray-500">Listen</span>{" "}
                <span className="font-bold">34,57,332</span>
              </p>
            </div>
            <div className="play-info border-t-2 border-b-2 p-4 flex space-x-4">
              <img
                className="inline object-cover w-14 h-14 rounded"
                src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image"
              />
              <div>
                <div className="text-gray-400 font-semibold">Show</div>
                <div className="font-semibold">The Psychology of Money</div>
              </div>
            </div>
            <h2 className="font-bold pt-4 text-xl">15 Comments</h2>
            {[1, 2, 4, 5, 6, 7].map((el) => (
              <>
                <div className="play-info p-4 space-x-4 space-y-1">
                  <div className="flex space-x-4">
                    <img
                      className="inline object-cover w-12 h-12 rounded-full"
                      src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      alt="Profile image"
                    />
                    <div>
                      <div className="text-sm">Shahrukh Khan</div>
                      <div className=" text-gray-400">Nice effort 💋</div>
                    </div>
                  </div>
                  <div className="flex justify-end text-gray-400">
                    {moment().format("LL")}
                  </div>
                </div>
              </>
            ))}

            <div className="flex justify-center items-center text-pinkDark underline pb-6 cursor-pointer">
              Load more
            </div>

            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 99].map((el) => (
              <>
                <div className="card flex space-x-2 border-b-2 py-3">
                  <div className="col1">
                    <img
                      className="inline object-cover w-16 h-16 rounded"
                      src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      alt="Profile image"
                    />
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
                      <p className="text-red-500 font-bold text-sm">Details</p>
                    </div>
                  </div>
                </div>
              </>
            ))} */}
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
