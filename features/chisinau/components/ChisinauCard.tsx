"use client";

import { useState } from "react";

type ChisinauCardProps = {
  planet: {
    name: string;
  };
};

const ChisinauCard = ({ planet }: ChisinauCardProps) => {
  const [counterVodka, setCounterVodka] = useState(0);

  const getFoods = async () => {
    const response = await fetch("/api/best-moldova-food");
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <p>{planet.name}</p>
      <button
        onClick={() => {
          getFoods();
        }}
      >
        ok
      </button>
      {counterVodka}
    </div>
  );
};

export default ChisinauCard;
