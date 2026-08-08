import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="max-w-sm mx-auto mt-6 p-6 text-center rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Star Rating</h2>

      <div>
        {stars.map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={star <= rating ?  "text-4xl text-yellow-400" : "text-4xl text-gray"}
            >
                {star <= rating ? "★" : "☆"}
          </button>
        ))}
      </div>

      <p className="mt-4 font-semibold">
        Rating: {rating}
      </p>
    </div>
  );
}

export default StarRating;