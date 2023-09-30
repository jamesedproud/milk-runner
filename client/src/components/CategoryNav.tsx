import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Define a list of categories
const categories = [
  { name: "Milk", imageSrc: "/productImages/milk.jpeg", id: 1 },
  { name: "Milkshakes", imageSrc: "/productImages/milkshake.jpeg", id: 2 },
  { name: "Eggs", imageSrc: "/productImages/eggs.jpeg", id: 3 },
  // Add more categories as needed
];

export default function CategoryNav() {
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <>
      <div className="flex-initial w-64">
        <h1 className="text-2xl font-bold">Categories</h1>
        <ul className="pt-2">
          {categories.map((category) => (
            <li
              key={category.name}
              className={`rounded-2xl p-1 my-1 ${
                currentRoute.includes(`/products/category/${category.id}`)
                  ? "bg-white"
                  : ""
              }`}
            >
              <Link href={`/products/category/${category.id}`}>
                <span className="group flex items-center gap-4">
                  <Image
                    src={category.imageSrc}
                    alt={category.name}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  ></Image>
                  <span className="font-bold group-hover:text-blue-400">
                    {category.name}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
