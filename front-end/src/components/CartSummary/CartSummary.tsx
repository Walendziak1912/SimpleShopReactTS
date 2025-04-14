import styles from "./CartSummary.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";
import { Product } from "../../types/models";

interface CartSummaryProps {
  products: Product[];
}

export function CartSummary({ products }: CartSummaryProps) {
  const deliveryCost: number = 49;
  const minSumForFreeDelivery: number = 500;

  let sum: number = 0;
  products.forEach((product) => {
    sum += product.pricePLN;
  });

  const totalCost: number =
    sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktów: </p>
        <p>{sum}zł</p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy:</p>
        <p>{sum > minSumForFreeDelivery ? 0 : deliveryCost}zł</p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>Do zapłaty:</p>
        <p>{totalCost}zł</p>
      </div>
      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_ICON} alt="Dostawa" />
        <p>Darmowa dostawa od {minSumForFreeDelivery}zł</p>
      </div>
    </div>
  );
}
