import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
import { Favourite } from "../../types/models";
import { useLoaderData } from "react-router-dom";

export function Favourites() {
  const favouriteProducts: Favourite[] = useLoaderData() as Favourite[];
  return <FavouritesList favourites={favouriteProducts} />;
}
