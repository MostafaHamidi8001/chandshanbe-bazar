import Carousel from "@/components/home/Carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";



function page() {
  return (
    <main className="my-14">
      <h1 className="text-center text-xl font-bold mb-20">فروشگاه چندشنبه بازار خرید مطمئن با <b className="text-primary-300">پرداخت درب منزل</b></h1>
     <Carousel />
    </main>
  );
}

export default page;
