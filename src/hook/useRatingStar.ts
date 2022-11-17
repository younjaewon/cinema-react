import { useState, useEffect, useRef } from "react";

const useRatingStar = (rating: number, totalStars: number) => {
  const [numberOfStars, setNumberOfStars] = useState<Array<number>>([]);
  const ratingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starsArray = Array.from({ length: totalStars })
      .fill(0)
      .map((_, i) => i + 1);

    let percentage;
    if (rating <= 5) {
      percentage = (rating / 5) * 25;
    } else {
      percentage = (rating / 10) * 25;
    }

    const starPercentage = `${Math.floor(percentage)}%`;
    if (ratingRef.current) {
      ratingRef.current.style.width = starPercentage;
      setNumberOfStars(starsArray);
    }
  }, [rating, totalStars]);

  return { numberOfStars, ratingRef };
};

export default useRatingStar;