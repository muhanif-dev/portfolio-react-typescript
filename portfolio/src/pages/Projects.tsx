import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const services = [
    {
      title: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Web Design',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Web Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section className="bg-[#0b0f19] min-h-screen text-white py-20 px-6 flex items-center justify-center font-sans">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="text-[#FF6A3D]">Services</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#121826] border border-gray-800/80 rounded-2xl p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#FF6A3D]/40 hover:-translate-y-1.5 group relative overflow-hidden"
            >
              {/* Service Title */}
              <h3 className="text-white font-bold text-xl mb-6">
                {service.title}
              </h3>

              {/* Card Image with Floating Action Button */}
              <div className="relative rounded-xl overflow-hidden shadow-md mt-auto">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Arrow Button */}
                <div className="absolute bottom-0 right-0 bg-[#0b0f19] pt-3 pl-3 rounded-tl-2xl">
                  <button className="w-11 h-11 bg-[#FF6A3D] hover:bg-[#e05b31] text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <FontAwesomeIcon icon={faArrowRight} className="transform -rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center">
          <button className="bg-[#FF6A3D] hover:bg-[#e05b31] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 text-sm">
            See All <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;