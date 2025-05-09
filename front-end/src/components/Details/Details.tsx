import styles from "./Details.module.css";
import CAR_ICON from "../../assets/car.svg";
import RETURN_ICON from "../../assets/return.svg";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { Accordion } from "../Accordion/Accordion";
import { Product } from "../../types/models";
import { Price } from "../Price/Price";

interface DetailsProps {
  product: Product;
}

export function Details({ product }: DetailsProps) {
  const accordionContent = [
    {
      title: "Opis produktu",
      content: product.description,
    },
    {
      title: "Wskazówki pielęgnacyjne",
      content: product.maintenanceInfo,
    },
  ];

  return (
    <div className={styles.details}>
      <h2>{product.brand}</h2>
      <p className={styles.productName}>{product.productName}</p>
      <p className={styles.price}><Price product={product} /></p>

      <FullWidthButton isBlack={true}>Dodaj do koszyka</FullWidthButton>

      <ul className={styles.extraInfo}>
        <li>
          <img src={CAR_ICON} alt="Dostawa" />
          Dostawa do 24h
        </li>
        <li>
          <img src={RETURN_ICON} alt="Zwrot" />
          Zwrot do 100 dni!
        </li>
      </ul>

      <Accordion items={accordionContent} />
    </div>
  );
}
