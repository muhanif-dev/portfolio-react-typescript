import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFileCode, 
  faServer, 
  faDatabase 
} from "@fortawesome/free-solid-svg-icons";
import { 
  faReact, 
  faHtml5, 
  faCss3Alt, 
  faSquareJs, 
  faNodeJs 
} from "@fortawesome/free-brands-svg-icons";

const SkillPage = () => {
  const skills = [
    {
      name: 'React.js',
      percentage: '98%',
      width: '98%',
      icon: <FontAwesomeIcon icon={faReact} className="text-cyan-400 text-3xl" />
    },
    {
      name: 'HTML5',
      percentage: '99%',
      width: '99%',
      icon: <FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-3xl" />
    },
    {
      name: 'CSS3',
      percentage: '95%',
      width: '95%',
      icon: <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-3xl" />
    },
    {
      name: 'JavaScript',
      percentage: '96%',
      width: '96%',
      icon: <FontAwesomeIcon icon={faSquareJs} className="text-yellow-400 text-3xl" />
    },
    {
      name: 'TypeScript',
      percentage: '90%',
      width: '90%',
      icon: <FontAwesomeIcon icon={faFileCode} className="text-blue-400 text-3xl" />
    },
    {
      name: 'Node.js',
      percentage: '92%',
      width: '92%',
      icon: <FontAwesomeIcon icon={faNodeJs} className="text-green-500 text-3xl" />
    },
    {
      name: 'Express.js',
      percentage: '88%',
      width: '88%',
      icon: <FontAwesomeIcon icon={faServer} className="text-gray-300 text-3xl" />
    },
    {
      name: 'MongoDB',
      percentage: '89%',
      width: '89%',
      icon: <FontAwesomeIcon icon={faDatabase} className="text-green-400 text-3xl" />
    }
  ];

  return (
    <section className="bg-[#0b0f19] min-h-screen text-white py-20 px-6 flex items-center justify-center font-sans">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My Work <span className="text-[#FF6A3D]">Skills</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Technologies and tools I use to build scalable, high-performance web applications and digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-[#121826] border border-gray-800/80 rounded-2xl p-6 flex flex-col items-center justify-between shadow-xl transition-all duration-300 hover:border-[#FF6A3D]/40 hover:-translate-y-1.5 group"
            >
              {/* Icon Container */}
              <div className="mb-4 h-12 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              {/* Skill Title */}
              <h3 className="text-white font-semibold text-base mb-6 text-center">
                {skill.name}
              </h3>

              {/* Animated Progress Bar */}
              <div className="w-full space-y-2">
                <div className="w-full bg-[#1e293b] h-2.5 rounded-full overflow-hidden p-[1px]">
                  <div 
                    className="bg-[#FF6A3D] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: skill.width }}
                  ></div>
                </div>
                <div className="text-right text-xs font-bold text-[#FF6A3D]">
                  {skill.percentage}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillPage;