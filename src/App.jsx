import React from "react";
import Header from "./component/header/Header";
import Carousel from "./component/HeroCrousol/Carousel";
import BiggestDeals from "./component/biggestDeal/BiggestDeals";
import ExploreTop from "./component/exploretopbrand/ExploreTop";
import CategoryBag from "./component/category to bag/CategoryBag";
import Shoe from "./component/shoeandwatch/Shoe";
import Watch from "./component/shoeandwatch/Watch";

function App() {
  // const slides = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg", "./5.jpg"];
  const slides = ["./pc._CB573380421_.gif", "./pc._CB572133708_.gif"];

  const dealImg = [
    {
      url: "./cap.jpg",
      id: "1",
      logoName: "CAP",
      discount: "30-60% off",
    },
    {
      url: "./shoe.jpg",
      id: "2",
      logoName: "SHOES",
      discount: "40% off",
    },
    {
      url: "./jacket.jpg",
      id: "3",
      logoName: "JACKET",
      discount: "30-50% off",
    },
    {
      url: "./jeans.jpg",
      id: "4",
      logoName: "JEANS",
      discount: "30% off",
    },
    {
      url: "./shirts.jpg",
      id: "5",
      logoName: "SHIRT",
      discount: "30-60% off",
    },
  ];

  const categoryImg = [
    {
      url: "./tshirt.jpg",
      id: "1",
      name: "CAP",
    },
    {
      url: "./crocs.jpg",
      id: "2",
      name: "CROCS",
    },
    {
      url: "./kurta.jpg",
      id: "3",
      name: "KURTA",
    },
    {
      url: "./shorts.jpg",
      id: "4",
      name: "SHORTS",
    },
    {
      url: "./sportshoe.jpg",
      id: "5",
      name: "SPORT SHOE",
    },
    {
      url: "./lower.jpg",
      id: "5",
      name: "LOWER",
    },
    {
      url: "./perfume.jpg",
      id: "5",
      name: "PERFUME",
    },
  ];

  const dealImg2 = [
    {
      url: "./nike fitness",
      id: "1",
      logoName: "NIKE",
      discount: "Up to 60% off",
    },
    {
      url: "./levis.jpg",
      id: "2",
      logoName: "LEVI'S",
      discount: "Flat 50% off",
    },
    {
      url: "./roadster",
      id: "3",
      logoName: "ROADSTER",
      discount: "40-70% off",
    },
    {
      url: "./jack and jones.jpg",
      id: "4",
      logoName: "JACK & JONES",
      discount: "Up to 60% off",
    },
    {
      url: "./hilfger",
      id: "5",
      logoName: "HILFGER",
      discount: "30-60% off",
    },
    {
      url: "./hrx",
      id: "5",
      logoName: "HRX",
      discount: "30-70% off",
    },
  ];

  const shoe = [
    {
      src: "./shoe1",
      id: "1",
      com: "BIRDE",
      des: "Breathable Black Running shoes Walking Shoes For Men  (Blue)",
    },
    {
      src: "./shoe2",
      id: "2",
      com: "RED TAPE  ",
      des: "Soft Cushioned Insole, Slip-Resistance Sneakers For Men  (Grey)",
    },
    {
      src: "./shoe3.webp",
      id: "3",
      com: "CLYMB ",
      des: "Sneakers For Men  (Black)",
    },
    {
      src: "./shoe4",
      id: "4",
      com: "CLYMB ",
      des: "Lace up Waterproof blue shoes for running",
    },
    {
      src: "./shoe5.webp",
      id: "5",
      com: "AADI ",
      des: "Lightweight,Comfort,Summer,Trendy",
    },
    {
      src: "./shoe6.webp",
      id: "6",
      com: "RapidBox  ",
      des: "Sneakers For Men  (White, Olive)",
    },
    {
      src: "./shoe7",
      id: "7",
      com: "WHITE WALKERS ",
      des: "Stylish & Trending Outdoor Walking Comfortable Sneakers For Men  (White)",
    },
  ];

  const watch = [
    {
      img: "./watch",
      key: "1",
      com: "BIRDE",
      des: "Breathable Black Running shoes Walking Shoes For Men  (Blue)",
    },
    {
      img: "./WATCH1",
      key: "2",
      com: "LIMESTONE   ",
      des: "OTUS Limited Day and Date Functioning Series ",
    },
    {
      img: "./watch2",
      key: "3",
      com: "TIMEX ",
      des: "Analog Watch - For Men TW00ZR347",
    },
    {
      img: "./watch7",
      key: "4",
      com: "BARASTI  ",
      des: "New Arrival Multifunctional Sport Look Watch Digital Watch",
    },
    {
      img: "./watch4",
      key: "5",
      com: "PETER ENGLAND ",
      des: "Analog Watch - For Men PE000017B",
    },
    {
      img: "./watch5",
      key: "6",
      com: "TIMEX  ",
      des: "Analog Watch - For Men TWTG80SMU09",
    },
    {
      img: "./watch6",
      key: "7",
      com: "PETER ENGLAND  ",
      des: "Analog Watch - For Men PE000017C",
    },
  ];

  return (
    <>
      <Header />
      <div className="h-2/6 flex justify-center items-center w-full pt-2  ">
        <div>
          <Carousel slides={slides} />
        </div>
      </div>
      <BiggestDeals dealImg={dealImg} />
      <CategoryBag categoryImg={categoryImg} />
      <ExploreTop dealImg2={dealImg2} />

      <Shoe shoes={shoe} />
      <Watch watches={watch} />
    </>
  );
}
git add .
export default App;
