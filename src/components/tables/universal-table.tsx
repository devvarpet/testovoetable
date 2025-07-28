import {
  ColumnConfig,
  FilterConfig,
  FilterValues,
  SortDirection,
} from "@/lib/types";
import { TableFilters } from "./table-filters";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";

interface UniversalTableProps<T extends Record<string, unknown>> {
  data: T[];
  columns: ColumnConfig<T>[];
  filters: FilterConfig[];
  onEdit: (item: T) => void;
  keyExtractor: (item: T) => string | number;
  sortKey: string;
  sortDirection: SortDirection;
  onSort: (key: string) => void;
  filterValues: FilterValues;
  onFilterChange: (key: string, value: FilterValues[string]) => void;
}

export function UniversalTable<T extends Record<string, unknown>>({
  data,
  columns,
  filters,
  onEdit,
  keyExtractor,
  sortKey,
  sortDirection,
  onSort,
  filterValues,
  onFilterChange,
}: UniversalTableProps<T>) {
  return (
    <div className="space-y-4">
      <TableFilters
        filters={filters}
        filterValues={filterValues}
        onFilterChange={onFilterChange}
      />

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow transition-shadow duration-300">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <TableHeader
              columns={columns}
              sortKey={sortKey}
              sortDirection={sortDirection}
              onSort={onSort}
            />
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item) => (
                <TableRow
                  key={keyExtractor(item)}
                  item={item}
                  columns={columns}
                  onEdit={onEdit}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
