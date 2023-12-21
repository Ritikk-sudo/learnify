import React from "react";
import Test from "@/app/components/Test";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      {/* @ts-ignore */}

      <Test params={params} />
    </div>
  );
}
