import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export interface CartProduct {
  id: string;
  title: string;
  price: string;
  image: string;
}

interface CartContextData {
  cart: CartProduct[];
  isCart: (id: string) => boolean;
  toggleCart: (product: CartProduct) => void;
  removeCart: (id: string) => void;
}

const STORAGE_KEY = "cart";

const CartContext = createContext<CartContextData | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProduct[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const isCart = (id: string) => cart.some((f) => f.id === id);

  const removeCart = (id: string) =>
    setCart((prev) => prev.filter((f) => f.id !== id));

  const toggleCart = (product: CartProduct) =>
    setCart((prev) =>
      prev.some((f) => f.id === product.id)
        ? prev.filter((f) => f.id !== product.id)
        : [...prev, product]
    );

  return (
    <CartContext.Provider value={{ cart, isCart, toggleCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
}