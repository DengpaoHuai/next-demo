"use client";

import { createFood } from "@/actions/food-actions";
import foodSchema from "@/features/foods/schemas/food-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { useRouter } from "next/navigation";

const CreateFoodPage = () => {
  const router = useRouter();
  const {
    form: {
      register,
      formState: { errors },
    },
    action,
    handleSubmitWithAction,
    resetFormAndAction,
  } = useHookFormAction(createFood, zodResolver(foodSchema), {
    formProps: {},
    errorMapProps: {},
    actionProps: {
      onSuccess: (demo) => {
        console.log(demo);
        window.alert("Logged in successfully!");
        resetFormAndAction();
        router.push("/foods");
      },
    },
  });

  return (
    <div>
      <h1>Create Food</h1>
      <form onSubmit={handleSubmitWithAction}>
        <input {...register("name")} placeholder="name" />
        <p>{errors.name?.message}</p>
        <input {...register("calories")} placeholder="calories" />
        <p>{errors.calories?.message}</p>
        <input {...register("description")} placeholder="description" />
        <p>{errors.name?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateFoodPage;
