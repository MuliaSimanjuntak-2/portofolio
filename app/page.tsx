import { getAllProjects } from '@/lib/projects';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectList from '@/components/ProjectList';
import Skills from '@/components/Skills';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SimpleBackground from '@/components/SimpleBackground';

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Simple Background */}
      <SimpleBackground />
      
      {/* Content */}
      <div className="relative z-10">
      <Header />
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-royal/5 to-transparent" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center space-y-8">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
                About Me
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Highly motivated Software Engineering student with a strong interest in financial 
                  technology and digital economics. Skilled in Python, PHP, and MySQL, with hands-on 
                  experience in database systems, software project management, and web application 
                  development. Passionate about leveraging technology to build data-driven financial 
                  solutions and optimize business processes through innovation and automation.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Selain coding, saya juga tertarik dengan UI/UX design dan selalu berusaha menciptakan 
                  pengalaman pengguna yang optimal. Saya percaya bahwa kombinasi antara teknologi yang solid 
                  dan desain yang baik dapat menciptakan solusi yang benar-benar berdampak.
                </p>
                <div className="flex flex-wrap justify-center gap-6 pt-8">
                  <div className="text-center bg-card-bg backdrop-blur-sm border border-card-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-royal">2+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center bg-card-bg backdrop-blur-sm border border-card-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-royal">3+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center bg-card-bg backdrop-blur-sm border border-card-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-royal">Happy</div>
                    <div className="text-gray-400">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectList projects={projects} />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
      </div>
    </div>
  );
}
