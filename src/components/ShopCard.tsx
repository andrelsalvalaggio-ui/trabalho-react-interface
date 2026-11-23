
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle
} from "../ui/card";

export interface ShopCardProps {
  id?: string;
  marca?: string;
  title: string;
  description: string;
  price: string;
  image: string;
  categoria?: string;
  categorias?: string[];
  isMock?: boolean;
  avaliacao?: number;
  className?: string;
  oldPrice?: string;
  discount?: string;
  details?: {
    Titulo1?: string;
    Desc1?: string;
    Titulo2?: string;
    Desc2?: string;
    Titulo3?: string;
    Desc3?: string;
    Titulo4?: string;
    Desc4?: string;
  };
}

export function ShopCard({
  marca,
  title,
  description,
  price,
  image,
  id,
  categoria,
  categorias,
  isMock,
  avaliacao,
  className = "",
  oldPrice,
  discount,
  details,
} : ShopCardProps) {
  const categoriasDoProduto = categorias?.length
    ? categorias
    : categoria
      ? [categoria]
      : [];

  function handleClick() {
    const product = {
      id,
      marca,
      title,
      description,
      price,
      image,
      categoria,
      categorias,
      isMock,
      avaliacao,
      oldPrice,
      discount,
      details
    };

    localStorage.setItem("selectedProduct", JSON.stringify(product));
  }

  return (
    <Link
      to={id ? `/produto?id=${encodeURIComponent(id)}` : "/produto"}
      onClick={handleClick}
      className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
      aria-label={`Ver detalhes de ${title}`}
    >
    <Card
      id="shop-card"
      className={`cursor-pointer bg-card relative w-full h-full
      transition-all duration-300 hover:shadow-[0_0_14px_-4px_rgb(139,47,201,0.45)] hover:-translate-y-1 ${className}`}
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
          width="224"
          height="224"
          loading={id === "recent-fone-bluetooth" ? "eager" : "lazy"}
          fetchPriority={id === "recent-fone-bluetooth" ? "high" : "auto"}
          decoding="async"
          className="mx-auto h-36 w-full max-w-36 object-contain sm:h-56 sm:w-56 sm:max-w-none"
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
        {categoriasDoProduto.length > 0 && (
          <p className="text-xs text-muted-foreground">
            {categoriasDoProduto.join(" • ")}
          </p>
        )}
      </CardFooter>
    </Card>
    </Link>
  );
}
