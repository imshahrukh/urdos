export const GlobalSearch = () => {
  return (
    <div className=" border-2 border-gray-200 rounded-lg  ">
      <div className="container flex justify-center items-center">
        <div className="relative">
          <div className="absolute top-4 left-3">
            {" "}
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
          </div>{" "}
          <input
            type="text"
            className="h-14 w-[700px] pl-10 pr-20 rounded-lg z-0 focus:outline-none"
            placeholder="Search anything..."
          />
          <div className="absolute top-2 right-2">
            {" "}
            <button className="h-10 w-20 text-white rounded-lg bg-pinkDark hover:bg-pink-400">
              Search
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
