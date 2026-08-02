import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="bg-[#0b0f19] min-h-screen text-white py-20 px-6 flex items-center justify-center font-sans">
      <div className="max-w-5xl mx-auto w-full bg-[#121826] border border-gray-800/80 rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & Contact Info */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-xs uppercase tracking-[3px] text-[#FF6A3D] font-semibold">
            WE'RE HERE TO HELP YOU
          </p>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Discuss Your <br />
            <span className="text-[#FF6A3D]">Project</span> Needs
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Are you looking for top-quality web solutions tailored to your needs? Reach out to us.
          </p>

          <div className="space-y-4 pt-2">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 flex items-center justify-center text-[#FF6A3D] shrink-0">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <span className="text-xs text-gray-500 block">E-mail</span>
                <span className="text-sm font-medium text-gray-200">example@domain.com</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 flex items-center justify-center text-[#FF6A3D] shrink-0">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Phone number</span>
                <span className="text-sm font-medium text-gray-200">+123 - 456 - 7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6 bg-[#0b0f19] border border-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-inner">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            
            {/* Name Field */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Name</label>
              <input 
                type="text" 
                placeholder="Jane Smith" 
                className="w-full bg-[#121826] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6A3D] transition-colors"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
              <input 
                type="email" 
                placeholder="jane@frames.com" 
                className="w-full bg-[#121826] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6A3D] transition-colors"
              />
            </div>

            {/* Industry Field */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Industry</label>
              <select 
                className="w-full bg-[#121826] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-[#FF6A3D] transition-colors"
              >
                <option>Select...</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Digital Marketing</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Message</label>
              <textarea 
                placeholder="Type your message" 
                className="w-full bg-[#121826] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6A3D] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="bg-[#FF6A3D] hover:bg-[#e05b31] text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-600/20 transition-all duration-300 flex items-center justify-center gap-3 w-full text-sm mt-2"
            >
              <span>Get a Solution</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
                <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;