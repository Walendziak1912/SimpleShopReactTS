import styles from "./Pagination.module.css";
import { NavLink } from "react-router-dom";

interface PaginationProps {
  numberOfPages: number;
}

export function Pagination({ numberOfPages }: PaginationProps) {
  // Tworzymy tablicę o określonej długości aby móc iterować
  const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  return (
    <ul className={styles.pagination}>
      {pages.map((pageNumber) => {
        return (
          <li key={pageNumber}>
            <NavLink to={`?page=${pageNumber}`}>{pageNumber}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
0