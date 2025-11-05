import React, { useState } from "react";

const App = () => {
    const buttons = [
    "AC",
    "X",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  const [value, setValue] = useState("");
  const buttonHandel = (e) => {
    e.preventDefault();
    if (e.target.value == "AC") {
      setValue("");
    } else if (e.target.value == "X") {
      // setValue(setValue(value.slice(0,-1)))
      setValue(value.slice(0, -1));
    } else if (e.target.value == "=") {
      setValue(eval(value));
      
    }
     else if (e.target.value == "%") {
      setValue(parseFloat((value)/100))
    }
       else {
      setValue(value + e.target.value);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col   border w-[400px] p-4 ">
        <div className="p-2">
          <input
            type="text"
            className="border w-full p-2 text-right"
            value={value}
          />
        </div>
        <div className="grid grid-cols-4 ">
          {buttons.map((btn) => (
            <button
              key={btn}
              className="border p-2  m-2 cursor-pointer"
              value={btn}
              onClick={buttonHandel}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
