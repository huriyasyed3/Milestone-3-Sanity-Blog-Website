import React from 'react'

const AboutPage = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <h1 className='text-4xl font-blod mb-8 text-center '>About Our <span className='text-blue-600'>Blog</span>Spot</h1>
      <div className='flex flex-col md:flex-row items-center md:items-start md:space-x-8 md:space-y-0'>
        <div className='space-y-6'>
          <p className='text-lg leading-relaxed'>
            Welcome to BlogSpot!

            We are thrilled to have you here! At BlogSpot, we aim to bring you the best blogs on a variety of topics,
            all in one place. Whether you're here to learn, get inspired, or simply pass the time, our blog is designed
            with you in mind.
          </p>
          <h3 className='text-2xl font-semibold'>What We're About</h3>
          <p className='text-lg leading-relaxed'>Our blog is a reflection of the things we're passionate about—covering topics like:</p>
          <ul className="list-disc list-inside">
            <li>Lifestyle: Tips and tricks to enhance your daily routine.</li>
            <li>Technology: Latest trends and insights into the tech world.</li>
            <li>Travel: Stories and guides to fuel your wanderlust.</li>
            <li>Food: Recipes, food reviews, and everything delicious.</li>
            <li>Self-Care: Ideas to keep your mind and body in balance.</li>
          </ul>
          <p>We're here to create a space where information meets creativity, offering you fresh and engaging content regularly.</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 mt-12 gap-8 transition-all duration-300 '>
        <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
          <h2 className='text-xl font-semibold mb-4 text-blue-600'>Our Mission</h2>
          <p>
            At BlogSpot, our mission is simple: </p>
          <ul className="list-disc list-inside">
            <li>To inform.</li>
            <li>To inspire.</li>
            <li>To create a community of curious minds who love to explore the world through words.</li>
          </ul>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
          <h2 className='text-2xl font-semibold mb-4 text-blue-600'>Why Choose Us?</h2>
          <p>We're committed to quality, creativity, and authenticity.
            Every post is crafted with care to ensure you get the best
            experience when you visit our site.</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
          <h2 className='text-2xl font-semibold mb-4 text-blue-600'>Why Choose Us?</h2>
          <p >We'd love to hear from you! Feel free to leave a comment, connect with us on social media, or drop us a message.
            Your feedback means the world to us! </p>
          <p>Thank you for stopping by BlogSpot. We hope you find something here that makes your day a little brighter.</p>
        </div>
      </div>
    </div>

  )
}

export default AboutPage