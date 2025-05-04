import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
import { Product } from "../../types/models";
import { useLoaderData } from "react-router-dom";

export function Favourites() {
  const favouriteProducts: Product[] = useLoaderData() as Product[];
  return <FavouritesList products={favouriteProducts} />;
}
