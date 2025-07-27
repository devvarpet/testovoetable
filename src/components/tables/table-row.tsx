import React, { memo } from "react";
import { ColumnConfig } from "@/lib/types";
import { PencilIcon } from "@heroicons/react/24/outline";

interface TableRowProps<T> {
  item: T;
  columns: ColumnConfig<T>[];
  onEdit: (item: T) => void;
}

function TableRowComponent<T extends Record<string, unknown>>({
  item,
  columns,
  onEdit,
}: TableRowProps<T>) {
  return (
    <tr className="hover:bg-gray-50">
      {columns.map((column) => (
        <td
          key={String(column.key)}
          className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
        >
          {column.render
            ? column.render(item[column.key as keyof T], item)
            : String(item[column.key as keyof T] || "")}
        </td>
      ))}
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => onEdit(item)}
          className="text-blue-600 hover:text-blue-900 flex items-center space-x-1 cursor-pointer"
        >
          <PencilIcon className="w-4 h-4" />
          <span>Edit</span>
        </button>
      </td>
    </tr>
  );
}

export const TableRow = memo(TableRowComponent) as typeof TableRowComponent;
