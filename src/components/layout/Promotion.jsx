import React from "react";

const Promotion = () => {
  return (
    <section id="promo" className="my-9">
      <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
        {/* <!-- card 1 --> */}
        <div className=" flex flex-col p-5 bg-gray-100 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
          <img
            src="img/promo-1.png"
            alt="promo image"
            className="w-40 mx-auto hover:animate-movingY md:mx-5"
          />

          <div className="space-y-2 pt-5 md:pt-0">
            <p className=" text-primary font-medium ">Payday promo</p>
            <h3 className="text-2xl">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
            <p className="paragraph">
              Heavenly Halal Chicken Burger, Heavenly Halal Chicken Burger, The
              Ultimate Cheeseburger,Veggie Extravaganza Delight
            </p>
            <a href="/menu" className=" text-primary font-medium ">
              Buy online
            </a>
          </div>
        </div>

        {/* <!-- card 2 --> */}
        <div className=" flex flex-col bg-gray-100 p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
          <img
            src="img/promo-2.png"
            alt="promo image"
            className="w-40 mx-auto hover:animate-movingY md:mx-5"
          />

          <div className="space-y-2 pt-5 md:pt-0">
            <p className=" text-primary font-medium">Payday promo</p>
            <h3 className="text-2xl">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
            <p className="paragraph">
              Lavender Lemon Elixir, Sparkling Apple Spice Splash, Guava Ginger
              Zest Quencher.
            </p>
            <a href="/menu" className=" text-primary font-medium">
              Buy online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
