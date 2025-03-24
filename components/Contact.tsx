const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Get In Touch
      </h2>

      <div className="max-w-2xl mx-auto">
        <form 
          action="https://formsubmit.co/hfareed376@gmail.com"
          method="POST"
          className="space-y-8"
        >
          {/* Name Input */}
          <div className="relative z-0">
            <input
              type="text"
              name="name"
              required
              title="Please enter your name"
              className="block w-full px-4 py-3 text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 peer"
              placeholder=" "
            />
            <label className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 left-4 z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
              Your Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative z-0">
            <input
              type="email"
              name="email"
              required
              title="Please enter your email"
              className="block w-full px-4 py-3 text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 peer"
              placeholder=" "
            />
            <label className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 left-4 z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
              Your Email
            </label>
          </div>

          {/* Message Textarea */}
          <div className="relative z-0">
            <textarea
              name="message"
              required
              rows={5}
              title="Please enter your message"
              className="block w-full px-4 py-3 text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 peer h-32"
              placeholder=" "
            />
            <label className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 left-4 z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
              Your Message
            </label>
          </div>

          {/* Hidden Inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://your-actual-deployed-url.netlify.app"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center ">
            <p className="text-base text-gray-500">Or connect with me on social media:</p>
            <div className="mt-4 flex justify-center space-x-10 ">
              <a href="https://github.com/hussain9491" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 ">
                <span  className="sr-only ">GitHub </span>
                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/hussain-ali-7021aa2b8/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-10 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-700 ">
          <p>Email: hfareed376@gmail.com</p>
            <p className="copyright">© 2025 portfolio ofHussain Ali. All rights reserved.</p>
        
          </div>
      </div>
    </section>
  );
};

export default ContactSection;