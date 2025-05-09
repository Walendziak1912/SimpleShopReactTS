import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrenctyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";
import { Product } from "../../types/models";

export function Price({ product }: { product: Product }) {
  const currencyContext = useContext(CurrencyContext);
  
  if (!currencyContext) {
    throw new Error("Price musi być używany w CurrencyContext.Provider");
  }
  
  const [currency] = currencyContext;
  
  return (
    <>
      {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
      {" "}
      {currency === CURRENCIES.PLN ? CURRENCY_SIGN.PLN : CURRENCY_SIGN.USD}
    </>
  );
}
