"use client";
import { useState } from "react";

const CounterVodka = () => {
  const [counterVodka, setCounterVodka] = useState(0);

  return (
    <div>
      <h1>Counter Vodka</h1>
      <p>{counterVodka}</p>
      <button onClick={() => setCounterVodka(counterVodka + 1)}>Add</button>
      <button onClick={() => setCounterVodka(counterVodka - 1)}>Remove</button>
    </div>
  );
};

export default CounterVodka;
