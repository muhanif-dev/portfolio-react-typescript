import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

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

        <button className="group flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600">

          Hire Me

          <FontAwesomeIcon
            icon={faArrowRight}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

        </button>

        {/* Download CV */}

        <button className="group flex items-center justify-center gap-3 rounded-full border-2 border-orange-500 px-8 py-4 text-lg font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white">

          Download CV

          <FontAwesomeIcon
            icon={faDownload}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />

        </button>

      </div>

    </div>
  );
};

export default HeroContent;