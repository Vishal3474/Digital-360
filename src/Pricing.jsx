import React from "react";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <div className="bg-gray-100 lg:mb-10 lg:mt-5 ">
        <div className="lg:text-center lg:ml-72 lg:mr-72"> 
      <h1 className="text-3xl mt-10">Pricing plan</h1>
      <h1 className="text-sm text-gray-600 mt-10 mb-10">
        Temporibus autem quibusdam officiis debitis necessitatibus eveniet
        voluptates repudiandae molestiae non recusandae taque earum rerum hic
        asperiores repellat.
      </h1></div>

<PricingCard></PricingCard>




    </div>
  );
}

export default Pricing;
