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
    {
      title: "Project Management",
      skills: [
        "Agile/Scrum",
        "Jira",
        "Trello",
        "Notion",
        "Slack",
        "Microsoft Project",
        "Team Leadership",
        "Risk Management",
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-royal/10 via-transparent to-royal-light/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-royal/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-royal-light/5 rounded-full blur-2xl animate-pulse-glow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Section Header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-royal/10 backdrop-blur-sm rounded-full border border-royal/20 text-royal-light font-medium text-sm">
            <span className="w-2 h-2 bg-royal rounded-full mr-2 animate-pulse"></span>
            Technical Expertise
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are the technologies, tools, and methodologies I master in web development and project management. 
            I continuously learn and develop skills to keep up with technological advances and industry best practices.
          </p>
        </div>

        {/* Enhanced Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="group relative animate-fade-in-up hover-lift"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Glass Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/20"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-royal/20 to-royal-light/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              
              <div className="relative p-8 space-y-8">
                {/* Enhanced Category Title */}
                <div className="text-center space-y-4">
                  <div className="relative">
                    <h3 className="font-display font-bold text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-1 bg-gradient-to-r from-royal to-royal-light rounded-full"></div>
                      <div className="w-6 h-1 bg-gradient-to-r from-royal-light to-royal rounded-full mx-auto mt-1 opacity-60"></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Skills Chips */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <span
                      key={skillIndex}
                      className="relative px-4 py-2 bg-gradient-to-r from-royal/20 to-royal-light/15 text-gray-200 rounded-xl text-sm font-medium border border-royal/20 hover:border-royal/40 transition-all duration-300 group/skill cursor-pointer"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-royal/30 to-royal-light/20 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-all duration-300 scale-90 group-hover/skill:scale-100"></div>
                    </span>
                  ))}
                </div>
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
              Technology and project management methodologies continue to evolve rapidly, and I'm committed to continuously learning new things. 
              Currently, I'm focusing on deepening my knowledge of the React ecosystem, cloud technologies, advanced project management practices, and best practices in web development.
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
              <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
                PMP Certification
              </span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium border border-pink-500/30">
                DevOps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;