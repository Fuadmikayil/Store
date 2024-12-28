import React from "react";

const reviews = [
  {
    id: 1,
    name: "Emily Davis",
    date: "1 WEEK AGO",
    comment:
      "This company always goes above and beyond to satisfy their customers.",
    rating: 4,
  },
  {
    id: 2,
    name: "Daniel Smith",
    date: "2 MONTH AGO",
    comment:
      "I can't believe how affordable and high-quality this item is!",
    rating: 5,
  },
  {
    id: 3,
    name: "Benjamin Clark",
    date: "23 APRIL",
    comment:
      "These guys know their stuff, and it shows in their products.",
    rating: 4,
  },
];

const ReviewCard = ({ name, date, comment, rating }) => {
  return (
    <div className="flex items-start space-x-4 border-b py-4">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-600">
        {name.split(" ").map((n) => n[0]).join("")}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-medium">{name}</h4>
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map(( _, index) => (
              <span
                key={index}
                className={`text-xl ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-2 text-gray-700">{comment}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-end gap-3">
          <p className="text-4xl font-bold">4.2</p>
          <p className="text-gray-500">— 54 Reviews</p>
        </div>
        <button className="px-4 py-2 bg-white text-gray-900 rounded-md shadow hover:bg-gray-900  hover:text-white border border-gray-900  transition-all">
          Write a review
        </button>
      </div>
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        
      <button className="mt-6 w-[200px]   px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300">
        Load more reviews
      </button>
      </div>
    </div>
  );
};

export default Reviews;
