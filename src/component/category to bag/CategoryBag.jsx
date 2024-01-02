import React from 'react'

function CategoryBag({categoryImg}) {
  return (
  <>
      <div className=" h-auto p-6">
        <h1 className="font-semibold tracking-widest text-xl	text-gray-800">
          
         CATEGORIES TO BAG
        </h1>
      </div>
      <div className="hero h-auto flex flex-row justify-around text-center p-4 bg-slate-800">
        {categoryImg.map((item) => (
          <div key={item.id} className="card  w-48 bg-slate-300 p-3 rounded-md ">
            <img
              src={item.url}
              alt=""
              className="h-40 w-full object-cover rounded-full hover:rounded-md  transition-all duration-150 cursor-pointer" 
            />
          
            <h1 className="text-md font-medium font-serif">{item.name}</h1>
          </div>
        ))}
      </div>
      </>
  )
}

export default CategoryBag
