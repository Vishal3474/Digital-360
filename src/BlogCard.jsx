import React from "react";

function BlogCard() {
  return (
    <div className="lg:flex ml-10 mr-10 mt-20">
      <div className="space-y-3 text-gray-600">
        <img
          className="w-96 "
          src="https://cdn.discordapp.com/attachments/998764908479004743/1011532934978736148/img-7.jpeg"
          alt=""
        />
        <div className="ml-8 mr-10 space-y-3">
          <h1 className="text-sm">Creative Process</h1>
          <h1 className="text-lg">Enjoy pleasure annoying conseqes.</h1>
          <h1>
            Semper felis pharetr ultricies in justo ornare eget consectetur
            venenatis they at pharetra metus eleifend rutrum pulvinar
          </h1>
          <button className="text-gray-700">Read More..</button>
        </div>
      </div>

      <div className="space-y-2 text-gray-600">
        <img
          className="w-96 "
          src="https://cdn.discordapp.com/attachments/998764908479004743/1011532934769033346/img-6.jpeg"
          alt=""
        />{" "}
        <div className="ml-8 mr-10 space-y-3">
          <h1 className="text-sm">Creative Process</h1>
          <h1 className="text-lg">Enjoy pleasure annoying conseqes.</h1>
          <h1>
            Semper felis pharetr ultricies in justo ornare eget consectetur
            venenatis they at pharetra metus eleifend rutrum pulvinar
          </h1>
          <button className="text-gray-700">Read More..</button>
        </div>
      </div>

      <div className="space-y-2 text-gray-600">
        <img
          className="w-96 "
          src="https://cdn.discordapp.com/attachments/998764908479004743/1011532935180066836/img-8.jpeg"
          alt=""
        />
        <div className="ml-8 mr-10 space-y-3">
          <h1 className="text-sm">Creative Process</h1>
          <h1 className="text-lg">Enjoy pleasure annoying conseqes.</h1>
          <h1>
            Semper felis pharetr ultricies in justo ornare eget consectetur
            venenatis they at pharetra metus eleifend rutrum pulvinar
          </h1>
          <button className="text-gray-700">Read More..</button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
