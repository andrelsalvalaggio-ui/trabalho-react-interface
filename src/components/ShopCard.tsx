
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
    <Card className={`cursor-pointer bg-card relative w-full h-full transition-all duration-300 hover:shadow-hardware-hover hover:-translate-y-1 ${className}`}>

      {discount && (
        <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-md">
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
          <p className="text-sm text-muted-foreground line-through">
            R$ {oldPrice}
          </p>
        )}

        <p className="font-semibold text-card-foreground text-lg">
          R$ {price}
        </p>
      </CardFooter>
    </Card>
  );
}
