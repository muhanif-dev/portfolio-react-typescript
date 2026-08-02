const Hero = () => {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 md:flex-row">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-4 text-orange-500 font-medium">
            Hello, I'm
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
            Muhammad Hanif
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-slate-300">
            Frontend Developer
          </h2>

          <p className="max-w-xl text-lg leading-8 text-slate-400">
            I build modern, responsive and user-friendly web applications
            using React, TypeScript and modern frontend technologies.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex flex-1 justify-center">
          <img
            src="/images/profile.png"
            alt="Muhammad Hanif"
            className="h-80 w-80 rounded-full border-4 border-orange-500 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;