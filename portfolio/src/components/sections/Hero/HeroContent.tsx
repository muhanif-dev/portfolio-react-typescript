
import DownloadCv from "../../ui/Button/DownloadCv";
import HireMe from "../../ui/Button/HireMe";

const HeroContent = () => {
  return (
    <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

      {/* Greeting */}

      <p className="mb-4 text-lg font-semibold uppercase tracking-[4px] text-orange-500">
        Hello I'm
      </p>

      {/* Name */}

      <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
        Muhammad
        <br />
        <span className="text-orange-500">Hanif</span>
      </h1>

      {/* Profession */}

      <h2 className="mt-6 text-2xl font-semibold text-slate-700 md:text-3xl">
        Frontend Developer
      </h2>

      {/* Description */}

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        Passionate Frontend Developer who loves building modern,
        responsive and user-friendly web applications using React,
        TypeScript and modern web technologies. I enjoy turning ideas
        into interactive digital experiences.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-5 mb-16 sm:flex-row">

        {/* Hire Me */}
        <HireMe />


        {/* Download CV */}
        <DownloadCv />
      

      </div>

    </div>
  );
};

export default HeroContent;