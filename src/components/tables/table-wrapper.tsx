"use client";
import React, { useState, useMemo, useCallback } from "react";
import { UniversalTable } from "./universal-table";
import { EditModal } from "../modals/edit-modal";
import { EntityConfig, FilterValues } from "@/lib/types";
import { sortData, filterData } from "@/lib/utils";

interface TableWrapperProps<T extends Record<string, unknown>> {
  data: T[];
  config: EntityConfig<T>;
  onSave: (id: number, data: Partial<T>) => void;
  keyExtractor: (item: T) => string | number;
}

export function TableWrapper<T extends Record<string, unknown>>({
  data,
  config,
  onSave,
  keyExtractor,
}: TableWrapperProps<T>) {
  const [editingItem, setEditingItem] = useState<T | null>(null);
  const [sortKey, setSortKey] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filterValues, setFilterValues] = useState<FilterValues>({});

  const handleSort = useCallback(
    (key: string) => {
      if (sortKey === key) {
        setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      } else {
        setSortKey(key);
        setSortDirection("asc");
      }
    },
    [sortKey],
  );

  const handleFilterChange = useCallback(
    (key: string, value: FilterValues[string]) => {
      setFilterValues((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [],
  );

  const processedData = useMemo(() => {
    let result = filterData(data, filterValues);
    if (sortKey) {
      result = sortData(result, sortKey, sortDirection);
    }
    return result;
  }, [data, filterValues, sortKey, sortDirection]);

  const handleSave = useCallback(
    (formData: Partial<T>) => {
      if (editingItem && "id" in editingItem) {
        onSave(editingItem.id as number, formData);
      }
    },
    [editingItem, onSave],
  );

  return (
    <>
      <UniversalTable
        data={processedData}
        columns={config.columns}
        filters={config.filters}
        onEdit={setEditingItem}
        keyExtractor={keyExtractor}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSort={handleSort}
        filterValues={filterValues}
        onFilterChange={handleFilterChange}
      />

      <EditModal
        isOpen={!!editingItem}
        onClose={() => setEditingItem(null)}
        item={editingItem}
        fields={config.editableFields}
        onSave={handleSave}
      />
    </>
  );
}
