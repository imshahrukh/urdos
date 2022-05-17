import { useState } from "react";
import { AdminBody } from "../components/admin-body";
import { Button } from "../components/inputs/input-button";
import { TextInput } from "../components/inputs/input-text";
import { ReactSelector } from "../components/inputs/react-selector";
import { GlobalSearch } from "../components/search";
import { SeriesDetailsCard } from "../components/series-details.card";
import Image from "next/image";
import kids from "./../kuku/icons/kids-stories.png";

const Category = () => {
  const [input, setInput] = useState("");
  return (
    <AdminBody>
      <div className="p-4">
        <div className=" flex space-x-2 items-center">
          <TextInput
            input={input}
            setInput={setInput}
            label="Category"
            placeholder="Enter Category Name"
          ></TextInput>

          <div className="flex justify-center">
            <div className="mb-3 w-96">
              <label className="form-label inline-block mb-2 text-white">
                Default file input example
              </label>
              <input
                className="form-control
                block
                w-full
                px-3
                py-1
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="file"
                id="formFile"
              />
            </div>
          </div>

          <div className="mt-4 w-full   ">
            <Button action={() => {}} title="Upload File"></Button>
          </div>
        </div>
      </div>

      {/* Row */}
      <div className=" flex flex-wrap">
        {["Kids", "Sport", "Game", "File", "Story", "Horrer", "Drama"].map(
          (el: any, key: any) => (
            <div key={key} className="">
              <div className="row space-y-2  w-[200px] relative justify-between items-center shadow-md rounded mx-2 p-4 border-gray-30 border-2">
                <input
                  type="checkbox"
                  className="absolute right-6 cursor-pointer"
                ></input>
                <div className=" flex items-center space-x-2">
                  <div className=" rounded-full border-gray-300 border-2  w-16 h-16 p-3">
                    <Image
                      src={kids}
                      className=""
                      alt="top 10"
                      height={40}
                      width={40}
                    ></Image>
                  </div>
                  <h3 className="font-bold ">{el}</h3>
                </div>
                <div className="flex justify-center items-center w-full">
                  <button className="p-2 px-6 bg-primaryColor text-white rounded hover:text-white hover:bg-black w-full">
                    Update
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </AdminBody>
  );
};

export default Category;
