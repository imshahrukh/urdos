import { FC } from "react";

interface ItextInterface {
  input: string;
  setInput: any;
  disable?: boolean;
  label: string;
  placeholder: string;
}

export const TextArea: FC<ItextInterface> = ({
  label,
  input,
  setInput,
  placeholder,
}) => {
  return (
    <div className="my-2">
      <label className="block text-left ">
        <span className="text-gray-700">{label}</span>
        <textarea
          className="form-textarea mt-1 block w-full  border border-solid border-gray-300 rounded pl-2 pt-2"
          rows={3}
          placeholder={placeholder}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></textarea>
      </label>
    </div>
  );
};
