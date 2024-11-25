import { useState, useEffect, useRef } from "react";

export default function Capital() {
  const [capital, setCapital] = useState("tashkent");

  const userName = useRef(null);
  useEffect(() => {
    console.log("capital", capital);
    console.log("render finished");
    console.log(userName.current.value);
  }, [capital]);

  const loginFunction = () => {
    console.log(userName.current.value);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="text-black">choose your capital</div>
        <button onClick={() => setCapital("tashkent")}>uz</button>
        <button onClick={() => setCapital("washington")}>us</button>
        <button onClick={() => setCapital("london")}>uk</button>
      </div>
      <b>
        {" "}
        your capital is <p className="font-uppercase font-bold"> {capital}</p>
      </b>

      <input
        className="border-2 rounded-l outline-none bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        type="text"
        placeholder="userName"
        ref={userName}
      />
      <button
        onClick={loginFunction}
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
      >
        login
      </button>
    </>
  );
}
