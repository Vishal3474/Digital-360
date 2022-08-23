import React from 'react'
import BlogCard from './BlogCard'

function Blog  ()  {
  return (
    <div>
   <div className="text-center mt-20">
        <h1 className="text-2xl">Latest Blogs</h1>
        <h1 className="text-md mt-5 lg:ml-64 lg:mr-64 text-gray-600 ">
          Temporibus autem quibusdam officiis debitis necessitatibus eveniet
          voluptates repudiandae molestiae non recusandae taque earum rerum hic
          asperiores repellat.
        </h1>
      </div>
<BlogCard></BlogCard>

    </div>
  )
}

export default Blog