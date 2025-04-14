import styles from "./CartProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import { Product } from "../../types/models";

interface CartProductProps {
  product: Product;
}

export function CartProduct({ product }: CartProductProps) {
  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} alt={product.productName} />
      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{product.pricePLN}zł</p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena: </span>
          {product.pricePLN}zł
        </p>
        <div className={styles.buttonRow}>
          <button>
            <img src={REMOVE_ICON} alt="Usuń" />
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
}
