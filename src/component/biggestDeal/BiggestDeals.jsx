import React from "react";

function BiggestDeals({ dealImg }) {
  return (
    <>
      <div className="mt-11 h-auto p-6">
        <h1 className="font-semibold tracking-widest text-xl	text-gray-800">
          {" "}
          BIGGEST DEALS ON TOP BRANDS
        </h1>
      </div>
      <div className="hero h-auto flex flex-row justify-around text-center p-4">
        {dealImg.map((item) => (
          <div key={item.id} className="card auto w-60 bg-slate-300 p-3">
            <img
              src={item.url}
              alt=""
              className="h-60 w-full object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold">{item.logoName}</h2>
            <h1 className="text-lg font-semibold">{item.discount}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default BiggestDeals;
