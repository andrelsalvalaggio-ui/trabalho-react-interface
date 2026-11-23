import { BadgeCheck, PackageCheck, ShieldCheck, ShoppingCart, Star, StarIcon, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import headset from "../../assets/headset.webp";
import { ProductDetail } from "./components/ProductDetails";
import { useCart } from "../../contexts/CartContext";
import { useTheme } from "../../contexts/ThemeContext";
import type { ShopCardProps } from "../../components/ShopCard";
import { getMockProduct, getProducts } from "../../data/products";

function getDefaultProduct(): ShopCardProps {
  const product = getMockProduct("fallback-headset-pulse-x");
  if (!product) throw new Error("Produto padrão não encontrado no catálogo.");
  return product;
}

function loadProduct(productId: string | null): ShopCardProps {
  try {
    if (productId) {
      const product = getProducts().find((item) => item.id === productId);
      if (product) return product;

      console.error(`O produto "${productId}" não foi encontrado.`);
      return getDefaultProduct();
    }

    const saved = localStorage.getItem("selectedProduct");
    return saved ? JSON.parse(saved) : getDefaultProduct();
  } catch (error) {
    console.error("Não foi possível carregar o produto selecionado.", error);
    return getDefaultProduct();
  }
}

export default function Produto() {
  const selectedProductId = new URLSearchParams(window.location.search).get("id");
  const { isCart, toggleCart } = useCart();
  const [product] = useState<ShopCardProps>(() => loadProduct(selectedProductId));
  const { darkMode } = useTheme();

  const productId = product.title;
  const cartItem = isCart(productId);

  const [favoritado, setFavorito] = useState(() => {
      const saved = localStorage.getItem('favoritado');
      return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
      localStorage.setItem('isLogado', JSON.stringify(favoritado));
  }, [favoritado]);

  return (
    <>
      <Header />

      <main className="mx-auto min-h-[85vh] w-full max-w-305 px-6 py-8 sm:py-12">
        <nav aria-label="Navegação estrutural" className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-primary">
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
              {product.discount && (
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <BadgeCheck className="size-4" aria-hidden="true" />
                  {product.discount} por tempo limitado
                </p>
              )}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button size="lg" className={`
                  h-11 w-full transition-all duration-300
                  ${cartItem ? " bg-background border border-primary text-primary " : ""}
                  ${cartItem ? darkMode
                    ? "hover:bg-card"
                    : darkMode
                      ? "hover:bg-on-primary-container"
                      : "hover:bg-purple-100": ""}
                `}
                onClick={() =>
                  toggleCart({
                    id: productId,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                  })
                }
              >
                <ShoppingCart aria-hidden="true" />
                {cartItem ? "Remover do carrinho" : "Adicionar ao carrinho"}
              </Button>

              <Button onClick={() => setFavorito(!favoritado)} variant="outline" size="lg" className="h-11 w-full" aria-pressed={favoritado}>
                <StarIcon aria-hidden="true" className={favoritado ? "fill-current text-primary" : ""} />
                {favoritado ? "Remover dos favoritos" : "Adicionar aos favoritos"}
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
            {product.details?.Titulo1 && product.details?.Desc1 && (
              <ProductDetail titulo={product.details.Titulo1} descricao={product.details.Desc1} />
            )}
            {product.details?.Titulo2 && product.details?.Desc2 && (
              <ProductDetail titulo={product.details.Titulo2} descricao={product.details.Desc2} />
            )}
            {product.details?.Titulo3 && product.details?.Desc3 && (
              <ProductDetail titulo={product.details.Titulo3} descricao={product.details.Desc3} border={false} />
            )}
            {product.details?.Titulo4 && product.details?.Desc4 && (
              <ProductDetail titulo={product.details.Titulo4} descricao={product.details.Desc4} border={false} />
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}