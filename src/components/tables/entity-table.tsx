"use client";
import React from "react";
import { TableWrapper } from "@/components/tables/table-wrapper";
import { useStore } from "@/lib/store";
import { EntityConfig } from "@/lib/types";
import { Page, PricePlan, Product } from "@/lib/data";

type EntityType = Page | PricePlan | Product;
type UpdateFunction<T> = (id: number, data: Partial<T>) => void;

interface EntityTableClientProps<T extends EntityType> {
  entityType: "pages" | "pricePlans" | "products";
  getKeyExtractor: (item: T) => number | string;
  getUpdateFunction: () => UpdateFunction<T>;
  config: EntityConfig<T>;
}

export function EntityTable<T extends EntityType>({
  entityType,
  getKeyExtractor,
  getUpdateFunction,
  config,
}: EntityTableClientProps<T>) {
  const store = useStore();

  const data = store[entityType] as T[];
  const updateFunction = getUpdateFunction();

  return (
    <TableWrapper
      data={data}
      config={config}
      onSave={updateFunction}
      keyExtractor={getKeyExtractor}
    />
  );
}
