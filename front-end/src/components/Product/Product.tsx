import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { Product as ProductType } from "../../types/models";

interface ProductProps {
  product: ProductType;
}

export function Product({ product }: ProductProps) {
  return (
    <Link to={`/product/${product.id}`} className={styles.product}>
      <img src={product.photos[0]} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.pricePLN}zł</p>
      <div className={styles.heart}></div>
    </Link>
  );
}
