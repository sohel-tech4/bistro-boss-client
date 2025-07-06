import React from "react";
import TagItem from "../../../Components/TagItem";

import featuredimg from "../../../assets/featured.jpg";

import "./Featured.css"

const FeaturedItem = () => {
  return (
    <div className="featured-item text-white bg-fixed my-20">
      <div className="bg-gray-950/50 pt-2 pb-10">
        <TagItem SubTitle={"Check it out"} Title={"FROM OUR MENU"}></TagItem>
      <div className="md:flex md:px-40 p-3 md:mb-20 items-center gap-10 justify-center">
        <img className="md:w-1/3 md:mb-0 mb-3" src={featuredimg} alt="" />
        <div className="">
          <p className="text-2xl">March 20, 2025</p>
          <h1 className="md:text-4xl text-3xl my-3 text-justify uppercase">Where can i get some?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            recusandae ducimus iusto hic necessitatibus est! Iure, in. Magnam,
            aliquid amet, totam molestiae magni velit minima quia molestias
            commodi qui nostrum assumenda expedita, cum possimus odit fugiat
            beatae ipsam nulla eaque! Neque quia minima vero nisi fugiat
            doloremque voluptatem minus repellendus.
          </p>
          <button className="btn border-0 border-b-2 mt-5 btn-outline">READ MORE</button>{" "}
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
