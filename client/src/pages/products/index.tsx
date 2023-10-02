import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { TopNav } from "@/components/TopNav";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import { Button } from "@/components/Button";
import { TopBar } from "@/components/TopBar";
import Link from "next/link";
import CategoryNav from "@/components/CategoryNav";
import { Footer } from "@/components/Footer";

const baseURL = "http://127.0.0.1:8080/";
const route = "products";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  imgpath: string;
};

export default function Products() {
  const [product, setProduct] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getMilk = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${baseURL}${route}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
        console.log(data);
      } else {
        console.error("Error fetching data:", response.statusText);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Call getMilk when the component mounts
    getMilk();
  }, []); // Empty dependency array to ensure it only runs once on mount

  return (
    <>
      <TopBar />
      <TopNav />
      <BreadcrumbBar path={["Home", "Products"]} />
      <div className="bg-[#f0f5f8] h-full lg:px-44 pt-10 px-5 pb-10">
        <div className="justify-center text-center">
          <h1 className="font-extrabold text-4xl">Our Products</h1>
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

        <div className="flex flex-row justify-center mt-5">
          <CategoryNav />
          {isLoading ? (
            <p>Loading...</p>
          ) : product ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 pr-7">
              {product.map((productItem) => (
                <ProductCard key={productItem.id} product={productItem} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}
