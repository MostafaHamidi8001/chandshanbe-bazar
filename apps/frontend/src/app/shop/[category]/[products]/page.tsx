import React from "react";

type PageProps = {
  params: {
    category: string;
    products: string;
  };
};

export default function page({ params }: PageProps) {
  return (
    <main>
      <p>{params.category}</p>
      <p>{params.products}</p>
    </main>
  );
}
