"use client";
import { EntityTable } from "@/components/tables/entity-table";
import { createPageConfig } from "@/lib/entity-config-factory";
import { Page } from "@/lib/data";
import { useStore } from "@/lib/store";
import { useMemo } from "react";

export function PagesClient() {
  const { updatePage } = useStore();
  const config = useMemo(() => createPageConfig(), []);

  return (
    <EntityTable<Page>
      entityType="pages"
      getKeyExtractor={(item) => item.id}
      getUpdateFunction={() => updatePage}
      config={config}
    />
  );
}
