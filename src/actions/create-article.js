"use server";

import { revalidatePath } from "next/cache";

export const create = async (title, content) => {
  const response = await fetch(
    "https://cours-nextjs-default-rtdb.europe-west1.firebasedatabase.app/articles.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Une erreur est intervenue");
  }

  revalidatePath("/");
};
