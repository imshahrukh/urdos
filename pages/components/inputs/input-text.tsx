/* eslint-disable react/no-unknown-property */
import { FC, useState } from "react";

interface ItextInterface {
  input: string;
  setInput: any;
  disable?: boolean;
  label: string;
  placeholder: string;
}
export const TextInput: FC<ItextInterface> = ({
  input,
  setInput,
  disable = false,
  label,
  placeholder,
}) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            {label}
          </label>
          <input
            disabled={disable}
            value={input}
            type="text"
            className="
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlInput1"
            placeholder={placeholder}
            onChange={(e: any) => {
              setInput(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};
