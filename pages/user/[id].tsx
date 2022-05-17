/* eslint-disable @next/next/no-img-element */
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

      <div className="my-10"></div>

      <div className="flex justify-center items-center w-full ">
        <div className="w-3/6 ">
          {/* audio information */}
          <div className="space-y-2">
            <div className="flex justify-center items-center">
              <img
                className="inline object-cover w-40 h-40 rounded-full"
                src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image"
              />
            </div>
            <h1 className="font-bold text-xl text-center">BlueTick Ideas</h1>

            <div className="flex justify-around items-center py-4">
              <div className="flex justify-center items-center flex-col">
                <div className="text-gray-400 text-sm">Audios</div>
                <div className="font-bold ">55</div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div className="text-gray-400">Follower</div>
                <div className="font-bold">55K</div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div className="text-gray-400">Follow</div>
                <div className="font-bold">18</div>
              </div>
            </div>
            <button className="w-full p-4 flex justify-center items-center bg-blue-500 text-white rounded">
              Follow
            </button>

            {[1, 2, 3, 5].map((el) => (
              <>
                {" "}
                <h5 className="font-bold text-xl mt-2">
                  How to Make Money With Breakout Trading in Hindi
                </h5>
                <div className=" flex flex-nowrap overflow-x-auto m-2">
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
              </>
            ))}
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
