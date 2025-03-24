import Image from 'next/image';
import web from "../(public)/web.jpg"
import personallibrary  from "../(public)/personallibrary.jpg"
import portfolio from "../(public)/portfolio.jpg"
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Python, Sanity for backend. Features include user order Product, product management, and payment integration .",
      technologies: ["Next.js", "Sanity", "Python", "TypeScript", "Tailwind CSS"],
      image: web,
      github: "https://github.com/hussain9491/e-commerceHackathone03.git",
      demo: "https://ecommerceecommerce0.netlify.app/"
    },
    {
      title: "Books Library Management App",
      description: "A responsive Library management application with real-time updates. Built using Streamlit and Python, featuring  functions like Add books, Edit books , Delete books , and save history for books in data based",
      technologies: ["Streamlit",  "Python"],
      image: personallibrary,
      github: "https://github.com/hussain9491/Personal_libraryPY.git",
      demo: "https://fcz8qqvtbweqivqwlnjnxa.streamlit.app/"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with HTML, CSS, and Typescript featuring responsive design and smooth animations.",
      technologies: ["HTML", "TypeScript", "CSS"],
      image: portfolio,
      github: "https://github.com/hussain9491/my-personal-portfolio.git",
      demo: "https://bespoke-profiterole-4c6520.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Here are some of my recent projects that showcase my technical skills
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image }
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 