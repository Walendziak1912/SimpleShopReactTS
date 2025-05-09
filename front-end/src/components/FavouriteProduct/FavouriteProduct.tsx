import styles from "./FavouriteProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import BAG_ICON from "../../assets/bag.svg";
import { Favourite } from "../../types/models";
import { useFetcher } from "react-router-dom";
import { Price } from "../Price/Price";

interface FavouriteProductProps {
  favourite: Favourite;
}

export function FavouriteProduct({ favourite }: FavouriteProductProps) {
  const product = favourite.product;
  const fetcher = useFetcher();

  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} alt={product.productName} />
      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p><Price product={product} /></p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena: </span>
          <Price product={product} />
        </p>
        <div className={styles.buttonRow}>
          <fetcher.Form
            action={`/delete-favourite/${favourite.id}`}
            method="DELETE"
          >
            <button>
              <img src={REMOVE_ICON} alt="Usuń" />
              Usuń
            </button>
          </fetcher.Form>
          <button>
            <img src={BAG_ICON} alt="Koszyk" />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
