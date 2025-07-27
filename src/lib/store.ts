"use client";
import { create } from "zustand";
import {
  Product,
  PricePlan,
  Page,
  products as initialProducts,
  pricePlans as initialPricePlans,
  pages as initialPages,
} from "./data";

interface Store {
  products: Product[];
  pricePlans: PricePlan[];
  pages: Page[];
  updateProduct: (id: number, data: Partial<Product>) => void;
  updatePricePlan: (id: number, data: Partial<PricePlan>) => void;
  updatePage: (id: number, data: Partial<Page>) => void;
}

export const useStore = create<Store>((set) => ({
  products: initialProducts,
  pricePlans: initialPricePlans,
  pages: initialPages,
  updateProduct: (id, data) =>
    set((state) => ({
      products: state.products.map((item) =>
        item.id === id ? { ...item, ...data } : item,
      ),
    })),
  updatePricePlan: (id, data) =>
    set((state) => ({
      pricePlans: state.pricePlans.map((item) =>
        item.id === id ? { ...item, ...data } : item,
      ),
    })),
  updatePage: (id, data) =>
    set((state) => ({
      pages: state.pages.map((item) =>
        item.id === id ? { ...item, ...data } : item,
      ),
    })),
}));
