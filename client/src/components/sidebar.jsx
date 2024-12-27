import { useState } from "react";

const Sidebar = () => {
  const [price, setPrice] = useState(50); 

  const handlePriceChange = (event) => {
    setPrice(event.target.value); 
  };

  return (
    <aside className="w-64 p-4 border-r">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul>
        {["Perfume", "T-shirts", "Shoe", "Handbag", "Hat", "Thermos"].map((category) => (
          <li key={category} className="mb-2">
            <input type="checkbox" id={category} />
            <label htmlFor={category} className="ml-2">
              {category}
            </label>
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-bold mt-6 mb-4">Color</h2>
      <div className="flex gap-2 mb-6">
        {["bg-blue-500", "bg-yellow-500", "bg-green-500"].map((color) => (
          <span key={color} className={`${color} w-6 h-6 rounded-full`}></span>
        ))}
      </div>

      <h2 className="text-lg font-bold mb-4">Size</h2>
      <div className="flex gap-2 flex-wrap">
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <button
            key={size}
            className="border px-3 py-1 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
          >
            {size}
          </button>
        ))}
      </div>

      <h2 className="text-lg font-bold mt-6 mb-4">Price</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={price}
        onChange={handlePriceChange}
        className="w-full"
      />
      <div className="flex justify-between text-sm mt-2">
        <span>${0}</span>
        <span>${price}</span> 
      </div>
    </aside>
  );
};

export default Sidebar;
