import React from "react";
import TestimonialCard from "./TestimonialCard";
import VideoCard from "./VideoCard";

function Client() {
  return (
    <div>
      <div className="lg:text-center lg:ml-64 lg:mr-64">
        <h1 className="text-3xl mt-10"> Client Testimonials</h1>

        <h1 className="mt-10 ">
          Temporibus autem quibusdam officiis debitis necessitatibus eveniet
          voluptates repudiandae molestiae non recusandae taque earum rerum hic
          asperiores repellat.
        </h1>
      </div>{" "}
      <div className="mt-10">
      <TestimonialCard></TestimonialCard></div>
      <div className="lg:ml-5 lg:mr-5 lg:mb-20 lg:border-4 lg:border-green-500">
        <VideoCard></VideoCard>
      </div>
    </div>
  );
}

export default Client;
