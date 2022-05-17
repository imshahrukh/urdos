import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
const colourOptions = [
  {
    label: "Cat-1",
    value: "1",
  },
  {
    label: "Cat-2",
    value: "2",
  },
  {
    label: "Cat-3",
    value: "3",
  },
];

const animatedComponents = makeAnimated();
const customStyles = {
  control: (base) => ({
    ...base,
    height: 55,
    // Width: 610,
    // minHeight: 35,
  }),
};
export const ReactSelector = () => {
  return (
    <div className="bg-red-200]">
      <Select
        closeMenuOnSelect={false}
        //   components={animatedComponents}
        defaultValue={colourOptions[1]}
        isMulti
        options={colourOptions}
        // className="bg-red-500"
        styles={customStyles}
        // styles={{ borderBottom: '1px dotted pink',}}
      />
    </div>
  );
};
