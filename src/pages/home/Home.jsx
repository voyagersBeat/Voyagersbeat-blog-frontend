import React from "react";
import Hero from "./Hero";
import Blogs from "../blogs/Blogs";

const Home = () => {
  return (
    <>
      {/* {alternate bg color is e0ebeb, e6e6e6} */}
      <div className="bg-[#eeeded] text-primary container mx-auto mt-32 p-8">
        <Hero />
        <Blogs />
      </div>
    </>
  );
};

export default Home;
