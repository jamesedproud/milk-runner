import Link from "next/link";
import { useState, useEffect } from "react";

export function BreadcrumbBar({ path }: { path: string[] }) {
  const [categoryName, setCategoryName] = useState("");
  const [category_id, setCategoryID] = useState("");

  // just checked if a category is in the path as this needs to be handled a little differently
  useEffect(() => {
    const pathWithSlash = path.find((item) => item.includes("/"));

    if (pathWithSlash) {
      const [categoryId, name] = pathWithSlash.split("/");
      setCategoryName(name);
      setCategoryID(categoryId);
    }
  }, [path]); // Only update when path changes

  return (
    <header className="top-0 z-10 bg-[#e0f1f9] pt-3 w-screen h-[50px] pl-10">
      <nav>
        <ul className="flex items-center space-x-2">
          {path.map((item, index) => {
            return (
              <li key={index}>
                {index < path.length - 1 ? (
                  <>
                    {item === "Home" ? (
                      <Link
                        className="text-blue-900 hover:text-blue-700"
                        href="/"
                      >
                        {item}
                      </Link>
                    ) : item.includes("/") ? (
                      <Link
                        className="text-blue-900 hover:text-blue-700"
                        href={`/products/category/${category_id}`}
                      >
                        {categoryName}
                      </Link>
                    ) : (
                      <Link
                        className="text-blue-900 hover:text-blue-700"
                        href={`/${item.toLowerCase()}`}
                      >
                        {item}
                      </Link>
                    )}
                    <span className="ml-1"> &gt; </span>
                  </>
                ) : (
                  <span>{item}</span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
