/* eslint-disable react/no-unknown-property */
import { FC, useState } from "react";

interface ItextInterface {
  action: () => void;
  title: string;
}
export const Button: FC<ItextInterface> = ({ action, title }) => {
  return (
    <div className="w-full">
      <div className="flex space-x-2 justify-center">
        <button
          onClick={action}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block w-full px-6 py-3 bg-primaryColor  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          {title}
        </button>
      </div>
    </div>
  );
};
