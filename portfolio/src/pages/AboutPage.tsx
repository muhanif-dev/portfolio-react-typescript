
const AboutPage = () => {
  return (
    <section className="bg-[#0b0f19] min-h-screen font-sans text-white flex items-center justify-center px-6 py-16 rounded-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Image with Decorative Shapes */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          {/* Top-Left Orange Circle */}
          <div className="absolute w-24 h-24 bg-[#FF6A3D] rounded-full top-4 left-6 z-0"></div>
          
          {/* Bottom-Right Yellow/Peach Circle */}
          <div className="absolute w-20 h-20 bg-[#FFD175] rounded-full bottom-8 right-6 z-0"></div>

          {/* Main Circular Frame with Orange Border */}
          <div className="relative z-10 w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full border-4 border-[#FF6A3D] overflow-hidden bg-gray-800 shadow-2xl flex items-center justify-center">
            <img 
              src="/images/profile.png" 
              alt="Profile" 
              className="w-full h-full object-cover scale-105"
            />
          </div>
        </div>

        {/* Right Column: Content Details */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Section Badge */}
          <span className="inline-block border border-gray-700 text-gray-300 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase">
            About Me
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Get a website that will make a lasting impression on your audience!!!
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Info Card Grid */}
          <div className="bg-[#121826] border border-gray-800/60 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-inner">
            
            {/* Name */}
            <div>
              <h4 className="text-[#FF6A3D] font-semibold text-sm">Name:</h4>
              <p className="text-white font-medium mt-1">Muhammad Hanif</p>
            </div>

            {/* Phone */}
            <div>
              <h4 className="text-[#FF6A3D] font-semibold text-sm">Phone:</h4>
              <p className="text-white font-medium mt-1">+92 3295258847</p>
            </div>

            {/* Email */}
            <div>
              <h4 className="text-[#FF6A3D] font-semibold text-sm">Email:</h4>
              <p className="text-white font-medium mt-1">muhanif.dev@gmail.com</p>
            </div>

            {/* Twitter */}
            <div>
              <h4 className="text-[#FF6A3D] font-semibold text-sm">Twitter:</h4>
              <p className="text-white font-medium mt-1">muhanif801</p>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#FF6A3D] hover:bg-[#e05b31] text-white font-medium px-7 py-3 rounded-xl transition shadow-lg shadow-orange-600/20 flex items-center gap-2 text-sm">
              Contact me <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="border border-[#FF6A3D] text-[#FF6A3D] hover:bg-[#FF6A3D]/10 font-medium px-6 py-3 rounded-xl transition flex items-center gap-2 text-sm">
              Download my resume <i className="fa-solid fa-download"></i>
            </button>
          </div>

        </div>

      </div>
    </section>);

};

export default AboutPage;