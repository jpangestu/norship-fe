import { GetProducts } from "./lib/products";
import CardProduct from "../../components/card_product";
import Category from "../../components/category";

export default async function Home() {
  const products = await GetProducts();
  return (
    <div className="p-4">
      <h1 className="text-white font-bold text-2xl ml-23 mb-4">Categories: </h1>
      <Category />
      <h1 className="text-white font-bold text-2xl ml-23 mb-4">Products: </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product: any) => (
          <CardProduct key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
