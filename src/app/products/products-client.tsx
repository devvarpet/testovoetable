"use client";
import { EntityTable } from "@/components/tables/entity-table";
import { createProductConfig } from "@/lib/entity-config-factory";
import { Product } from "@/lib/data";
import { useStore } from "@/lib/store";

export function ProductsClient() {
  const { updateProduct } = useStore();
  const config = createProductConfig();

  return (
    <EntityTable<Product>
      entityType="products"
      getKeyExtractor={(item) => item.id}
      getUpdateFunction={() => updateProduct}
      config={config}
    />
  );
}
