import React from "react";

function Watch({ watches }) {
  return (
    <>
      <div className="h-auto p-6 bg-slate-800">
        <h1 className="font-semibold tracking-widest text-xl	text-white ">
          {" "}
          TRENDING IN FOOTWEAR
        </h1>
      </div>
      <div className="hero h-auto flex flex-row justify-around text-center p-4 bg-slate-800">
        {watches.map((item) => (
          <div
            key={item.key}
            className="card auto w-60 bg-gray-200 p-1 rounded-md overflow-hidden"
          >
            <img
              src={item.img}
              alt=""
              className="h-56 w-full object-cover rounded-md hover:scale-125 transition "
            />
            <h2 className="text-md font-bold">{item.com}</h2>
            <h1 className="text-xs font-semibold text-slate-400">{item.des}</h1>
          
          </div>
        ))}
      </div>
    </>
  );
}

export default Watch;
