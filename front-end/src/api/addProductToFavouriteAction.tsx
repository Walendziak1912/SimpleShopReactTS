import { BACK_END_URL } from "../constants/api";
import { ActionFunctionArgs } from "react-router-dom";

export const addProductToFavourites = async ({
  params,
}: ActionFunctionArgs): Promise<Response> => {
  try {
    const productId = params.productId;
    console.log("productId", productId);
    if (!productId) {
      throw new Error("Nieprawidłowe ID produktu");
    }

    const response = await fetch(`${BACK_END_URL}/favourites`, {
      method: "POST",
      body: JSON.stringify({
        productId: Number(productId),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Błąd podczas dodawania do ulubionych: ${response.status}`
      );
    }

    return response;
  } catch (error) {
    console.error("Błąd podczas dodawania produktu do ulubionych:", error);
    throw error;
  }
};
