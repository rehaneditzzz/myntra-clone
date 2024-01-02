import React from "react";

function ExploreTop({ dealImg2 }) {
  return (
    <>
      <div className="h-auto p-6 ">
        <h1 className="font-semibold tracking-widest text-xl	text-gray-800">
          {" "}
          EXPLORE TOP BRANDS
        </h1>
      </div>
      <div className="hero h-auto flex flex-row justify-around text-center p-4 bg-slate-800">
        {dealImg2.map((item) => (
          <div key={item.id} className="card auto w-60 bg-gray-400 p-3 rounded-md overflow-hidden">
            <img
              src={item.url}
              alt=""
              className="h-60 w-full object-cover rounded-md hover:scale-125 transition "
            />
            <h2 className="text-2xl font-bold">{item.logoName}</h2>
            <h1 className="text-lg font-semibold">{item.discount}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default ExploreTop;
