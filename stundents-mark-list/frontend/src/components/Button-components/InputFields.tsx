import React from "react";

interface InputFieldProps {
  type: string;
  name: string;
  placeholder?: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string;
  value?:string;
  options?: { label: string, value: string }[]
  required?: boolean
}

const InputFields: React.FC<InputFieldProps> = ({ type, name, placeholder,value, className, options, onchange, required }) => {
  return (
    <div className=" w-full">
      {type === "radio" && options ? (
        <div className="flex-none sm:flex gap-10">
          <h1 className="py-2">{placeholder}</h1>
          <div className="flex gap-4">
            {options.map((option, index) => (
              <label key={index} className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  className="accent-blue-600"
                  onChange={onchange}
                  required={required}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <label htmlFor={name} className="text-sm font-medium text-gray-700 pb-2">{placeholder}</label>
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            placeholder={placeholder}
            className={`p-2 border rounded-lg shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            onChange={onchange}
            required={required}
          />
        </div>
      )}
    </div>
  );
};

export default InputFields;
