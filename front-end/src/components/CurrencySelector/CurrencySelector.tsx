import { ChangeEvent, useContext } from "react";
import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constants/currencies";
import { CurrencyContext, CurrencyType } from "../../contexts/CurrenctyContext";

export const CurrencySelector = () => {
  const currencyContext = useContext(CurrencyContext);

  if (!currencyContext) {
    throw new Error(
      "CurrencySelector musi być używany w CurrencyContext.Provider"
    );
  }
  const [currency, setCurrency] = currencyContext;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = event.target.value as CurrencyType;
    setCurrency(newCurrency);
    localStorage.setItem("selected_currency", newCurrency);
  };

  return (
    <select
      className={styles.currencySelector}
      onChange={handleChange}
      value={currency}
    >
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
};
