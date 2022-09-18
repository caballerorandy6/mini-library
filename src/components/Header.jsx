import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className="md:w-2/3 mx-auto text-5xl font-black text-gray-800 text-center uppercase mb-5">
        Mini Library
      </h1>
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-10 uppercase">
        Everyone can register books{" "}
        <span className="text-gray-800 font-black">here</span>
      </h2>
    </div>
  );
};

export default Header;
