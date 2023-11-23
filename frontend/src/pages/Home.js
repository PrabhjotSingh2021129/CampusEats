import React, { useRef, useState, useEffect } from "react";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
// import FilterProduct from "../components/FilterProduct";
import AllProduct from "../components/AllProduct";
import { Link } from "react-router-dom";

function Home() {
  const productData = useSelector((state) => state.product.productList);

  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetables",
    []
  );

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              alt="bike-icon"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fastest delivery at{" "}
            <span className="text-red-600">Your DoorStep</span>
          </h2>
          <p className="p-4 text-base font-semibold">
            Welcome to CampusEats, the ultimate culinary destination right on
            your college campus! We're excited to present a virtual dining
            experience that revolutionizes the way you enjoy food.Discover the
            joy of hassle-free dining as we deliver culinary delights straight
            to your location on campus. Embrace the ease of online ordering and
            indulge in the flavors that make college life even more enjoyable.{" "}
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md text-3xl">
            <Link to={"menu/6558d8167f54fb2373343855"} className="text-white">
              Order Now
            </Link>
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading..."} />
                );
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "vegetables"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>

      <AllProduct heading={"Our Products"} />
    </div>
  );
}

export default Home;
