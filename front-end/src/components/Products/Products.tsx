import styles from "./Products.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";
import { Product as ProductType } from "../../types/models";

interface ProductsProps {
  products: ProductType[];
  headerText: string;
}

export function Products({ products, headerText }: ProductsProps) {
  return (
    <CenteredContent>
      <h2 className={styles.bestsellersHeader}>{headerText}</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </CenteredContent>
  );
}
