import styles from "./CartSummary.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";
import { Product } from "../../types/models";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrenctyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";

interface CartSummaryProps {
  products: Product[];
}

export function CartSummary({ products }: CartSummaryProps) {
  const currencyContext = useContext(CurrencyContext);
  
  if (!currencyContext) {
    throw new Error("CartSummary musi być używany w CurrencyContext.Provider");
  }
  
  const [currency] = currencyContext;
  
  // Koszty dostawy w różnych walutach
  const deliveryCost = currency === CURRENCIES.PLN ? 49 : 12;
  const minSumForFreeDelivery = currency === CURRENCIES.PLN ? 500 : 120;

  let sum = 0;
  products.forEach((product) => {
    sum += currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD;
  });

  const totalCost =
    sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktów: </p>
        <p>{sum} {currency === CURRENCIES.PLN ? CURRENCY_SIGN.PLN : CURRENCY_SIGN.USD}</p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy:</p>
        <p>{sum > minSumForFreeDelivery ? 0 : deliveryCost} {currency === CURRENCIES.PLN ? CURRENCY_SIGN.PLN : CURRENCY_SIGN.USD}</p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>Do zapłaty:</p>
        <p>{totalCost} {currency === CURRENCIES.PLN ? CURRENCY_SIGN.PLN : CURRENCY_SIGN.USD}</p>
      </div>
      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_ICON} alt="Dostawa" />
        <p>Darmowa dostawa od {minSumForFreeDelivery} {currency === CURRENCIES.PLN ? CURRENCY_SIGN.PLN : CURRENCY_SIGN.USD}</p>
      </div>
    </div>
  );
}
