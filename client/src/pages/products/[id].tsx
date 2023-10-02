import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TopBar } from "@/components/TopBar";
import { TopNav } from "@/components/TopNav";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import Image from "next/image";
import { Button } from "@/components/Button";
import { BsCart4 } from "react-icons/bs";
import RelatedProducts from "@/components/RelatedProducts";
import { ValuesTable } from "@/components/ValuesTable";
import { Footer } from "@/components/Footer";
import { Accordion } from "@/components/Accordian";

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

      <div className="bg-[#f0f5f8] h-full lg:px-66 md:px-20 sm:px-30 pt-10 px-10 pb-10">
        <div className="flex sm:flex-row flex-col sm:mr-10 justify-center items-center ">
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
          <div className="sm:ml-10 flex flex-col sm:justify-start justify-center sm:items-start items-center">
            <h1 className="font-extrabold text-5xl sm:mt-0 mt-5">
              {product?.title}
            </h1>
            <p className="pt-3 font-light text-2xl">
              From ¥{Math.round(product?.price)} pint
            </p>
            <p className="pt-3 font-extralight">
              Order before 8pm for Next Day Delivery
            </p>
            <Button className="mt-5 flex flex-row">
              <BsCart4 className="mt-[2px] mr-2" />
              Add to Cart
            </Button>
            <div className="flex flex-row mt-5">
              <Image src="/veg.png" width={80} height={80} alt="Vegetarian" />
              <Image
                src="/return.png"
                width={80}
                height={80}
                alt="Vegetarian"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:justify-center sm:items-center">
          <div className="sm:pt-10">
            <Accordion
              item1={product?.description || "Description not available"}
              item2={"Ingredients: Milk (100%)"}
              item3={<ValuesTable />}
            />
            <h1 className="text-2xl font-bold mt-10">You might also like...</h1>
            <RelatedProducts
              id={product?.id || 1}
              categoryId={product?.category_id || 1}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
