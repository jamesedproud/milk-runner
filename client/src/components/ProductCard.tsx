import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  imgpath: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-1 hover:shadow-lg hover:shadow-gray-300 hover:cursor-pointer">
      <div className="mb-2 p-1 flex justify-center items-center">
        <Image
          className="rounded-2xl"
          src={"/productImages/" + product.imgpath}
          width={170}
          height={200}
          alt={product.title}
        />
      </div>
      <div className="text-center">
        <p className="font-bold">{product.title}</p>
        <h3 className="font-light">¥{Math.round(product.price)}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
