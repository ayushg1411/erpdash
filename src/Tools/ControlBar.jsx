import React from "react";

const renderButtons = (data) => {
  return Object.entries(data).map(([key, value]) => {
    if (typeof value === "boolean" && value) {
      return (
        <button
          className=" m-1 rounded-lg  bg-gray-300 h-[40px]"
          key={key}
          onClick={() => console.log(`${key} clicked`)}
        >
          <p className="p-1"> {key}</p>
        </button>
      );
    }
    return null;
  });
};
const ControlBar = ({ controls }) => {
  console.log(controls);
  const renderedButtons = renderButtons(controls);

  return (
    <>
      <div className="bg-gray-500 w-full min-w-[1500px] flex justify-between h-16 p-2">
        <p className="text-3xl md:text-xl sm:text-xs xl:text-3xl mx-2 pt-2 text-white font-bold">
          {controls.name}
          <span className="text-2xl md:text-xl  xl:text-3xl sm:text-base mx-2 pt-2 text-black font-bold">
            {" "}
            - {controls.tcode}
          </span>
        </p>

        <div className="flex flex-col sm:flex-row pt-2">{renderedButtons}</div>
      </div>
    </>
  );
};

export default ControlBar;
