import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HireMe = () => {
    return (
<NavLink
  to="/contact"
  className="group flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 cursor-pointer no-underline"
>
  Hire Me
  <FontAwesomeIcon
    icon={faArrowRight}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</NavLink>
    )
}

export default HireMe;