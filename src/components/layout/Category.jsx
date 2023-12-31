import React from "react";

const Category = () => {
  return (
    <section id="category" className="my-5">
      <div className="container flex flex-col gap-5 md:flex-row">
        {/* <!-- card 1 --> */}
        <div className=" bg-gray-100 flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <img
              src="img/burger-1.png"
              alt="category image"
              className="absolute w-28 -bottom-4 -left-4"
            />
          </div>

          <div>
            <div className="mb-2">
              <h4 className="text-primary text-xl font-medium">Burger</h4>
              <p className="text-xs">Heavenly Halal Chicken Burger</p>
            </div>

            <a href="/menu" className="text-primary cursor-pointer font-medium">
              Buy online
            </a>
          </div>
        </div>

        {/* <!-- card 2 --> */}
        <div className=" bg-gray-100 flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <img
              src="img/snack-1.png"
              alt="category image"
              className="absolute w-28 -bottom-4 -left-4"
            />
          </div>

          <div>
            <div className="mb-2">
              <h4 className="text-xl text-primary font-medium">French fries</h4>
              <p className="text-xs">Golden Crisp Potato Sticks.</p>
            </div>

            <a href="/menu" className="text-primary cursor-pointer font-medium">
              Buy online
            </a>
          </div>
        </div>

        {/* <!-- card 3 --> */}
        <div className=" bg-gray-100 flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <img
              src="img/beverage-2.png"
              alt="category image"
              className="absolute w-28 -bottom-4 -left-4"
            />
          </div>

          <div>
            <div className="mb-2">
              <h4 className="text-xl text-primary font-medium">Fruits Juice</h4>
              <p className="text-xs">Mixed Berry Breeze Boost.</p>
            </div>

            <a href="/menu" className="text-primary cursor-pointer font-medium">
              Buy online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
