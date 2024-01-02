import React from "react";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

function Header() {
  return (
    <>
      <nav className=" h-14 bg-neutral-200 flex px-4 items-center w-full shadow-md">
        <div className="left w-1/2 flex items-center gap-14 ">
          <div className="logo cursor-pointer">
            <img src="./myntra_logo.webp" alt="logo" className="h-14" />
          </div>
          <div className="categoryleft ">
            <ul className="flex uppercase text-black text-xs font-semibold gap-14 cursor-pointer">
              <li>men</li>
              <li>women</li>
              <li>kids</li>
              <li>home & living</li>
              <li>beauty</li>
              <li>
                studio{" "}
                <span className="text-red-600 text-xs absolute top-2">new</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="categoryright flex w-4/5 gap-32 justify-center items-center">
          <div className="searchbar w-3/6 h-8 flex items-center bg-white rounded-md">
            <IoSearch className="searchIcon ml-3" />
            <input
              placeholder="Search for product"
              className="searchInput border-none w-4/5 ml-4 outline-none"
            />
          </div>
          <div className="categorylogo grid grid-cols-4 items-center gap-6 justify-center font-semibold text-sm">
            <div className="profile flex flex-col items-center justify-center cursor-pointer">
              <CgProfile className="text-xl" />
              <span className="text-xs">Profile</span>
            </div>
            <div className="wishlist flex flex-col items-center cursor-pointer">
              <CiHeart className="text-xl" />
              <span className="h-4 w-4 text-xs bg-red-600 rounded-full absolute top-1 ml-6 flex justify-center items-center text-white">
                1
              </span>
              <span className="text-xs">Wishlist</span>
            </div>
            <div className="bag flex flex-col items-center cursor-pointer">
              <span className="h-4 w-4 text-xs bg-red-600 rounded-full absolute top-1 ml-6 flex justify-center items-center text-white ">
                5
              </span>
              <MdOutlineShoppingBag className="text-xl" />
              <span className="text-xs">Bag</span>
            </div>
            <button className=" bg-slate-800 text-white px-3 py-1 rounded-sm cursor-pointer">
              Log In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
