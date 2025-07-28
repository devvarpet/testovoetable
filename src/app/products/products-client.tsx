"use client";
import { EntityTable } from "@/components/tables/entity-table";
import { createProductConfig } from "@/lib/entity-config-factory";
import { Product } from "@/lib/data";
import { useStore } from "@/lib/store";
import { useMemo } from "react";

export function ProductsClient() {
  const { updateProduct } = useStore();
  const config = useMemo(() => createProductConfig(), []);

  return (
    <EntityTable<Product>
      entityType="products"
      getKeyExtractor={(item) => item.id}
      getUpdateFunction={() => updateProduct}
      config={config}
    />
  );
}
