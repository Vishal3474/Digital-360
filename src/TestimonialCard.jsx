import React from "react";

function TestimonialCard() {
  return (
    <div>
      <div className="lg:flex lg:space-x-24 lg:ml-20 lg:mr-20 lg:mb-20">
        <div className="lg:shadow-2xl lg:bg-gray-50 lg:space-y-8 lg:flex lg:flex-col lg:items-center  ">
          <h1 className="text-6xl font-bold">,,</h1>

          <h1 className="mr-4 ml-4">
            Suspendisse faucibus fermentum elifend donec rucus tellus gravida
            morbi libero ullamcorpe iaculis amet tha a purus commodo starn
            feugiat.
          </h1>
          <h1>Russell Wagner</h1>
          <hr />
          <h1>- Designer</h1>
          <img
            className="rounded-full h-16 w-16 "
            src="https://cdn.discordapp.com/attachments/998764908479004743/1011532874454945842/img-1.jpeg"
            alt="person"
          />
          <span className="mb-20"></span>
        </div>

        <div className="lg:shadow-2xl lg:space-y-8 lg:flex lg:flex-col lg:items-center">
          <h1 className="text-6xl font-bold">,,</h1>

          <h1 className="mr-4 ml-4">
            Suspendisse faucibus fermentum elifend donec rucus tellus gravida
            morbi libero ullamcorpe iaculis amet tha a purus commodo starn
            feugiat.
          </h1>
          <h1>William Harris</h1>
          <hr />
          <h1>- Manager</h1>
          <img
            className="rounded-full h-16 w-16 "
            src="https://cdn.discordapp.com/attachments/998764908479004743/1011532934131494952/img-2_1.jpeg"
            alt="person"
          />
        </div>

        <div className="lg:shadow-2xl lg:bg-gray-50 lg:space-y-8 lg:flex lg:flex-col lg:items-center">
          <h1 className="text-6xl font-bold">,,</h1>

          <h1 className="mr-4 ml-4">
            Suspendisse faucibus fermentum elifend donec rucus tellus gravida
            morbi libero ullamcorpe iaculis amet tha a purus commodo starn
            feugiat.
          </h1>
          <h1>Jesus Garrison</h1>
          <hr />
          <h1>- Developer</h1>
          <img
            className="rounded-full h-16 w-16 mb-5"
            src="https://cdn.discordapp.com/attachments/998764908479004743/1011532934353780736/img-3_1.jpeg"
            alt="person"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
