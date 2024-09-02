import React from 'react'

function About() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to Data Graphicss, where we transform complex data into insightful and interactive visualizations. Our mission is to empower businesses and individuals to make data-driven decisions with clarity and confidence.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Founded in 2024, Data Graphicss is at the forefront of data visualization technology, offering innovative solutions tailored to meet the unique needs of our clients. Our team of expert data scientists, designers, and engineers work collaboratively to deliver powerful visual tools that bring your data to life.
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Data Graphicss, we envision a world where data is accessible and understandable for everyone. We strive to bridge the gap between raw data and actionable insights, ensuring that our visualizations are not only aesthetically pleasing but also highly functional.
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Our Team</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our team is our greatest asset. We are a diverse group of professionals with a shared passion for data and design. Our experts come from various backgrounds, bringing a wealth of knowledge and experience to the table. Together, we are committed to pushing the boundaries of what’s possible in data visualization.
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            We’d love to hear from you! Whether you have a question about our services, need support, or want to discuss a potential project, feel free to reach out. You can contact us at <a href="mailto:abhaykevat23@gmail.com" className="text-blue-500 underline">DataGraphicss@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About