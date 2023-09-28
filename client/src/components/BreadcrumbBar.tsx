import Link from "next/link";

export function BreadcrumbBar({ path }: { path: string[] }) {
  return (
    <header className="top-0 z-10 bg-[#e0f1f9] pt-3 w-screen h-[50px] pl-10">
      <nav>
        <ul className="flex items-center space-x-2">
          {path.map((item, index) => (
            <li key={index}>
              {index < path.length - 1 ? (
                <>
                  {item === "Home" ? (
                    <Link className="text-blue-900" href="/">
                      {item}
                    </Link>
                  ) : (
                    <Link
                      className="text-blue-900"
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
          ))}
        </ul>
      </nav>
    </header>
  );
}
