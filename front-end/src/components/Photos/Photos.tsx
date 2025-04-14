import { useState } from "react";
import styles from "./Photos.module.css";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import { Product } from "../../types/models";

interface PhotosProps {
  product: Product;
}

export function Photos({ product }: PhotosProps) {
  const [currentPhoto, setCurrentPhoto] = useState<string>(product.photos[0]);

  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {product.photos.map((photo) => {
          return (
            <img
              className={currentPhoto === photo ? styles.active : ""}
              onClick={() => {
                setCurrentPhoto(photo);
              }}
              key={photo}
              src={photo}
              alt={product.productName}
            />
          );
        })}
      </div>
      <img
        className={styles.mainPhoto}
        src={currentPhoto}
        alt={product.productName}
      />
    </FlexContainer>
  );
}
