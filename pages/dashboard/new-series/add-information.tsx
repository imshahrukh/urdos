/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { AdminBody } from "../../components/admin-body";
import { DropDown } from "../../components/inputs/drop-down";
import { Button } from "../../components/inputs/input-button";
import { TextInput } from "../../components/inputs/input-text";
import { TextArea } from "../../components/inputs/text-area";

const AddSeriesInformation = () => {
  const [title, setTitle] = useState<any>("");
  const [file, setFile] = useState<any>("");
  return (
    <AdminBody>
      <div className="w-full p-8 bg-gray-200 rounded flex justify-center items-center flex-col ">
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
          <>
            <TextInput
              input={title}
              setInput={setTitle}
              label={"Enter Writer"}
              disable={false}
              placeholder={"Enter the Writer"}
            ></TextInput>
          </>
          <>
            <TextArea
              input={title}
              setInput={setTitle}
              label={"Enter Writer Description"}
              disable={false}
              placeholder={"Enter writer description"}
            ></TextArea>
          </>
          <>
            <TextInput
              input={title}
              setInput={setTitle}
              label={"Enter Voiceover"}
              disable={false}
              placeholder={"Enter the Voiceover"}
            ></TextInput>
          </>
          <>
            <TextArea
              input={title}
              setInput={setTitle}
              label={"Enter Description"}
              disable={false}
              placeholder={"Enter the Description"}
            ></TextArea>
          </>
          {/* <>
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Select Amount in PKR
                </label>
                <input
                  className="
        block w-full px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  placeholder="Select Amount"
                  type="Number"
                ></input>
              </div>
            </div>
          </> */}

          <>
            <DropDown
              input={title}
              setInput={setTitle}
              label={"Category"}
              disable={false}
              placeholder={"Enter the Category"}
              values={[{ label: "Story", value: "1`" }]}
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
                { label: "Free", value: "1`" },
                { label: "Paid", value: "1`" },
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
                { label: "Public", value: "1" },
                { label: "Private", value: "1" },
              ]}
            ></DropDown>
          </>

          {/*  */}

          <div className="flex justify-center ">
            <div className="rounded-lg shadow-xl bg-gray-50 w-full my-2">
              <div className="m-4">
                <label className="inline-block text-gray-500">
                  File Upload
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
      </div>
    </AdminBody>
  );
};
export default AddSeriesInformation;
