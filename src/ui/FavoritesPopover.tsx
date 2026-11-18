import { Star, Trash2 } from "lucide-react";
import { useFavorites } from "../contexts/FavoritesContext";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export function FavoritesPopover() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="relative cursor-pointer"
            aria-label={`Favoritos (${favorites.length})`}
          />
        }
      >
        <Star className="size-5" aria-hidden="true" />
        {favorites.length > 0 && (
          <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            {favorites.length}
          </span>
        )}
      </PopoverTrigger>

      <PopoverContent align="end" className="w-80">
        <h2 className="mb-3 text-sm font-semibold">Meus favoritos</h2>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-6 text-center text-sm text-muted-foreground">
            <Star className="size-6" aria-hidden="true" />
            Você ainda não favoritou nenhum produto.
          </div>
        ) : (
          <ul className="flex max-h-80 flex-col gap-3 overflow-y-auto">
            {favorites.map((item) => (
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
                  onClick={() => removeFavorite(item.id)}
                  aria-label={`Remover ${item.title} dos favoritos`}
                >
                  <Trash2 className="size-4" aria-hidden="true" />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </PopoverContent>
    </Popover>
  );
}
