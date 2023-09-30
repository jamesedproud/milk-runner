import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { TopBar } from "@/components/TopBar";
import { TopNav } from "@/components/TopNav";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import CategoryNav from "@/components/CategoryNav";
import Image from "next/image";
import { Button } from "@/components/Button";
import { BsCart4 } from "react-icons/bs";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  imgpath: string;
  category_id: number;
  category_name: string;
};

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const baseURL = "http://127.0.0.1:8080/";
  const route = "products/";

  const [categoryName, setCategoryName] = useState("");
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Fetch category name and products by category ID
    if (id) {
      fetch(`${baseURL}${route}${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setProduct(data);
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]);

  return (
    <>
      <TopBar />
      <TopNav />
      <BreadcrumbBar
        path={[
          "Home",
          "Products",
          String(product?.category_id) + "/" + product?.category_name || "",
          product?.title || "",
        ]}
      />

      <div className="bg-[#f0f5f8] h-full lg:px-44 pt-10 px-5 pb-10">
        <div className="flex flex-row ml-20">
          <Image
            src={
              `/productImages/${product?.imgpath}` || "/productImages/milk.jpeg"
            }
            width={400}
            height={400}
            alt="Product Image"
            layout=""
            className="rounded-2xl"
          />
          <div className="ml-10">
            <h1 className="font-extrabold text-5xl">{product?.title}</h1>
            <p className="pt-3 font-light text-2xl">
              From ¥{Math.round(product?.price)} pint
            </p>
            <p className="pt-3 font-extralight">
              Sign up and order before 8pm for Next Day Delivery
            </p>
            <Button className="mt-5 flex flex-row">
              <BsCart4 className="mt-[2px] mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-between"></div>
      </div>
    </>
  );
};

export default ProductPage;
