"use client";
import { EntityTable } from "@/components/tables/entity-table";
import { createPricePlanConfig } from "@/lib/entity-config-factory";
import { PricePlan } from "@/lib/data";
import { useStore } from "@/lib/store";

export function PricePlansClient() {
  const { updatePricePlan } = useStore();
  const config = createPricePlanConfig();

  return (
    <EntityTable<PricePlan>
      entityType="pricePlans"
      getKeyExtractor={(item) => item.id}
      getUpdateFunction={() => updatePricePlan}
      config={config}
    />
  );
}
