import { createContext, Dispatch, SetStateAction } from "react"; //Dispatch w React jest częścią hooka useState i reprezentuje funkcję, która służy do aktualizacji stanu
import { CURRENCIES } from "../constants/currencies";

export type CurrencyType = typeof CURRENCIES.PLN | typeof CURRENCIES.USD;

// Definiujemy typ dla kontekstu waluty, to krotka (tablica o stałym rozmiarze) zawierjąca:
export type CurrencyContextType = [
  CurrencyType, //Aktualną wartość waluty
  Dispatch<SetStateAction<CurrencyType>> //Funkcję do aktualizacji tej waluty

  //Dispatch to typ z React, który reprezentuje funkcję do aktualizacji stanu
  //SetStateAction<T> to typ, który może być:
  // - Nową wartością stanu (typu T)
  // - Funkcją, która przyjmuje poprzedni stan i zwraca nowy stan: (prevState: T) => T

  // Zmieniając wartość bezpośrednio -> setCurrency(CURRENCIES.USD);

  // Lub używając funkcji, która bazuje na poprzedniej wartości
  // setCurrency(prevCurrency =>
  //   prevCurrency === CURRENCIES.PLN ? CURRENCIES.USD : CURRENCIES.PLN
  // );
];

// Tworzymy kontekst z właściwym typem i wartością domyślną null
export const CurrencyContext = createContext<CurrencyContextType | null>(null);
