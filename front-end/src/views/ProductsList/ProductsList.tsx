import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import { ProductListResponse } from "../../types/models";

export function ProductsList() {
  const { products, numberOfPages } = useLoaderData() as ProductListResponse;
  const params = useParams<{ category?: string; subcategory?: string }>();

  if (!params.category) {
    return null;
  }

  const foundCategory = CATEGORIES.find((c) => c.path === params.category);

  if (!foundCategory) {
    return null;
  }

  let headerText = foundCategory.categoryName;

  if (params.subcategory && foundCategory.subcategories) {
    const foundSubcategory = foundCategory.subcategories.find(
      (sc) => sc.path === params.subcategory
    );

    if (foundSubcategory) {
      headerText = foundSubcategory.categoryName;
    }
  }

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products headerText={headerText} products={products} />
        <Pagination numberOfPages={numberOfPages} />
      </div>
    </FlexContainer>
  );
}
