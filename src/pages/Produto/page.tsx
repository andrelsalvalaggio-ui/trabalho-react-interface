import { BadgeCheck, PackageCheck, ShieldCheck, ShoppingCart, Star, StarIcon, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import headset from "../../assets/headset.webp";
import { ProductDetail } from "./components/ProductDetails";
import { useFavorites } from "../../contexts/FavoritesContext";

interface Product {
  marca?: string;
  title: string;
  description: string;
  price: string;
  image: string;
  avaliacao?: number;
  oldPrice?: string;
  discount?: string;
}

const defaultProduct: Product = {
  marca: "HyperX",
  title: "Headset Gamer Pulse X",
  description:
    "Imersão e conforto para acompanhar cada partida. Som potente, microfone ajustável e conexão simples para o seu setup.",
  price: "119,90",
  image: headset,
  avaliacao: 4.8,
  oldPrice: "159,90",
  discount: "25% OFF",
};

function loadProduct(): Product {
  try {
    const saved = localStorage.getItem("selectedProduct");
    return saved ? JSON.parse(saved) : defaultProduct;
  } catch {
    return defaultProduct;
  }
}

export default function Produto() {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [product] = useState<Product>(loadProduct);

  // Se seus produtos tiverem um id real, use-o aqui no lugar do título
  const productId = product.title;
  const favorito = isFavorite(productId);

  return (
    <>
      <Header />

      <main className="mx-auto min-h-[85vh] w-full max-w-305 px-6 py-8 sm:py-12">
        <nav aria-label="Navegação estrutural" className="mb-8 text-sm text-muted-foreground">
          <Link to="/inicio" className="transition-colors hover:text-primary">
            Início
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.title}</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="relative flex min-h-90 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-8 sm:min-h-120">
            <span className="absolute left-5 top-5 rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Mais vendido
            </span>
            <img
              src={product.image || headset}
              alt={product.title}
              className="max-h-105 w-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{product.title}</h1>
            <p className="mt-3 text-muted-foreground">{product.description}</p>

            <div className="mt-5 flex items-center gap-2">
              <span className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className={`size-4 ${index < Math.round(product.avaliacao ?? 0)
                        ? "fill-current"
                        : "opacity-30"
                      }`}
                    aria-hidden="true"
                  />
                ))}
              </span>

              <span className="text-sm font-medium">
                {(product.avaliacao ?? 0).toFixed(1).replace(".", ",")}
              </span>

              <span className="text-sm text-muted-foreground">
                (128 avaliações)
              </span>
            </div>

            <div className="mt-7 border-y border-border py-6">
              {product.oldPrice && (
                <p className="text-sm text-muted-foreground line-through">R$ {product.oldPrice}</p>
              )}
              <p className="mt-1 text-4xl font-bold tracking-tight">R$ {product.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">ou 3x de R$ 39,97 sem juros</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
                <BadgeCheck className="size-4" aria-hidden="true" />
                25% OFF por tempo limitado
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button size="lg" className="h-11 w-full transition-all duration-300 hover:bg-on-primary-container">
                <ShoppingCart aria-hidden="true" />
                Adicionar ao carrinho
              </Button>

              <Button
                onClick={() =>
                  toggleFavorite({
                    id: productId,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                  })
                }
                variant="outline"
                size="lg"
                className="h-11 w-full"
                aria-pressed={favorito}
              >
                <StarIcon aria-hidden="true" className={favorito ? "fill-current text-primary" : ""} />
                {favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              </Button>
            </div>

            <div className="mt-7 grid gap-4 rounded-xl border border-border bg-card p-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Truck className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm">Frete para todo o Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm">Compra protegida</span>
              </div>
              <div className="flex items-center gap-3">
                <PackageCheck className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm">Envio em até 3 dias</span>
              </div>
            </div>
          </div>
        </section>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-xl">Detalhes do produto</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-x-12 gap-y-5 sm:grid-cols-2">
            <ProductDetail titulo="Conexão" descricao="P2, cabo de 2 m" />
            <ProductDetail titulo="Compatibilidade" descricao="50 mm" />
            <ProductDetail titulo="Microfone" descricao="Ajustável com redução de ruído" />
            <ProductDetail titulo="Peso" descricao="350 g" />
            <ProductDetail titulo="Material" descricao="Plástico e espuma" />
            <ProductDetail titulo="Garantia" descricao="12 meses" />
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}