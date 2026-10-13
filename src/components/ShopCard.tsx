
import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle
} from "../ui/card";

interface ShopCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  className?: string;
  oldPrice?: string;
  discount?: string;
}

export function ShopCard({
  title,
  description,
  price,
  image,
  className = "",
  oldPrice,
  discount,
}: ShopCardProps) {
  return (
    <Card className={`relative w-full sm:w-58 md:w-65 lg:w-60 xl:w-55 h-full transition-all duration-300 hover:brightness-90 hover:shadow-lg hover:-translate-y-1 ${className}`}>

      {discount && (
        <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
          {discount}
        </span>
      )}

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="h-full">
        <img
          src={image}
          alt={title}
          className="mx-auto h-56 w-56 object-contain"
        />
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-1">
        {oldPrice && (
          <p className="text-sm text-gray-500 line-through">
            R$ {oldPrice}
          </p>
        )}

        <p className="font-semibold text-lg">
          R$ {price}
        </p>
      </CardFooter>
    </Card>
  );
}
