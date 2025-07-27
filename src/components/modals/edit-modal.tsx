"use client";
import React, { useState, useEffect } from "react";
import { Modal } from "./modal";
import { FormField } from "../form-field";
import { getNestedValue, setNestedValue } from "@/lib/utils";
import { EditField } from "@/lib/types";

interface EditModalProps<T extends Record<string, unknown>> {
  isOpen: boolean;
  onClose: () => void;
  item: T | null;
  fields: EditField<T>[];
  onSave: (data: Partial<T>) => void;
  title?: string;
}

export function EditModal<T extends Record<string, unknown>>({
  isOpen,
  onClose,
  item,
  fields,
  onSave,
  title = "Edit Item",
}: EditModalProps<T>) {
  const [formData, setFormData] = useState<Partial<T>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (item) {
      setFormData({ ...item });
    }
  }, [item]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      onSave(formData);
      onClose();
    } catch (error) {
      console.error("Error saving:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (field: EditField<T>, value: unknown) => {
    setFormData((prev) => {
      const updated = { ...prev };
      if (field.nestedPath) {
        setNestedValue(
          updated as Record<string, unknown>,
          field.nestedPath,
          value,
        );
      } else {
        (updated as Record<string, unknown>)[String(field.key)] = value;
      }
      return updated;
    });
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  if (!item) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={title}
      size="md"
      closeOnBackdropClick={!isSubmitting}
      closeOnEscape={!isSubmitting}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => {
          const value = field.nestedPath
            ? getNestedValue(
                formData as Record<string, unknown>,
                field.nestedPath,
              )
            : formData[field.key as keyof T];

          return (
            <FormField
              key={String(field.key)}
              field={field}
              value={value}
              item={item}
              formData={formData}
              onChange={handleFieldChange}
            />
          );
        })}

        <div className="flex justify-end space-x-3 pt-6">
          <button
            type="button"
            onClick={handleClose}
            disabled={isSubmitting}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
