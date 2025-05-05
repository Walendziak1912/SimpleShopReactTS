import { BACK_END_URL } from "../constants/api";

//Wykorzystanie akcji w React Router dla operacji modyfikujących dane jest dobrą praktyką i właściwym podejściem architektonicznym.
export function deleteFavouriteAction(favouriteId: number) {
  return fetch(`${BACK_END_URL}/favourites/${favouriteId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
