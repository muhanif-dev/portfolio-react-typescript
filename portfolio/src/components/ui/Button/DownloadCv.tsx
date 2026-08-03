import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadCv = () => {
    return (
          <a
  href="/document/Muhammad Hanif's CV.pdf"
  download="Muhammad_Hanif_CV.pdf"
  className="group flex items-center justify-center gap-3 rounded-full border-2 border-orange-500 px-8 py-4 text-lg font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white cursor-pointer no-underline"
>
  Download CV
  <FontAwesomeIcon
    icon={faDownload}
    className="transition-transform duration-300 group-hover:translate-y-1"
  />
</a>
    );
}

export default DownloadCv;