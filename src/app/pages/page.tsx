import React from "react";
import { PagesClient } from "./pages-client";
import { HomeButton } from "@/components/button-home";
import { PageWrapper } from "@/components/page-wrapper";

export default function PagesPage() {
  return (
    <PageWrapper>
      <HomeButton title={"Pages"} />
      <PagesClient />
    </PageWrapper>
  );
}
