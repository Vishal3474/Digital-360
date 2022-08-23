import React from "react";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <div>
      <div className="lg:text-center lg:ml-72 lg:mr-72 ">
        <h1 className="text-3xl mt-10">Made By Professionals</h1>
        <h1 className="text-sm text-gray-600 mt-10 mb-10">
          Temporibus autem quibusdam officiis debitis necessitatibus eveniet
          voluptates repudiandae molestiae non recusandae taque earum rerum hic
          asperiores repellat.
        </h1>
      </div>
      <TeamCard></TeamCard>
<div  className="bg-[url('https://cdn.discordapp.com/attachments/998764908479004743/1011640362571399168/InShot_20220823_194651228.jpg')] h-full text-white bg-cover mt-20 mb-10  ">

<div className="lg:text-center lg:ml-72 lg:mr-72">
<h1 className="text-3xl mt-10">Aparax App FREE Download</h1>
        <h1 className="text-sm  mt-10 mb-10">
          Temporibus autem quibusdam officiis debitis necessitatibus eveniet
          voluptates repudiandae molestiae non recusandae taque earum rerum hic
          asperiores repellat.
        </h1></div>
<div className="lg:space-x-10 mt-40 lg:text-center mb-10 sm:flex sm:flex-col sm:space-y-10 sm:items-center ">
<button className="border-2 border-white py-3 px-12 hover:bg-white hover:text-gray-700">Ios</button>
<button  className="border-2 border-white py-3 px-8 hover:bg-white hover:text-gray-700">Android</button>
<button  className="border-2 border-white py-3 px-8 hover:bg-white hover:text-gray-700">Windows</button>
</div>
<h1 > .</h1>
</div>
    </div>
  );
}

export default Team;
