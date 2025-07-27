import React from "react";
import { PricePlansClient } from "./price-plans-client";
import { HomeButton } from "@/components/button-home";
import { PageWrapper } from "@/components/page-wrapper";

export default function PricePlansPage() {
  return (
    <PageWrapper>
      <HomeButton title={"Price Plans"} />
      <PricePlansClient />
    </PageWrapper>
  );
}
