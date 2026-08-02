

const About = () => {
  return (
    <div className="bg-[#FFF9F5] min-h-screen font-sans text-[#2D2D2D] relative overflow-hidden">
      
      {/* --- Navbar --- */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-[#1E1E1E]">Dora</span>
          <span className="w-2 h-2 rounded-full bg-[#FF7A00]"></span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#555]">
          <a href="#home" className="text-[#FF7A00] font-semibold">Home</a>
          <a href="#services" className="hover:text-[#FF7A00] transition">Services</a>
          <a href="#works" className="hover:text-[#FF7A00] transition">Works</a>
          <a href="#blog" className="hover:text-[#FF7A00] transition flex items-center gap-1">
            Blog <span className="text-xs">▼</span>
          </a>
          <a href="#contact" className="hover:text-[#FF7A00] transition">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center cursor-pointer shadow-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
        </div>
      </header>

      {/* --- Hero Content --- */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 items-center relative">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 z-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[#FF7A00] font-bold text-lg tracking-wide">Hi, I'm</span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1E1E1E] tracking-tight">
              Mary Hardy
            </h1>
            <p className="text-xl font-semibold text-[#333]">Digital Marketing Expert</p>
          </div>

          <p className="text-[#666] max-w-lg leading-relaxed text-sm lg:text-base">
            Shot what able cold new the see hold. Friendly as an betrayed formerly he. 
            Morning because as to society behaved moments
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button className="bg-[#FF7A00] hover:bg-[#e06d00] text-white font-medium px-7 py-3 rounded-full shadow-lg shadow-orange-500/20 transition flex items-center gap-2">
              Download CV
            </button>
            <button className="border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white font-medium px-8 py-3 rounded-full transition flex items-center gap-2">
               Contact
            </button>
          </div>
        </div>

        {/* Right Column: Profile Graphic */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          {/* Background Decorative Shapes */}
          <div className="absolute w-[320px] h-[320px] bg-[#FFEAD4] rounded-full -top-6 right-10 -z-0"></div>
          <div className="absolute w-[280px] h-[280px] bg-[#FF7A00] rounded-full top-10 right-4 -z-0 opacity-90"></div>
          
          {/* Profile Image */}
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" 
            alt="Mary Hardy - Digital Marketing Expert" 
            className="relative z-10 w-[300px] lg:w-[380px] h-auto object-cover rounded-b-full"
          />
        </div>
      </main>

      {/* --- Floating Stats Bar --- */}
      <div className="max-w-5xl mx-auto px-6 relative -mt-12 z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center border border-orange-50/50">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4 justify-center md:justify-start px-4">
            <div className="w-12 h-12 rounded-full bg-[#FF7A00] text-white flex items-center justify-center shrink-0 shadow-md">
              
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#1E1E1E]">8 years job</h4>
              <p className="text-xs text-[#777]">Experience</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 justify-center px-4 border-y md:border-y-0 md:border-x border-gray-100 py-4 md:py-0">
            <div className="w-12 h-12 rounded-full bg-[#FF7A00] text-white flex items-center justify-center shrink-0 shadow-md">
              
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#1E1E1E]">500+ Projects</h4>
              <p className="text-xs text-[#777]">Completed</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 justify-center md:justify-end px-4">
            <div className="w-12 h-12 rounded-full bg-[#FF7A00] text-white flex items-center justify-center shrink-0 shadow-md">
              
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#1E1E1E]">Online 24/7</h4>
              <p className="text-xs text-[#777]">Support</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;