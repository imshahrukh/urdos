export const VerticalScroll = ({ children }) => {
  return (
    <>
      <div className="flex flex-col bg-white m-auto p-auto">
        <div className="flex overflow-x-scroll pb-5 hide-scroll-bar">
          <div className="flex flex-nowrap space-x-4">{children}</div>
        </div>
      </div>
    </>
  );
};
