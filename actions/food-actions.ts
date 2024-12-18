"use server";
import foodSchema from "@/features/foods/schemas/food-schema";
import { actionClient } from "@/lib/safe-actions";
import { redirect } from "next/navigation";

export const createFood = actionClient
  .schema(foodSchema)
  .action(async ({ parsedInput: { name, calories, description } }) => {
    console.log("name", name);
    console.log("calories", calories);
    console.log("description", description);

    return { data: { name, calories, description } };
  });
