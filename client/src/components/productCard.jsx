const ProductCard = ({ image, title, price, stock }) => {
    return (
      <div className="border p-4 rounded-lg">
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-600">{price}</p>
        <p className={`text-sm ${stock ? "text-green-500" : "text-red-500"}`}>{stock ? "In Stock" : "Out of Stock"}</p>
      </div>
    );
  };
  
  export default ProductCard;
  