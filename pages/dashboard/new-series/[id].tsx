/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { AdminBody } from "../../components/admin-body";
import { DropDown } from "../../components/inputs/drop-down";
import { Button } from "../../components/inputs/input-button";
import { TextInput } from "../../components/inputs/input-text";
import { TextArea } from "../../components/inputs/text-area";

import r1 from "./../kuku/religion2.jpeg";
import r2 from "./../kuku/religion2.jpeg";
import r3 from "./../kuku/religion3.jpeg";
import r4 from "./../kuku/religion4.jpeg";
import r5 from "./../kuku/religion5.jpeg";
const Show = () => {
  const [input, setInput] = useState<any>("");
  const [effect, setEffect] = useState<any>(false);
  const [title, setTitle] = useState<any>("");
  const [file, setFile] = useState<any>("");
  const [showForm, setShowForm] = useState(false);

  return (
    <AdminBody>
      <div className="w-full p-8 bg-gray-200 rounded flex justify-center items-center flex-col ">
        {/* <TopNav /> */}
        <div className=" border flex justify-center items-center">
          {/* <CustomDropdown title="Full Book" items={Books} />
        <CustomDropdown title="Book Summery" items={BookSummery} />
        <CustomDropdown title="Course" items={Course} />
        <CustomDropdown title="Story" items={Story} /> */}
        </div>

        <div className="my-8"></div>

        <div className="flex justify-center items-center w-full ">
          <div className="w-3/6 ">
            {/* audio information */}
            <div className="flex items-end justify-end"></div>

            <div className="space-y-2">
              <div
                onClick={() => {
                  setShowForm(!showForm);
                }}
                className="p-4 bg-primaryColor  rounded text-white cursor-pointer flex justify-center items-center"
              >
                {!showForm ? "Add New Audio" : "Cancel"}
              </div>

              {showForm ? (
                <div className=" p-16 py-12 rounded shadow-lg bg-white">
                  <div className="flex justify-center item-center mb-2 font-bold text-lg">
                    Book Information
                  </div>

                  <>
                    <TextInput
                      input={title}
                      setInput={setTitle}
                      label={"Enter Title"}
                      disable={false}
                      placeholder={"Enter the Title"}
                    ></TextInput>
                  </>

                  <div className="mx-9">
                    <TextArea
                      input={title}
                      setInput={setTitle}
                      label={"Enter Description"}
                      disable={false}
                      placeholder={"Enter the Description"}
                    ></TextArea>
                  </div>
                  <>
                    <TextInput
                      input={title}
                      setInput={setTitle}
                      label={"Part"}
                      disable={false}
                      placeholder={"Enter the Part"}
                    ></TextInput>
                  </>
                  <>
                    <div className="flex justify-center">
                      <div className="mb-3 xl:w-96">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label inline-block mb-2 text-gray-700"
                        >
                          Select Date
                        </label>
                        <input
                          className="
        block w-full px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                          placeholder="Select Date"
                          type="date"
                        ></input>
                      </div>
                    </div>
                  </>

                  <>
                    <DropDown
                      input={title}
                      setInput={setTitle}
                      label={"Category"}
                      disable={false}
                      placeholder={"Enter the Category"}
                      values={[
                        { label: "Private", value: "1`" },
                        { label: "Public", value: "1`" },
                      ]}
                    ></DropDown>
                  </>
                  <>
                    <DropDown
                      input={title}
                      setInput={setTitle}
                      label={"Category"}
                      disable={false}
                      placeholder={"Enter the Category"}
                      values={[
                        { label: "Paid", value: "1`" },
                        { label: "Free", value: "1`" },
                      ]}
                    ></DropDown>
                  </>

                  {/*  */}

                  <div className="flex justify-center ">
                    <div className="rounded-lg shadow-xl bg-gray-50 w-full my-2">
                      <div className="m-4">
                        <label className="inline-block text-gray-500">
                          Upload Audio
                        </label>
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col w-full h-24 border-2 border-blue-200 border-dashed hover:bg-gray-100 cursor-pointer hover:border-gray-300">
                            <div className="flex flex-col items-center justify-center pt-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" h-8 text-gray-400 group-hover:text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                {file.name}
                              </p>
                            </div>
                            <input
                              type="file"
                              onChange={(e) => {
                                setFile(e.target.files[0]);
                              }}
                              className="opacity-0"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-fill">
                    <Button title={"Save"} action={() => {}}></Button>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {/* <>
                <TextInput
                  input={input}
                  setInput={setInput}
                  placeholder={"Enter title"}
                  disable={false}
                  label="Enter title"
                ></TextInput>
              </> */}
              {/* <>
             
            <>
              <TextInput
                input={input}
                setInput={setInput}
                placeholder={"Enter Descripiton"}
                disable={false}
                label="Enter Descripiton"
              ></TextInput>
            </>
            <>
              <TextInput
                input={input}
                setInput={setInput}
                placeholder={"Enter Time"}
                disable={false}
                label="Enter Time"
              ></TextInput>
            </>
            <>
              <TextInput
                input={input}
                setInput={setInput}
                placeholder={"Enter Date"}
                disable={false}
                label="Enter Date"
              ></TextInput>
            </>
            <>
              <DropDown
                input={input}
                setInput={setInput}
                label={"Category"}
                disable={false}
                placeholder={"Enter the Category"}
              ></DropDown>
            </> */}

              {/*  */}
              {/* <h5 className="font-semibold mt-2">More For You 😍</h5> */}
              {/* <div className=" flex flex-nowrap overflow-x-auto">
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
            </div> */}
              <h2 className="font-bold text-xl">15 Audios</h2>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 99].map((el) => (
                <>
                  <div className="card flex flex-row space-x-2 border-b-2 py-3">
                    <div className="">
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
                        <Link href="/episode/1">
                          <p className="text-pinkDark font-bold text-sm cursor-pointer">
                            Details
                          </p>
                        </Link>

                        <p className="text-pinkDark font-bold text-sm cursor-pointer">
                          Update
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminBody>
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
