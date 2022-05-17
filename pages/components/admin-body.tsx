import { SideNav } from "./side-nav";

export const AdminBody = ({ children }) => {
  return (
    <div className="flex h-screen w-screen ">
      <SideNav />
      <div className="w-full h-full">
        <div className="h-screen overflow-auto">{children}</div>
      </div>
    </div>
  );
};
