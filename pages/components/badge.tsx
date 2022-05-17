export const TandingBadges = ({ children, title }) => {
  return (
    <div className="flex flex-col w-20 justify-center items-center mx-4">
      <div className=" object-cover border-2 flex justify-center p-2 items-center w-16 h-16 rounded-full">
        {children}
      </div>
      <h3 className="text-md mt-1">{title}</h3>
    </div>
  );
};
