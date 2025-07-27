import React from "react";
import { FilterConfig, FilterValues } from "@/lib/types";

interface TableFiltersProps {
  filters: FilterConfig[];
  filterValues: FilterValues;
  onFilterChange: (key: string, value: FilterValues[string]) => void;
}

export function TableFilters({
  filters,
  filterValues,
  onFilterChange,
}: TableFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow transition-shadow duration-300 p-4">
      <h3 className="text-lg font-semibold mb-3">Filters</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filters.map((filter) => (
          <div key={filter.key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {filter.label}
            </label>
            {filter.type === "text" && (
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={
                  (filterValues[filter.nestedPath || filter.key] as string) ||
                  ""
                }
                onChange={(e) =>
                  onFilterChange(
                    filter.nestedPath || filter.key,
                    e.target.value,
                  )
                }
              />
            )}
            {filter.type === "boolean" && (
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                value={
                  filterValues[filter.key] === undefined
                    ? ""
                    : String(filterValues[filter.key])
                }
                onChange={(e) =>
                  onFilterChange(
                    filter.key,
                    e.target.value === ""
                      ? undefined
                      : e.target.value === "true",
                  )
                }
              >
                <option value="">All</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            )}
            {filter.type === "date" && (
              <div className="flex space-x-2">
                <input
                  type="date"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={
                    (filterValues[filter.key] as { from?: string })?.from || ""
                  }
                  onChange={(e) =>
                    onFilterChange(filter.key, {
                      ...((filterValues[filter.key] as {
                        from?: string;
                        to?: string;
                      }) || {}),
                      from: e.target.value,
                    })
                  }
                />
                <input
                  type="date"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={
                    (filterValues[filter.key] as { to?: string })?.to || ""
                  }
                  onChange={(e) =>
                    onFilterChange(filter.key, {
                      ...((filterValues[filter.key] as {
                        from?: string;
                        to?: string;
                      }) || {}),
                      to: e.target.value,
                    })
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
