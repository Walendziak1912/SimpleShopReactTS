import styles from "./Breadcrumbs.module.css";
import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";
import { CATEGORIES, GENDERS } from "../../constants/categories";

interface BreadcrumbItem {
  categoryName: string;
  path: string;
}

export function Breadcrumbs() {
  const { gender, category, subcategory } = useParams<{
    gender?: string;
    category?: string;
    subcategory?: string;
  }>();

  if (!gender || !category) {
    return null; // Nie renderujemy breadcrumbs jeśli nie mamy podstawowych parametrów
  }

  const foundGender = GENDERS.find((g) => g.path === gender);
  const foundCategory = CATEGORIES.find((c) => c.path === category);

  if (!foundGender || !foundCategory) {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    {
      categoryName: foundGender.categoryName,
      path: `/${foundGender.path}`,
    },
    {
      categoryName: foundCategory.categoryName,
      path: `/${foundGender.path}/${foundCategory.path}`,
    },
  ];

  if (subcategory) {
    const foundSubcategory = foundCategory.subcategories?.find(
      (sc) => sc.path === subcategory
    );

    if (foundSubcategory) {
      breadcrumbs.push({
        categoryName: foundSubcategory.categoryName,
        path: `/${foundGender.path}/${foundCategory.path}/${foundSubcategory.path}`,
      });
    }
  }

  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.path}>
            <NavLink end to={breadcrumb.path}>
              {breadcrumb.categoryName}
              <img src={ARROW_ICON} alt="Arrow" />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
