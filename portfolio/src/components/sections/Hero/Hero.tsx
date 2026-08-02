import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroState from "./HeroState";

const Hero = () => {
  return (
    <section className="bg-[#FFF8F4] rounded-xl">
      <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-10">

        {/* Hero */}

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

        <HeroState />

      </div>
    </section>
  );
};

export default Hero;