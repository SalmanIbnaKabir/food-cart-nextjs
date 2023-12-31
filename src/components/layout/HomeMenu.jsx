"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[40px] text-left -z-10">
          <Image
            src={"/sallad1.png"}
            width={109}
            height={189}
            alt={"sallad"}
            placeholder="blur"
            blurDataURL="/loading.jpg"
          />
        </div>
        <div className="absolute -top-[60px] right-0 -z-10">
          <Image
            src={"/sallad2.png"}
            width={107}
            height={195}
            alt={"sallad"}
            placeholder="blur"
            blurDataURL="/loading.jpg"
          />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={"check out"}
          mainHeader={"Our Best Sellers"}
        />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 justify-center gap-6   p-6">
        {bestSellers?.length > 0 &&
          bestSellers.map((item) => <MenuItem key={item._id} {...item} />)}
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/menu"
          className=" bg-primary font-bold  text-white px-5 py-2 rounded-full"
        >
          All Menu
        </Link>
      </div>
    </section>
  );
}
