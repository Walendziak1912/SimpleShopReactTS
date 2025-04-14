import { ChangeEvent } from "react";
import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constants/currencies";

export function CurrencySelector() {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // Obsługa zmiany waluty - możemy rozszerzyć później
    console.log(event.target.value);
  };

  return (
    <select
      className={styles.currencySelector}
      onChange={handleChange}
      defaultValue={CURRENCIES.PLN}
    >
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
}
