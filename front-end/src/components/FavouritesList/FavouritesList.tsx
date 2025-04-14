import styles from "./FavouritesList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import { Product } from "../../types/models";

interface FavouritesListProps {
  products: Product[];
}

export function FavouritesList({ products }: FavouritesListProps) {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        <div>
          {products.map((product) => {
            return <FavouriteProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
