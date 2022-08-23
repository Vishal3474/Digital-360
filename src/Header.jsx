import React from "react";

function Header() {
  return (
    <div>
      <div className="flex text-center py-4 shadow-xl">
        <div>
          <h1 className="text-3xl ml-3 ">Digital 360</h1>
        </div>
        <div className="lg:flex ml-auto space-x-8 mr-3 mt-2 sm:flex hidden">
          <h1>Home</h1>
          <h1>Feature</h1>
          <h1>About</h1>
          <h1>Client</h1>
          <h1>Pricing</h1>
          <h1>Team</h1>
          <h1>Blog</h1>
          <h1>Pages </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
