import { Link, useFetcher } from "react-router-dom";
import styles from "./Product.module.css";
import { Product as ProductType } from "../../types/models";

interface ProductProps {
  product: ProductType;
}

export function Product({ product }: ProductProps) {
  //const { Form } = useFetcher();

  const fetcher = useFetcher();

  // Sprawdzanie stanu operacji
  // const isAdding = fetcher.state === "submitting";
  // const isSuccess = fetcher.state === "idle" && fetcher.data?.success;
  // const isError = fetcher.state === "idle" && fetcher.data?.error;

  return (
    <Link to={`/product/${product.id}`} className={styles.product}>
      <img src={product.photos[0]} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.pricePLN}zł</p>
      <fetcher.Form
        method="post"
        action={`/add-to-favourites/${product.id}`}
        onClick={(e) => {
          e.stopPropagation();
          //Chodzi o propagację zdarzeń (event propagation) w React. Występuje zjawisko "event bubbling" - gdy klikasz na element wewnątrz rodzica z obsługą zdarzeń (Link), to zdarzenie "bąbelkuje" w górę drzewa DOM.
          //Bez e.stopPropagation(), kliknięcie przycisku serduszka (dodanie do ulubionych) spowodowałoby 1. Wykonanie akcji formularza (dodanie do ulubionych) oraz 2. Przejście do szczegółów produktu (Link).
          //Metoda e.stopPropagation() zatrzymuje to "bąbelkowanie" - zdarzenie kliknięcia nie jest przekazywane wyżej do rodzica (Link), więc:
          //Kliknięcie serduszka powoduje tylko dodanie do ulubionych
          //Kliknięcie w dowolnym innym miejscu komponentu przenosi do szczegółów produktu
        }}
      >
        <button
        // title={isSuccess ? "Dodano do ulubionych" : "Dodaj do ulubionych"}
        >
          <div className={styles.heart}></div>
        </button>
        {/* {isError && <div className={styles.error}>{fetcher.data.error}</div>} */}
      </fetcher.Form>
    </Link>
  );
}
