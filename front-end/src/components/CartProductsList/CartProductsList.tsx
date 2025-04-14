import styles from "./CartProductsList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";
import { Product } from "../../types/models";

interface CartProductsListProps {
  products: Product[];
}

export function CartProductsList({ products }: CartProductsListProps) {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Koszyk</h2>
        <div>
          {products.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
