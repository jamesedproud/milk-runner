import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="max-w-md bg-white rounded-lg my-4 mx-4 p-2 hover:shadow-lg  hover:shadow-gray-300 hover:cursor-pointer">
      <div>
        <Image
          className="rounded-lg"
          src={"/3.jpeg"}
          width={150}
          height={150}
          alt={product.title}
        />
      </div>
      <div className="text-center mt-2">
        <p className="font-bold">{product.title}</p>
        <h3>¥{Math.round(product.price)}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
