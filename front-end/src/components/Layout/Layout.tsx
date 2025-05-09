import { Outlet } from "react-router-dom";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";
import { useState, useEffect } from "react";
import { CurrencyContext, CurrencyType } from "../../contexts/CurrenctyContext";
import { CURRENCIES } from "../../constants/currencies";

export function Layout() {
  // Inicjalizacja stanu z localStorage lub domyślną wartością (PLN)
  const [currency, setCurrency] = useState<CurrencyType>(() => {
    const savedCurrency = localStorage.getItem("selected_currency") as CurrencyType | null;
    return savedCurrency || CURRENCIES.PLN;
  });

  // Zapisywanie zmian waluty do localStorage
  useEffect(() => {
    localStorage.setItem("selected_currency", currency);
  }, [currency]);

  return (
    <>
      <CurrencyContext.Provider value={[currency, setCurrency]}>
        <MainContent>
          <TopBar>
            <MainMenu />
            <Logo />
            <div>
              <CurrencySelector />
              <IconMenu />
            </div>
          </TopBar>
          <CategoryMenu />
          <Outlet />
        </MainContent>
        <Footer />
      </CurrencyContext.Provider>
    </>
  );
}
