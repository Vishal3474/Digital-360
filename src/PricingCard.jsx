import React from "react";
import BuyNowBtn from "./BuyNowBtn";

function PricingCard() {
  return (
    <div className="lg:flex text-gray-500 mb-10 ">
      {" "}
      <div className="space-y-5 text-center border-2 border-gray-500 ml-10 mr-10 bg-white rounded-md  ">
        <h1 className="text-2xl mt-10 ">Basic</h1>
        <h1 className="text-xl mb-10 mt-7 ml-24 mr-24">Perfact For Freelancer</h1>
        <h1 className="text-indigo-500">
          $ <span className="text-5xl">29</span>{" "}
        </h1>
        <h1>100 MB Disk Space</h1>
        <h1>2 Subdomains</h1>
        <h1>5 Email Accounts</h1>
        <h1>Webmail Support</h1>
        <h1>Customre Support 24/7</h1>

        <BuyNowBtn></BuyNowBtn>
      <h1 className="mb-10"></h1>
      </div>
      <div className="space-y-5 text-center border-2 border-gray-500 ml-10 mr-10 rounded-md bg-white">
        <h1 className="text-2xl mt-10">Standard</h1>
        <h1 className="text-xl mb-10 mt-7 ml-24 mr-24">Perfact For Freelancer</h1>
        <h1 className="text-indigo-500">
          $ <span className="text-5xl">39</span>{" "}
        </h1>
        <h1>100 MB Disk Space</h1>
        <h1>2 Subdomains</h1>
        <h1>5 Email Accounts</h1>
        <h1>Webmail Support</h1>
        <h1>Customre Support 24/7</h1>
        <BuyNowBtn></BuyNowBtn>
      </div>
      <div className="space-y-5 text-center border-2 border-gray-500 ml-10 mr-10 bg-white rounded-md">
        <h1 className="text-2xl mt-10">Professional</h1>
        <h1 className="text-xl mb-10 mt-7 ml-24 mr-24">Perfact For Freelancer</h1>
        <h1 className="text-indigo-500">
          $ <span className="text-5xl">59</span>{" "}
        </h1>
        <h1>100 MB Disk Space</h1>
        <h1>2 Subdomains</h1>
        <h1>5 Email Accounts</h1>
        <h1>Webmail Support</h1>
        <h1>Customre Support 24/7</h1>
        <BuyNowBtn></BuyNowBtn>
      </div>
    </div>
  );
}

export default PricingCard;
