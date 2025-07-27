import React, { memo } from "react";
import { ColumnConfig, SortDirection } from "@/lib/types";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

interface TableHeaderProps<T> {
  columns: ColumnConfig<T>[];
  sortKey: keyof T | "";
  sortDirection: SortDirection;
  onSort: (key: string) => void;
}

function TableHeaderComponent<T extends Record<string, unknown>>({
  columns,
  sortKey,
  sortDirection,
  onSort,
}: TableHeaderProps<T>) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column) => (
          <th
            key={String(column.key)}
            className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
              column.sortable ? "cursor-pointer hover:bg-gray-100" : ""
            }`}
            onClick={
              column.sortable ? () => onSort(String(column.key)) : undefined
            }
          >
            <div className="flex items-center space-x-1">
              <span>{column.header}</span>
              {column.sortable &&
                sortKey === String(column.key) &&
                (sortDirection === "asc" ? (
                  <ChevronUpIcon className="w-4 h-4" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4" />
                ))}
            </div>
          </th>
        ))}
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
  );
}

export const TableHeader = memo(
  TableHeaderComponent,
) as typeof TableHeaderComponent;
