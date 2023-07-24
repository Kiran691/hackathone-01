//import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";
import Hero from "@/components/views/Hero";
import ProductsType from "@/components/views/ProductsType";

// async function fetchAIIProductsData() {
//   let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch");
//   }
//   return res.json();
// }

export default async function Home() {
  //   let response = await fetchAIIProductsData();
  //   console.log("response :", response);

  return (
    <div>
      {/* <Hero /> */}
      {/* <ProductsType /> */}
    </div>
  );
}
