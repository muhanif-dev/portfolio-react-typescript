import {
  faAward,
  faBriefcase,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroStats = () => {
  return (
    <div className="relative -mt-8 z-20 mx-auto max-w-5xl">
      <div className="grid grid-cols-1 gap-6 rounded-3xl bg-white p-8 shadow-2xl md:grid-cols-3">

        {/* Experience */}

        <div className="group flex items-center gap-5 rounded-2xl p-4 transition-all duration-300 hover:bg-orange-50">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl text-orange-500 transition-transform duration-300 group-hover:scale-110">
            <FontAwesomeIcon icon={faAward} />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              2+
            </h2>

            <p className="text-slate-600">
              Years Experience
            </p>
          </div>

        </div>

        {/* Projects */}

        <div className="group flex items-center gap-5 rounded-2xl p-4 transition-all duration-300 hover:bg-orange-50">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl text-orange-500 transition-transform duration-300 group-hover:scale-110">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              15+
            </h2>

            <p className="text-slate-600">
              Completed Projects
            </p>
          </div>

        </div>

        {/* Client Satisfaction */}

        <div className="group flex items-center gap-5 rounded-2xl p-4 transition-all duration-300 hover:bg-orange-50">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl text-orange-500 transition-transform duration-300 group-hover:scale-110">
            <FontAwesomeIcon icon={faFaceSmile} />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              100%
            </h2>

            <p className="text-slate-600">
              Client Satisfaction
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HeroStats;