import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { useCart } from "../../contexts/CartContext";
import { Button, buttonVariants } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

function parsePrice(price: string) {
  return Number(price.replace(/\./g, "").replace(",", "."));
}

function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function Carrinho() {
  const { cart, removeCart } = useCart();
  const total = cart.reduce((sum, item) => sum + parsePrice(item.price), 0);

  return (
    <>
      <Header />
      <main className="mx-auto min-h-[85vh] w-full max-w-305 px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Meu carrinho</h1>

        {cart.length === 0 ? (
          <div className="mt-8 flex flex-col items-center rounded-xl border border-dashed p-8 text-center sm:p-12">
            <p className="text-lg font-semibold">Seu carrinho está vazio</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Adicione produtos para vê-los aqui.
            </p>
            <Link to="/inicio" className={buttonVariants({ className: "mt-5" })}>
              Continuar comprando
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_20rem]">
            <ul className="flex flex-col gap-3">
              {cart.map((item) => (
                <li key={item.id}>
                  <Card>
                    <CardContent className="flex items-center gap-4 p-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-20 shrink-0 rounded-md bg-muted/30 object-contain p-2 sm:size-24"
                      />
                      <div className="min-w-0 flex-1">
                        <h2 className="line-clamp-2 font-semibold">{item.title}</h2>
                        <p className="mt-1 text-sm text-muted-foreground">R$ {item.price}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="cursor-pointer"
                        aria-label={`Remover ${item.title} do carrinho`}
                        onClick={() => removeCart(item.id)}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>

            <Card className="h-fit">
              <CardContent className="p-5">
                <h2 className="text-lg font-semibold">Resumo do pedido</h2>
                <div className="mt-4 flex justify-between border-t border-border pt-4 font-semibold">
                  <span>Total</span>
                  <span>R$ {formatPrice(total)}</span>
                </div>
                <Button className="mt-5 w-full" disabled>
                  Finalizar compra
                </Button>
                <Link to="/inicio" className={buttonVariants({ variant: "outline", className: "mt-2 w-full" })}>
                  Continuar comprando
                </Link>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
