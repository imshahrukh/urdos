import { FC } from "react";

interface IListContainor {
  title: string;
  children: React.ReactNode;
}
export const ListContainor: FC<IListContainor> = ({ title, children }) => {
  return (
    <div className="my-4">
      <h2 className="text-lg">{title}</h2>
      {children}
    </div>
  );
};
