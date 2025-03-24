import Image from 'next/image';
import my_pic from "../(public)/my_pic.jpg"
const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="sm:text-center lg:text-left lg:w-1/2">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Hi, I am</span>{' '}
                  <span className="block text-blue-600 xl:inline">Hussain Ali</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A passionate Full-Stack Developer specializing in Python and modern web technologies. I create efficient, 
                  scalable, and user-friendly solutions that solve real-world problems.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get in touch
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#projects"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <Image
                    src={my_pic} // Add your image to the public folder and update this path
                    alt="Hussain Ali"
                    fill
                    className="rounded-full object-cover shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero;