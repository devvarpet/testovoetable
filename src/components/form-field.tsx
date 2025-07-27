import React from "react";
import { EditField } from "@/lib/types";
import { getNestedValue } from "@/lib/utils";

interface FormFieldProps<T extends Record<string, unknown>> {
  field: EditField<T>;
  value: unknown;
  item: T;
  formData: Partial<T>;
  onChange: (field: EditField<T>, value: unknown) => void;
}

export function FormField<T extends Record<string, unknown>>({
  field,
  value,
  item,
  onChange,
}: FormFieldProps<T>) {
  const isDisabled = field.disabled?.(item) || false;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {field.label}
      </label>

      {field.type === "text" && (
        <input
          type="text"
          disabled={isDisabled}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          value={String(value || "")}
          onChange={(e) => onChange(field, e.target.value)}
        />
      )}

      {field.type === "number" && (
        <input
          type="number"
          disabled={isDisabled}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          value={Number(value || 0)}
          onChange={(e) => onChange(field, parseInt(e.target.value, 10))}
        />
      )}

      {field.type === "boolean" && (
        <select
          disabled={isDisabled}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          value={Boolean(value) ? "true" : "false"}
          onChange={(e) => onChange(field, e.target.value === "true")}
        >
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      )}

      {field.type === "date" && (
        <input
          type="datetime-local"
          disabled={isDisabled}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          value={
            value ? new Date(String(value)).toISOString().slice(0, -1) : ""
          }
          onChange={(e) =>
            onChange(field, new Date(e.target.value).toISOString())
          }
        />
      )}
    </div>
  );
}
