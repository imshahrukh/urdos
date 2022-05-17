import { useState } from "react";
import { AdminBody } from "../components/admin-body";
import { Button } from "../components/inputs/input-button";
import { TextInput } from "../components/inputs/input-text";
import { ReactSelector } from "../components/inputs/react-selector";
import { GlobalSearch } from "../components/search";
import { SeriesDetailsCard } from "../components/series-details.card";
import Image from "next/image";
import kids from "./../kuku/icons/kids-stories.png";

const Offers = () => {
  const [input, setInput] = useState("");
  return (
    <AdminBody>
      <div className="p-4 space-y-3">
        <div className=" flex flex-col space-x-2 items-start">
          <TextInput
            input={input}
            setInput={setInput}
            label="Add Discount"
            placeholder="Enter Category Name"
          ></TextInput>
          <TextInput
            input={input}
            setInput={setInput}
            label="Code"
            placeholder="Code"
          ></TextInput>

          <TextInput
            input={input}
            setInput={setInput}
            label="Select End Date"
            placeholder="Date"
          ></TextInput>

          <div className="mt-4  ">
            <Button action={() => {}} title="Add Discount"></Button>
          </div>
        </div>

        <div className="w-full border-2 border-gray-500 border-opacity-40"></div>

        <div className=" flex flex-col items-start space-x-2 ">
          <TextInput
            input={input}
            setInput={setInput}
            label="Add New Amount"
            placeholder="Add New Amount"
          ></TextInput>

          <div className="mt-4  ">
            <Button action={() => {}} title="Add Amount"></Button>
          </div>
        </div>
      </div>
    </AdminBody>
  );
};

export default Offers;
