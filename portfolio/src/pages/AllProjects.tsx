import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AllProjects = () => {
  // Array containing 12 project items matching your design style
  const projects = [
    {
      id: "01",
      title: "Ring Size Calculatore",
      category: "Full-stack e-commerce solution with modern UI/UX",
      image: "/images/RingSizeCalculatore.png",
      link: 'https://java-script-projects-ring-size-calc.vercel.app/'
    },
    {
      id: "02",
      title: "Tic Tac Toe Game",
      category: "Collaborative task management application",
      image: "/images/tic-tac-toe.png",
      link: "https://tic-tac-toe-game-rust-eta.vercel.app/"
    },
    {
      id: "03",
      title: "Chatbot Project",
      category: "Real-time cryptocurrency tracking dashboard",
      image: "/images/chatbot.png",
      link: "https://chatbot-project-chi-seven.vercel.app/"
    },
    {
      id: "04",
      title: "QR & BAR Code Genrator",
      category: "Student platform for uploading & downloading notes",
      image: "/images/CodeGenrator.jpeg",
      link: "https://java-script-projects-itv9.vercel.app/"
    },
    {
      id: "05",
      title: "Free Classroom Finder",
      category: "Collaborative task management application",
      image: "/images/ClassRoomFinder.jpeg",
      link: "https://room-availability-cheker.github.io/Room-Availability-cheker/"
    },
    {
      id: "06",
      title: 'Full Ecommerce Website',
      category: "Collaborative task management application",
      image: '/images/nestivo-commerce.png',
      link:"https://dev-nestivo.pantheonsite.io/"
    },
    {
      id: "07",
      title: "Portfolio Website ",
      category: "Personal developer portfolio with Tailwind CSS",
      image: "/images/portfolio.png",
      link: "https://full-stack-portfolio-mu.vercel.app/"
    },
    {
      id: "08",
      title: "Weather Forecast App",
      category: "Live weather tracking app using REST API",
      image: "/images/WeatherApp.PNG",
      link: "#"
    },
    {
      id: "09",
      title: "Temprature Converter",
      category: "Interactive web app to search cooking recipes",
      image: "/images/TempratureConverter.png",
      link: "https://java-script-projects-hoau.vercel.app/"
    },
    {
      id: "10",
      title: "Rock Paper Scissore Game",
      category: "Full-stack content publishing system with MongoDB",
      image: "/images/RockPaperScissor.png",
      link: "https://java-script-projects-bqg4.vercel.app/"
    },
    {
      id: "11",
      title: "Brand Bloom Project",
      category: "Personal finance and budget management tool",
      image: "/images/BrandBloom.png",
      link: "https://dev-brandbloom-project.pantheonsite.io/"
    },
    {
      id: "12",
      title: "Tip Caculator",
      category: "High-conversion marketing template with clean UI",
      image: "/images/TipCalculator.png",
      link: "https://java-script-projects-pssq.vercel.app/"
    },{
      id: "13",
      title: "To Do List",
      category: "Full-stack content publishing system with MongoDB",
      image: "/images/ToDoList.png",
      link: "https://to-do-list-app-seven-weld.vercel.app/"
    },
    {
      id: "14",
      title: "Animated Calculator",
      category: "Personal finance and budget management tool",
      image: "/images/AnimatedCalculator.png",
      link: "https://spadasoft-internship.vercel.app/"
    },
    {
      id: "15",
      title: "MH Blogs",
      category: "High-conversion marketing template with clean UI",
      image: "/images/Blogs.png",
      link: "https://hanifly-blogs.vercel.app/"
    }
  ];

  return (
    <section className="bg-[#0b0f19] min-h-screen text-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[3px] text-[#FF6A3D] font-semibold">
            FEATURED PROJECTS
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Some of My <span className="text-[#FF6A3D]">Recent Work</span>
          </h2>
          <div className="w-12 h-1 bg-[#FF6A3D] mx-auto rounded-full mt-2"></div>
        </div>

        {/* Projects Grid Container (Responsive 3-column layout matching your image style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#121826] border border-gray-800/80 rounded-2xl p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#FF6A3D]/40 hover:-translate-y-1 group"
            >
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-gray-400 group-hover:text-[#FF6A3D] transition-colors">
                    {project.id}
                  </span>
                </div>

                {/* Project Mockup Image Frame */}
                <div className="w-full h-48 bg-[#0b0f19] border border-gray-800 rounded-xl overflow-hidden mb-6 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                {/* Project Category/Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.category}
                </p>
              </div>

              {/* View Project Link */}
              <div className="pt-4 border-t border-gray-800/60 flex items-center justify-end">
                <a 
                  href={project.link} 
                  className="text-sm font-medium text-white hover:text-[#FF6A3D] flex items-center gap-2 transition-colors no-underline"
                >
                  <span>View Project</span>
                  <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllProjects;