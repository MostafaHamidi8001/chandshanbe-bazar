import BreadCrumb from "@/components/BreadCrumb";
import React from "react";



export default async function page({ params }: { params: { categories?: string[] } }) {
  
  return (
    <main className="">
      <BreadCrumb params={params} categoryOrigin={{category:'فروشگاه',routeLink:'/shop'}}/>
    </main>
  );
}
