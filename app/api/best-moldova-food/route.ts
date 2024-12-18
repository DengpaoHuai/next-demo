import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    foodList: [
      {
        name: "Placinte",
        description:
          "Placinte is a traditional Moldovan dish, a kind of pie made from thin dough with various fillings. The most popular fillings are cheese, potatoes, cabbage, and apples. Placinte can be baked or fried.",
      },
      {
        name: "Mamaliga",
        description:
          "Mamaliga is a traditional Moldovan dish made from cornmeal. It is similar to polenta and is often served with cheese, sour cream, or meat. Mamaliga can be eaten as a side dish or as a main course.",
      },
      {
        name: "Sarmale",
        description:
          "Sarmale is a traditional Moldovan dish made from cabbage leaves stuffed with a mixture of rice, meat, and spices. The stuffed cabbage leaves are then cooked in a tomato sauce until tender. Sarmale is often served with sour cream.",
      },
      {
        name: "Mititei",
        description:
          "Mititei is a traditional Moldovan dish made from ground meat, garlic, and spices. The mixture is shaped into small sausages and grilled until cooked through. Mititei are often served with mustard and bread.",
      },
      {
        name: "Drob",
        description:
          "Drob is a traditional Moldovan dish made from lamb or chicken offal, eggs, and herbs. The mixture is baked in the oven until set and then served cold. Drob is often served as an appetizer or snack.",
      },
    ],
  });
};
