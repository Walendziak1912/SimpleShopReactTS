import { BACK_END_URL } from "../constants/api";
import { ActionFunctionArgs } from "react-router-dom";

export const deleteFavouriteAction = async ({
  params,
}: ActionFunctionArgs): Promise<Response> => {
  try {
    const favouriteId = params.favouriteId;

    if (!favouriteId) {
      throw new Error("Nieprawidłowe ID ulubionego produktu");
    }

    const response = await fetch(`${BACK_END_URL}/favourites/${favouriteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Błąd podczas usuwania z ulubionych: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("Błąd podczas usuwania produktu z ulubionych:", error);
    throw error;
  }
};
