import React from "react";
import { ProductsClient } from "./products-client";
import { HomeButton } from "@/components/button-home";
import { PageWrapper } from "@/components/page-wrapper";

export default function ProductsPage() {
  return (
    <PageWrapper>
      <HomeButton title={"Products"} />
      <ProductsClient />
    </PageWrapper>
  );
}
