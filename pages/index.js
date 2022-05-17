/* eslint-disable react/jsx-no-undef */
import { TopNav } from "./components/top-nav";
import { CustomDropdown } from "./components/dropdown";
import { LandingPageCard } from "./components/landing-page-card";
import { VerticalScroll } from "./components/vertical-scroll-containor";
import { TandingBadges } from "./components/badge";
import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { BsBookFill } from "react-icons/bs";
import { ListContainor } from "./components/list-containor";
import Image from "next/image";
import { IntersectionObservers } from "./components/Inter-section-observer/intersection-observer";

import m1 from "./kuku/motivation1.jpeg";
import m2 from "./kuku/motivation2.jpeg";
import m3 from "./kuku/motivation3.jpeg";
import m4 from "./kuku/motivation4.jpeg";

import r1 from "./kuku/religion1.jpeg";
import r2 from "./kuku/religion2.jpeg";
import r3 from "./kuku/religion3.jpeg";
import r4 from "./kuku/religion4.jpeg";
import r5 from "./kuku/religion5.jpeg";

import ro1 from "./kuku/romance.jpeg";
import ro2 from "./kuku/romance2.jpeg";
import ro3 from "./kuku/romance3.jpeg";
import ro4 from "./kuku/romance4.jpeg";
import ro5 from "./kuku/romance5.jpeg";

import n1 from "./kuku/new1.jpeg";
import n2 from "./kuku/new2.jpeg";
import n3 from "./kuku/new3.jpeg";
import n4 from "./kuku/new4.jpeg";
import n5 from "./kuku/new5.jpeg";
import n6 from "./kuku/new6.jpeg";

import b1 from "./kuku/bio1.jpeg";
import b2 from "./kuku/bio2.jpeg";
import b3 from "./kuku/bio3.jpeg";
import b4 from "./kuku/bio4.jpeg";

import top from "./kuku/icons/top.png";
import funny from "./kuku/icons/funny.png";

import action from "./kuku/icons/action.png";
import islamic from "./kuku/icons/islamic.png";
import kids from "./kuku/icons/kids-stories.png";
import self from "./kuku/icons/self-help.png";

export default function Home() {
  return (
    <div className="">
      <TopNav />
      <div className=" border flex justify-center items-center">
        <CustomDropdown title="Full Book" items={Books} />
        <CustomDropdown title="Book Summery" items={BookSummery} />
        <CustomDropdown title="Course" items={Course} />
        <CustomDropdown title="Story" items={Story} />
      </div>
      {/* section --- top product*/}

      <div className="flex flex-nowrap overflow-x-auto m-2 ">
        <VerticalScroll>
          <LandingPageCard
            width={260}
            playbutton={true}
            image={m1}
            prin={true}
          ></LandingPageCard>
          <LandingPageCard
            width={260}
            playbutton={true}
            image={r1}
          ></LandingPageCard>
          <LandingPageCard
            width={260}
            playbutton={true}
            image={ro1}
          ></LandingPageCard>
          <LandingPageCard
            width={260}
            playbutton={true}
            image={n1}
          ></LandingPageCard>
          <LandingPageCard
            width={260}
            playbutton={true}
            image={b1}
            prin={true}
          ></LandingPageCard>
          <LandingPageCard
            width={260}
            playbutton={true}
            image={b2}
          ></LandingPageCard>
        </VerticalScroll>
      </div>

      <div className="flex ml-8">
        <TandingBadges title={"Top 10"}>
          <Image
            src={top}
            className="rounded-t-xl max-w-44 rounded"
            alt="top 10"
          ></Image>
        </TandingBadges>
        <TandingBadges title={"Funny"}>
          <Image
            src={funny}
            className="rounded-t-xl max-w-44 rounded"
            alt="top 10"
          ></Image>
        </TandingBadges>
        <TandingBadges title={"Islamaic"}>
          <Image
            src={islamic}
            className="rounded-t-xl max-w-44 rounded"
            alt="top 10"
          ></Image>
        </TandingBadges>
        <TandingBadges title={"Kids"}>
          <Image
            src={kids}
            className="rounded-t-xl max-w-44 rounded"
            alt="top 10"
          ></Image>
        </TandingBadges>
        <TandingBadges title={"Self"}>
          <Image
            src={self}
            className="rounded-t-xl max-w-44 rounded"
            alt="top 10"
          ></Image>
        </TandingBadges>
        <TandingBadges title={"Action"}>
          <Image
            src={action}
            className="rounded-t-xl max-w-44 rounded"
            alt="top 10"
          ></Image>
        </TandingBadges>
      </div>
      {/* <IntersectionObservers
        callApi={() => {
          console.log("call 1");
        }}
      ></IntersectionObservers> */}
      <div className=" ml-8 flex flex-nowrap overflow-x-auto m-2">
        <ListContainor title="Top 10 in Pakistan">
          <VerticalScroll>
            <LandingPageCard
              width={220}
              image={b2}
              prim={true}
            ></LandingPageCard>
            <LandingPageCard width={220} image={b1}></LandingPageCard>
            <LandingPageCard width={220} image={b3}></LandingPageCard>
            <LandingPageCard width={220} image={n1}></LandingPageCard>
            <LandingPageCard
              width={220}
              image={n2}
              prim={true}
            ></LandingPageCard>
            <LandingPageCard width={220} image={n3}></LandingPageCard>
            <LandingPageCard width={220} image={ro2}></LandingPageCard>
          </VerticalScroll>
        </ListContainor>
      </div>

      <div className=" ml-8 flex flex-nowrap overflow-x-auto m-2">
        <ListContainor title="Romantic">
          <VerticalScroll>
            <LandingPageCard width={220} image={ro2}></LandingPageCard>
            <LandingPageCard
              width={220}
              image={ro1}
              prim={true}
            ></LandingPageCard>
            <LandingPageCard width={220} image={ro3}></LandingPageCard>
            <LandingPageCard width={220} image={ro4}></LandingPageCard>
            <LandingPageCard
              width={220}
              image={ro5}
              prim={true}
            ></LandingPageCard>
            <LandingPageCard width={220} image={n5}></LandingPageCard>
            <LandingPageCard width={220} image={ro1}></LandingPageCard>
          </VerticalScroll>
        </ListContainor>
      </div>

      <div className=" ml-8 flex flex-nowrap overflow-x-auto m-2">
        <ListContainor title="New Release">
          <VerticalScroll>
            <LandingPageCard width={220} image={n2}></LandingPageCard>
            <LandingPageCard width={220} image={n1}></LandingPageCard>
            <LandingPageCard width={220} image={n3}></LandingPageCard>
            <LandingPageCard width={220} image={n4}></LandingPageCard>
            <LandingPageCard width={220} image={n5}></LandingPageCard>
            <LandingPageCard width={220} image={n1}></LandingPageCard>
            <LandingPageCard width={220} image={r1}></LandingPageCard>
          </VerticalScroll>
        </ListContainor>
      </div>
      {/* <IntersectionObservers
        callApi={() => {
          console.log("call 2");
        }}
      ></IntersectionObservers> */}

      <div className=" ml-8 flex flex-nowrap overflow-x-auto m-2">
        <ListContainor title="Biography">
          <VerticalScroll>
            <LandingPageCard
              width={220}
              image={b2}
              prim={true}
            ></LandingPageCard>
            <LandingPageCard
              width={220}
              image={b1}
              prim={true}
            ></LandingPageCard>
            <LandingPageCard width={220} image={b3}></LandingPageCard>
            <LandingPageCard width={220} image={b4}></LandingPageCard>
            <LandingPageCard
              width={220}
              image={ro1}
              prim={true}
            ></LandingPageCard>
            <LandingPageCard width={220} image={b1}></LandingPageCard>
            <LandingPageCard width={220} image={r4}></LandingPageCard>
          </VerticalScroll>
        </ListContainor>
      </div>

      <div className=" ml-8 flex flex-nowrap overflow-x-auto m-2">
        <ListContainor title="Religion">
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

      <div className=" ml-8 flex flex-nowrap overflow-x-auto m-2">
        <ListContainor title="Motivation">
          <VerticalScroll>
            <LandingPageCard
              width={220}
              image={m1}
              prim={true}
            ></LandingPageCard>
            <LandingPageCard width={220} image={m2}></LandingPageCard>
            <LandingPageCard
              width={220}
              image={m3}
              prim={true}
            ></LandingPageCard>
            <LandingPageCard width={220} image={m4}></LandingPageCard>
            <LandingPageCard width={220} image={r1}></LandingPageCard>
            <LandingPageCard width={220} image={ro1}></LandingPageCard>
            <LandingPageCard width={220} image={r1}></LandingPageCard>
          </VerticalScroll>
        </ListContainor>
      </div>
      <div className="flex py-4 text-xl  text-gray-400 justify-center items-center">
        Made with 💋 in Bhara Khu
      </div>
    </div>
  );
}

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
