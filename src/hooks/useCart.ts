import { CartItem } from "@/types";
import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "portfolio-cart";

function loadFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // silently fail
  }
}

interface UseCartReturn {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  isInCart: (id: string) => boolean;
  clear: () => void;
  count: number;
}

export function useCart(): UseCartReturn {
  const [items, setItems] = useState<CartItem[]>(loadFromStorage);

  useEffect(() => {
    saveToStorage(items);
  }, [items]);

  const add = useCallback((item: CartItem) => {
    setItems((prev) =>
      prev.find((i) => i.id === item.id) ? prev : [...prev, item],
    );
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const isInCart = useCallback(
    (id: string) => items.some((i) => i.id === id),
    [items],
  );

  const clear = useCallback(() => setItems([]), []);

  return { items, add, remove, isInCart, clear, count: items.length };
}
