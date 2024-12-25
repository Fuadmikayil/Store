import { Carousel, Typography, Button } from "@material-tailwind/react";
import productsImg from "../assets/images/cover.png";

function CarouselWithContent() {
  return (
    <section className="flex justify-center w-full  gap-20  items-center">
      <Carousel className="rounded-xl w-[450px] h-[400px] overflow-hidden">
        <div className="relative h-full w-full">
          <img
            src={productsImg}
            alt="image 1"
            className="h-full w-full object-cover p-5"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/10"></div>
        </div>
        <div className="relative h-full w-full ">
          <img
            src={productsImg}
            alt="image 2"
            className="h-full w-full object-cover p-5"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/10"></div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={productsImg}
            alt="image 3"
            className="h-full w-full object-cover p-5"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/10"></div>
        </div>
      </Carousel>

      <div className="max-w-sm  bg-white shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Raw Black T-Shirt Lineup</h1>
          <i className="text-gray-500 material-icons">share</i>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <i className="text-yellow-400 material-icons">star</i>
            <h3 className="ml-1 text-sm text-gray-600">4.2 — 54 Reviews</h3>
          </div>
          <button className="text-xs text-white bg-green-500 px-2 py-1 rounded-lg">
            IN STOCK
          </button>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-4">$75.00</h3>
        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-600">Available Colors</p>
          <div className="flex space-x-3 mt-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-400 border border-gray-300"></div>
            <div className="w-6 h-6 rounded-full bg-green-500 border border-gray-300"></div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-600">Select Size</p>
          <div className="flex space-x-2 mt-2">
            {["S", "M", "X", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className="w-8 h-8 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-600">Quantity</p>
          <div className="flex items-center mt-2">
            <button className="w-8 h-8 text-xl font-bold text-gray-700 bg-gray-100 rounded-l-lg border border-gray-300 hover:bg-gray-200">
              -
            </button>
            <input
              type="text"
              value="1"
              readOnly
              className="w-12 h-8 text-center text-sm font-medium text-gray-700 bg-white border border-gray-300"
            />
            <button className="w-8 h-8 text-xl font-bold text-gray-700 bg-gray-100 rounded-r-lg border border-gray-300 hover:bg-gray-200">
              +
            </button>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800">
            Add to cart
          </button>
          <p className="mt-2 text-center text-sm text-gray-500">
            FREE SHIPPING ON ORDERS $100+
          </p>
        </div>
      </div>
    </section>
  );
}

export default CarouselWithContent;
