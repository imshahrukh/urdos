/* eslint-disable react/no-unknown-property */
import { FC, useState } from "react";

interface ItextInterface {
  input: string;
  setInput: any;
  disable?: boolean;
  label: string;
  placeholder: string;
  values: any[];
}
export const DropDown: FC<ItextInterface> = ({
  input,
  setInput,
  disable = false,
  label,
  placeholder,
  values,
}) => {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* <label
          htmlFor="exampleFormControlInput1"
          className="form-label inline-block float-right mb-2 text-gray-700"
        >
          {label}
        </label> */}
        <div className="mb-3 xl:w-96  justify-center">
          <select
            onSelect={(e: any) => {
              console.log(e);
            }}
            placeholder={placeholder}
            className="form-select appearance-none
            
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            {values.map((el: any, key: any) => (
              <option key={key} selected>
                {el.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
