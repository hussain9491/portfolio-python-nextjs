const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "React", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 82 },
        { name: "JavaScript", level: 88 },
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Python", level: 90 },
        { name: "Django", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "RESTful APIs", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            My technical expertise spans across various technologies and frameworks
          </p>
        </div>

        <div className="mt-16">
          {skills.map((skillCategory, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {skillCategory.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-gray-900">{tech.name}</span>
                      <span className="text-sm text-gray-500">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 