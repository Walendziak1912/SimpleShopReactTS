import styles from "./IconMenu.module.css";
import BAG_ICON from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";
import { Link } from "react-router-dom";

export function IconMenu() {
  const cartItems: number = 2; // Docelowo powinno pochodzić ze stanu aplikacji

  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/ulubione">
          <img src={HEART} alt="Ulubione" />
        </Link>
      </li>
      <li>
        <Link to="/koszyk">
          <img src={BAG_ICON} alt="Koszyk" />
          <div className={styles.numberOfProducts}>{cartItems}</div>
        </Link>
      </li>
    </ul>
  );
}
