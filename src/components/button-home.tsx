import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

interface HomeButtonProps {
  title: string;
}

export const HomeButton = ({ title }: HomeButtonProps) => {
  return (
    <div className="mb-6">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
    </div>
  );
};
