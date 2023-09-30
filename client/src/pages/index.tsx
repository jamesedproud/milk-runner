import Image from "next/image";
import { Signika } from "next/font/google";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { TopNav } from "@/components/TopNav";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import { Button } from "@/components/Button";
import { TopBar } from "@/components/TopBar";

const signika = Signika({ subsets: ["latin"], weight: ["400", "500", "600"] });

const baseURL = "http://127.0.0.1:8080/";
const route = "products";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export default function Home() {
  return (
    <>
      <TopBar />
      <TopNav />
      <div className="bg-[#f0f5f8] h-screen pl-10 pr-10 pt-10">Home</div>
    </>
  );
}
