import React from 'react';
import Image from 'next/image';
import pro from "../(public)/pro.avif"
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Get to know more about me and my journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={pro} // Add your image to the public folder
              alt="About Me"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Full Stack Developer & Python Enthusiast
            </h3>
            
            <p className="text-lg text-gray-600">
              I am a passionate Full Stack Developer with expertise in Python and modern web technologies. 
              With a strong foundation in both frontend and backend development, I create efficient and 
              scalable solutions that solve real-world problems.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">What I Offer:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Full Stack Development with Python & JavaScript
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Modern Frontend Development (React, Next.js)
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Responsive Web Design & UI/UX
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  API Development & Integration
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Education & Experience:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>🎓 Certificate in Computer Science</li>
                <li>💼  6 month of  Development Experience</li>
                <li>🏆 Multiple Certifications in Web Development</li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Connect with Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;