import { ReactNode } from "react";

export type FieldType = "text" | "number" | "boolean" | "date" | "nested";
export type FilterType = "text" | "boolean" | "date" | "nested";
export type SortDirection = "asc" | "desc";

export interface ColumnConfig<T> {
  key: keyof T | string;
  header: string | ReactNode;
  render?: (value: unknown, item: T) => ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  filterType?: FilterType;
}

export interface FilterConfig {
  key: string;
  type: FilterType;
  label: string;
  nestedPath?: string;
}

export interface EditField<T> {
  key: keyof T | string;
  label: string;
  type: FieldType;
  nestedPath?: string;
  disabled?: (item: T) => boolean;
}

export interface EntityConfig<T> {
  columns: ColumnConfig<T>[];
  filters: FilterConfig[];
  editableFields: EditField<T>[];
}

export interface FilterValues {
  [key: string]: string | boolean | { from?: string; to?: string } | undefined;
}
