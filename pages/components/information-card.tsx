import Image from "next/image";
import commaNumber from "comma-number";
interface InformationCard {
  title: string;
  number: string;
  color: string;
  currency?: string;
}

export const InformationCard = ({
  color,
  title,
  number,
  children,
  currency = "",
}) => {
  return (
    <div className=" flex items-center p-2 w-2/6 shadow-md space-x-2 bg-gray-200 rounded">
      {children}
      <div className="">
        <h4 className="font-bold">
          {commaNumber(number)}
          {!!currency?.length ? (
            <span className="inline-block absolute ml-1 text-gray-500 text-sm b-16">
              {currency}
            </span>
          ) : (
            ""
          )}
        </h4>
        <h6 className="text-1 text-gray-500">{title}</h6>
      </div>
    </div>
  );
};
