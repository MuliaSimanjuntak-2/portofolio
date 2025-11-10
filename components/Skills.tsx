'use client';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "REST APIs",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Vercel",
        "Docker",
        "Postman",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal/5 via-transparent to-royal/5" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Berikut adalah teknologi dan tools yang saya kuasai dalam pengembangan web. 
            Saya terus belajar dan mengembangkan skill untuk mengikuti perkembangan teknologi.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Title */}
              <div className="text-center">
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-royal mx-auto rounded-full"></div>
              </div>

              {/* Skills List as chips (no percentages) */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill: string, skillIndex: number) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-royal/20 text-royal rounded-full text-sm font-medium border border-royal/30 hover:bg-royal hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card-bg backdrop-blur-sm p-8 rounded-xl border border-card-border max-w-3xl mx-auto">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Teknologi web terus berkembang pesat, dan saya berkomitmen untuk terus belajar hal-hal baru. 
              Saat ini saya sedang fokus memperdalam React ecosystem, cloud technologies, dan best practices dalam web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-royal/20 text-royal rounded-full text-sm font-medium border border-royal/30">
                📚 Currently Learning
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                AWS Cloud
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                GraphQL
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                Testing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;