import { EntityConfig } from "@/lib/types";
import { Page, PricePlan, Product } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import React from "react";

export const createPageConfig = (): EntityConfig<Page> => ({
  columns: [
    {
      key: "id",
      header: "ID",
      sortable: true,
    },
    {
      key: "title",
      header: "Title",
      sortable: true,
      filterable: true,
    },
    {
      key: "active",
      header: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            value ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {value ? "Active" : "Inactive"}
        </span>
      ),
      sortable: true,
    },
    {
      key: "updatedAt",
      header: "Updated",
      render: (value) => formatDate(String(value)),
      sortable: true,
    },
    {
      key: "publishedAt",
      header: "Published",
      render: (value) => formatDate(String(value)),
      sortable: true,
    },
  ],
  filters: [
    {
      key: "title",
      type: "text",
      label: "Title",
    },
    {
      key: "active",
      type: "boolean",
      label: "Status",
    },
    {
      key: "updatedAt",
      type: "date",
      label: "Updated Date",
    },
    {
      key: "publishedAt",
      type: "date",
      label: "Published Date",
    },
  ],
  editableFields: [
    {
      key: "title",
      label: "Title",
      type: "text",
      disabled: (item) => !item.active,
    },
    {
      key: "active",
      label: "Status",
      type: "boolean",
    },
    {
      key: "updatedAt",
      label: "Updated At",
      type: "date",
    },
    {
      key: "publishedAt",
      label: "Published At",
      type: "date",
    },
  ],
});

export const createPricePlanConfig = (): EntityConfig<PricePlan> => ({
  columns: [
    {
      key: "id",
      header: "ID",
      sortable: true,
    },
    {
      key: "description",
      header: "Description",
      sortable: true,
      filterable: true,
    },
    {
      key: "active",
      header: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            value ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {value ? "Active" : "Inactive"}
        </span>
      ),
      sortable: true,
    },
    {
      key: "createdAt",
      header: "Created",
      render: (value) => formatDate(String(value)),
      sortable: true,
    },
    {
      key: "removedAt",
      header: "Removed",
      render: (value) => formatDate(String(value)),
      sortable: true,
    },
  ],
  filters: [
    {
      key: "description",
      type: "text",
      label: "Description",
    },
    {
      key: "active",
      type: "boolean",
      label: "Status",
    },
    {
      key: "createdAt",
      type: "date",
      label: "Created Date",
    },
    {
      key: "removedAt",
      type: "date",
      label: "Removed Date",
    },
  ],
  editableFields: [
    {
      key: "description",
      label: "Description",
      type: "text",
    },
    {
      key: "active",
      label: "Status",
      type: "boolean",
    },
    {
      key: "createdAt",
      label: "Created At",
      type: "date",
    },
    {
      key: "removedAt",
      label: "Removed At",
      type: "date",
    },
  ],
});

export const createProductConfig = (): EntityConfig<Product> => ({
  columns: [
    {
      key: "id",
      header: "ID",
      sortable: true,
    },
    {
      key: "name",
      header: "Name",
      sortable: true,
      filterable: true,
    },
    {
      key: "options",
      header: "Size / Amount",
      render: (value) => {
        const options = value as Product["options"];
        return `${options.size} (${options.amount})`;
      },
    },
    {
      key: "active",
      header: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            value ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {value ? "Active" : "Inactive"}
        </span>
      ),
      sortable: true,
    },
    {
      key: "createdAt",
      header: "Created",
      render: (value) => formatDate(String(value)),
      sortable: true,
    },
  ],
  filters: [
    {
      key: "name",
      type: "text",
      label: "Name",
    },
    {
      key: "active",
      type: "boolean",
      label: "Status",
    },
    {
      key: "options.size",
      type: "text",
      label: "Size",
      nestedPath: "options.size",
    },
    {
      key: "createdAt",
      type: "date",
      label: "Created Date",
    },
  ],
  editableFields: [
    {
      key: "name",
      label: "Name",
      type: "text",
      disabled: (item) => !item.active,
    },
    {
      key: "options.size",
      label: "Size",
      type: "text",
      nestedPath: "options.size",
    },
    {
      key: "options.amount",
      label: "Amount",
      type: "number",
      nestedPath: "options.amount",
    },
    {
      key: "active",
      label: "Status",
      type: "boolean",
    },
  ],
});
