import React from "react";

const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  value = "",
  disable = false,
  setFunction,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFunction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className=" flex flex-col gap-1 rounded">
      <label htmlFor="" className=" font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disable}
        onChange={handleChange}
        className="border-2 rounded p-1 flex-1 focus:ring-2 focus:ring-gray-800 outline-none"
      />
    </div>
  );
};

export default InputField;
