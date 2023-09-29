import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { TopBar } from "@/components/TopBar";
import { TopNav } from "@/components/TopNav";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import CategoryNav from "@/components/CategoryNav";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imgpath: string;
}

const CategoryPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const baseURL = "http://127.0.0.1:8080/";
  const route = "products/category?category_id=";

  const [categoryName, setCategoryName] = useState("");
  const [product, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    // Fetch category name and products by category ID
    if (id) {
      fetch(`${baseURL}${route}${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.categoryName) {
            setCategoryName(data.categoryName);
          }
          if (data.products) {
            setProducts(data.products);
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]);

  return (
    <>
      <TopBar />
      <TopNav />
      <BreadcrumbBar path={["Home", "Products", categoryName]} />
      <div className="bg-[#f0f5f8] h-full lg:px-44 pt-10 px-5 pb-10">
        <div className="justify-center text-center">
          <h1 className="font-extrabold text-4xl">{categoryName}</h1>
          <p className="pt-3 lg:px-24 font-light">
            Our farm-fresh milk isn&#39;t just about making your morning cereal
            and coffee delightful. It&#39;s a commitment to supporting local
            dairy farmers, minimizing plastic waste, and delivering it in
            eco-friendly glass bottles as pristine as a daisy (the flower, not
            one of our cows). And while yo&#39;re at it, don&#39;t forget to
            savor our irresistibly creamy, sustainably conscious oat milk
            alternative!
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <CategoryNav />
          {product ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5 pr-7">
              {product.map((productItem) => (
                <ProductCard key={productItem.id} product={productItem} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
