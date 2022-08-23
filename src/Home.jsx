import React from "react";

function Home() {
  return (
    <div className="bg-[url('https://cdn.discordapp.com/attachments/998764908479004743/1011535542195863602/bg-1.d40ee0f6.jpg')] h-full text-white bg-cover">
      
      <div className="lg:flex ">
      <div className="mt-40 lg:ml-20 lg:mr-20">
        <h1 className="text-xl ">SIMPLE APP</h1>
        <h1 className="text-5xl font-bold mt-7">A new way to connect simple yet powerful</h1>
        <h1 className="mt-7 text-lg">
          Mauris lobortis magna erat varius enim vestibulum aliquam consequat
          mauris dliquam ligula faucibus imperdiet tortor.
        </h1>
        <div className="space-x-5 mt-24">
          <button className="px-6 py-3 bg-black rounded-lg">
            Download App On App Store
          </button>
          <button className="px-6 py-3 bg-black rounded-lg">
            Get it  On Google Play{" "}
          </button>
        </div>
      </div>
<div>
      <img className="mt-16 lg:mr-40 lg:ml-10"
        src="https://cdn.discordapp.com/attachments/998764908479004743/1011532873305690172/img-3_2.png"
        alt="Make Sure Your PC/Laptop Connected with  Good Internet "
      /></div></div>
    </div>
  );
}

export default Home;
