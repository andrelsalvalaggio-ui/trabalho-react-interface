import { ShoppingCartIcon, Trash2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { useTheme } from "../contexts/ThemeContext";

export function CartPopover() {
  const { cart, removeCart } = useCart();
  const { darkMode } = useTheme();

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="relative cursor-pointer pr-1"
            aria-label={`Favoritos (${cart.length})`}
          />
        }
      >
        <ShoppingCartIcon aria-label="Carrinho" />
        {cart.length > 0 && (
          <span className="absolute right-0 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            {cart.length}
          </span>
        )}
      </PopoverTrigger>

      <PopoverContent align="end" className="w-80">
        <h2 className="mb-3 text-sm font-semibold">Meu Carrinho</h2>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-6 text-center text-sm text-muted-foreground">
            Você ainda não adicionou nenhum produto ao carrinho.
          </div>
        ) : (
          <ul className="flex max-h-80 flex-col gap-3 overflow-y-auto">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="size-14 shrink-0 rounded-md border border-border bg-card object-contain"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">R$ {item.price}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer"
                  onClick={() => removeCart(item.id)}
                  aria-label={`Remover ${item.title} dos favoritos`}
                >
                  <Trash2 className="size-4" aria-hidden="true" />
                </Button>
              </li>
            ))}
          </ul>
        )}
        <Button size="lg" className={`
            h-11 w-full mt-5 transition-all duration-300
            ${darkMode
                ? "hover:bg-on-primary-container"
                : ""}
          `}
        >
          <ShoppingCartIcon aria-hidden="true" />
          Continuar com a compra
        </Button>
      </PopoverContent>
    </Popover>
  );
}
