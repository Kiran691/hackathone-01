import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import { oneProductType } from "@/components/utils/ProductDataArrayAndTypes";
import AllProductsCompo from "@/components/views/AllProduct";

async function fetchAllProductData() {
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=6`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

const Products = async () => {
  const ProductData = await fetchAllProductData();
  console.log(ProductData.productArray);
  return (
    <div>
      <AllProductsCompo ProductsArray={ProductData} />
    </div>
  );
};

export default Products;
