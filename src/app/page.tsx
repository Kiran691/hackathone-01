import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";
import Hero from "@/components/views/Hero";
import ProductsType from "@/components/views/ProductsType";
import ProductCarousel from "@/components/views/ProductCarousel";

async function fetchAIIProductsData() {
  // let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);
  // if (!res.ok) {
  //   throw new Error("Failed to fetch");
  // }
  // return res.json();
  return { response: "Hello" };
}

export default async function Home() {
  let response = await fetchAIIProductsData();

  return (
    <div>
      <Hero />
      <ProductsType />
      <ProductCarousel ProductData={response} />
    </div>
  );
}
