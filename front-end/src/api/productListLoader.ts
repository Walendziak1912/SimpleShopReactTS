import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";
import { CATEGORIES } from "../constants/categories";
import { Product, ProductListResponse } from "../types/models";

export async function productListLoader({
  params,
  request,
}: LoaderFunctionArgs): Promise<ProductListResponse | Response> {
  const { gender, category, subcategory } = params;
  const pageUrl = new URL(request.url);
  const page = pageUrl.searchParams.get("page") || "1";

  if (!gender || !category) {
    return redirect("/kobieta");
  }

  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender as string];

  if (foundGender && foundCategory) {
    let url = `${BACK_END_URL}/products/?gender=${foundGender}&category=${category}`;

    if (subcategory) {
      const foundSubcategory = foundCategory.subcategories?.find(
        (sc) => sc.path === subcategory
      );
      if (foundSubcategory) {
        url = `${url}&subcategory=${subcategory}`;
      } else {
        return redirect("/kobieta");
      }
    }

    url = `${url}&_limit=8&_page=${page}`;

    const response = await fetch(url);
    const totalCount = response.headers.get("X-Total-Count");
    const numberOfPages = Math.ceil(Number(totalCount || "0") / 8);

    const products: Product[] = await response.json();

    return {
      products,
      numberOfPages,
    };
  } else {
    return redirect("/kobieta");
  }
}
