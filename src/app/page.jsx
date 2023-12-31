import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { TbTruckDelivery, TbCurrencyDollar } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import Contact from "@/components/layout/Contact";
import Category from "@/components/layout/Category";
import Promotion from "@/components/layout/Promotion";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="my-9 ">
        <SectionHeaders subHeader={""} mainHeader={"Our Best Menu"} />
        <Category />
      </section>

      <HomeMenu />

      <section className="my-9 ">
        <SectionHeaders
          subHeader={"Weekend Wonders Sale"}
          mainHeader={"Discount Offer"}
        />
        <Promotion />
      </section>

      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"Why Choose Us"} />
        <section className="flex items-center flex-col lg:flex-row my-10">
          <div className="w-full lg:w-1/2">
            <img src="/about-img.png" className="w-full h-auto" alt="Hero" />
          </div>
          <div className="w-full lg:w-1/2 lg:ml-8">
            <h1 className="text-3xl lg:text-5xl font-bold my-3 lg:my-5">
              Best Food In The Country
            </h1>
            <p className="py-4 lg:py-6 text-justify mb-4 px-5 lg:mb-5 leading-6 lg:leading-7">
              Bangladesh is famous for its delicious food and dessert, the
              specialty of Bangladeshi food is they are spicy. Rice is the main
              Bangladesh food Rice, fish curry and lentil is the most common
              traditional Bangladesh food for general people. Bangladesh is also
              famous for its desserts. You will find dozens of Sweets, rice
              cakes, rice pudding, and many other desserts in Bangladesh, mostly
              made from rice and cow milk; it is a paradise for food lovers
            </p>
            <p className="flex mb-4 py-4 lg:mb-5 gap-2">
              <button className="group hover:bg-primary hover:text-white flex items-center transition-all duration-700">
                <TbTruckDelivery className="text-primary text-xl lg:text-2xl  group-hover:text-white transition-all duration-700  " />
                Free Delivery
              </button>

              <button className=" group hover:bg-primary hover:text-white flex items-center transition-all duration-700">
                <TbCurrencyDollar className="text-primary text-xl lg:text-2xl  group-hover:text-white transition-all duration-700 " />
                Easy Payments
              </button>
              <button className=" group hover:bg-primary hover:text-white flex items-center transition-all duration-700 ">
                <RiCustomerService2Line className="text-primary text-xl lg:text-2xl  group-hover:text-white transition-all duration-700 " />
                24/7 Service
              </button>
            </p>
            <button className="hover:bg-primary hover:text-white transition-all duration-700 ">
              Learn More
            </button>
          </div>
        </section>
      </section>

      <section className=" my-8" id="contact">
        <Contact />
      </section>
    </>
  );
}
