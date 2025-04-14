import { Hero } from "../../components/Hero/Hero";
import { Products } from "../../components/Products/Products";
import { useLoaderData } from "react-router-dom";
import { GenderData } from "../../types/models";

export function MainPage() {
  const { bestsellers, heroImageUrl } = useLoaderData() as GenderData;

  return (
    <>
      <Hero heroImage={heroImageUrl} />
      <Products headerText="Sprawdź nasze bestsellery" products={bestsellers} />
    </>
  );
}
