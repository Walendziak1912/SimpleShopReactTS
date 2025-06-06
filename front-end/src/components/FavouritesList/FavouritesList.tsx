import styles from "./FavouritesList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import { Favourite } from "../../types/models";

interface FavouritesListProps {
  favourites: Favourite[];
}

export const FavouritesList = ({ favourites }: FavouritesListProps) => {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        <div>
          {favourites.map((favourite) => {
            return (
              <FavouriteProduct key={favourite.id} favourite={favourite} />
            );
          })}
        </div>
      </div>
    </CenteredContent>
  );
};
