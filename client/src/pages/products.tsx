import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { TopNav } from "@/components/TopNav";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import { Button } from "@/components/Button";

const baseURL = "http://127.0.0.1:8080/";
const route = "products";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

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
      <TopNav />
      <BreadcrumbBar path={["Home", "Products"]} />

      <div className="bg-[#f0f5f8] h-screen sm:pl-10 sm:pr-10 pt-10 px-5">
        {isLoading ? (
          <p>Loading...</p>
        ) : product ? (
          <div className="flex flex-row">
            {product.map((productItem) => (
              <ProductCard key={productItem.id} product={productItem} />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}
