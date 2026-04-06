import { useState } from "react";

   const reviews = [
  {
    text: `“ Very good quality T-shirts and lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua quis ipsum! ”`,
    author: "Jane Oliver",
    stars: 5,
  },
  {
    text: `“ Amazing fit and colors. I will definitely order more!”`,
    author: "John Smith",
    stars: 4,
  },
  {
    text: `“ Great customer service and fast shipping. Highly recommend!”`,
    author: "Emily Davis",
    stars: 5,
  },
];
 export default function ReviewSection() {
   const [current, setCurrent] = useState(0);

  const prevReview = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const review = reviews[current];

  return (
    <section className="bg-gray-100 py-16 relative">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      </div>

      {/* REVIEW CARD */}
      <div className="max-w-xl mx-auto  p-8 text-center relative">
        <p className="text-gray-700 italic mb-4">{review.text}</p>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-2 text-yellow-500">
          {Array(review.stars)
            .fill(0)
            .map((_, i) => (
              <span key={i}>★</span>
            ))}
        </div>

        <p className="text-sm text-gray-500 mb-4">{review.author}</p>

        {/* BUTTONS */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevReview}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Précédent
          </button>
          <button
            onClick={nextReview}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Suivant
          </button>
        </div>
      </div>
    </section>
  );
}