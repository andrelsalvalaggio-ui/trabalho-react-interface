
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle
} from "../ui/card";

interface ShopCardProps {
  marca?: string;
  title: string;
  description: string;
  price: string;
  image: string;
  avaliacao?: number;
  className?: string;
  oldPrice?: string;
  discount?: string;
}

export function ShopCard({
  marca,
  title,
  description,
  price,
  image,
  avaliacao,
  className = "",
  oldPrice,
  discount,
}: ShopCardProps) {
  const navigate = useNavigate();

  function handleClick() {
    const product = {
      marca,
      title,
      description,
      price,
      image,
      avaliacao,
      oldPrice,
      discount,
    };

    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/produto");
  }

  return (
    <Card
      id="shop-card"
      onClick={handleClick}
      className={`cursor-pointer bg-card relative w-full h-full
      transition-all duration-300 hover:shadow-[0_0_24px_-4px_rgb(139,47,201,0.45)] hover:-translate-y-1 ${className}`}
    >
      {discount && (
        <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-md">
          {discount}
        </span>
      )}

      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          {marca && (
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {marca}
            </span>
          )}

          {avaliacao !== undefined && (
            <div className="flex items-center gap-1 text-sm">
              <Star
                size={15}
                className="fill-purple-400 text-purple-400"
              />
              <span className="font-semibold">
                {avaliacao.toFixed(1)}
              </span>
            </div>
          )}
        </div>

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
