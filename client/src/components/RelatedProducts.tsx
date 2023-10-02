import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

type RelatedProductsProps = {
  categoryId: number;
  id: number;
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  imgpath: string;
};

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  categoryId,
  id,
}) => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  const baseURL = "http://127.0.0.1:8080/";
  const route = "products/category?category_id=";

  useEffect(() => {
    // Fetch related products by category ID
    fetch(`${baseURL}${route}${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products) {
          const availableProducts = data.products;

          // Filter out the main product by id
          const filteredProducts = availableProducts.filter(
            (product: Product) => product.id !== id
          );

          // Shuffle the filteredProducts array to randomize the selection each time
          const shuffledProducts = [...filteredProducts];
          for (let i = shuffledProducts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledProducts[i], shuffledProducts[j]] = [
              shuffledProducts[j],
              shuffledProducts[i],
            ];
          }

          const maxProducts = Math.min(shuffledProducts.length, 4); // Maximum 4 related products
          setRelatedProducts(shuffledProducts.slice(0, maxProducts));
        }
      })
      .catch((error) =>
        console.error("Error fetching related products:", error)
      );
  }, [categoryId, id]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
      {relatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default RelatedProducts;
