import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export interface FavoriteProduct {
  id: string;
  title: string;
  price: string;
  image: string;
}

interface FavoritesContextData {
  favorites: FavoriteProduct[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (product: FavoriteProduct) => void;
  removeFavorite: (id: string) => void;
}

const STORAGE_KEY = "favorites";

const FavoritesContext = createContext<FavoritesContextData | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id: string) => favorites.some((f) => f.id === id);

  const removeFavorite = (id: string) =>
    setFavorites((prev) => prev.filter((f) => f.id !== id));

  const toggleFavorite = (product: FavoriteProduct) =>
    setFavorites((prev) =>
      prev.some((f) => f.id === product.id)
        ? prev.filter((f) => f.id !== product.id)
        : [...prev, product]
    );

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites deve ser usado dentro de FavoritesProvider");
  return ctx;
}