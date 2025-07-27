import { FilterValues, SortDirection } from "./types";

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString();
}

export function getNestedValue<T extends Record<string, unknown>>(
  obj: T,
  path: string,
): unknown {
  return path.split(".").reduce((current: unknown, key: string) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function setNestedValue<T extends Record<string, unknown>>(
  obj: T,
  path: string,
  value: unknown,
): T {
  const keys = path.split(".");
  const lastKey = keys.pop();
  if (!lastKey) return obj;

  const target = keys.reduce(
    (current: Record<string, unknown>, key: string) => {
      if (!current[key] || typeof current[key] !== "object") {
        current[key] = {};
      }
      return current[key] as Record<string, unknown>;
    },
    obj as Record<string, unknown>,
  );

  target[lastKey] = value;
  return obj;
}

export function sortData<T extends Record<string, unknown>>(
  data: T[],
  sortKey: string,
  sortDirection: SortDirection,
): T[] {
  return [...data].sort((a, b) => {
    const aValue = getNestedValue(a, sortKey);
    const bValue = getNestedValue(b, sortKey);

    if (aValue === bValue) return 0;

    const comparison = aValue! < bValue! ? -1 : 1;
    return sortDirection === "asc" ? comparison : -comparison;
  });
}

export function filterData<T extends Record<string, unknown>>(
  data: T[],
  filters: FilterValues,
): T[] {
  return data.filter((item) => {
    return Object.entries(filters).every(([key, filterValue]) => {
      if (!filterValue && filterValue !== false) return true;

      const itemValue = getNestedValue(item, key);

      if (typeof filterValue === "string") {
        return String(itemValue)
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      }

      if (typeof filterValue === "boolean") {
        return itemValue === filterValue;
      }

      if (
        typeof filterValue === "object" &&
        filterValue !== null &&
        "from" in filterValue
      ) {
        const date = new Date(itemValue as string);
        const from = filterValue.from ? new Date(filterValue.from) : null;
        const to = filterValue.to ? new Date(filterValue.to) : null;

        if (from && date < from) return false;
        return !(to && date > to);
      }

      return true;
    });
  });
}
