import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-6xl font-semibold">
          Taste the Extraordinary
          <br />
          A Symphony of
          <br />
          Flavors Awaits Your!&nbsp;
          <span className="text-primary">Food</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Our chefs, fueled by a relentless pursuit of perfection, curate a menu
          that blends innovation with tradition, offering a symphony of
          textures, aromas, and flavors. From farm-fresh ingredients to culinary
          techniques passed down through generations, each element on your plate
          is a testament to our commitment to quality
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase  items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
