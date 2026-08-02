const HeroImage = () => {
  return (
    <div className="relative order-1 flex items-center justify-center lg:order-2">

      {/* Background Glow */}

      <div className="absolute h-[430px] w-[430px] rounded-full bg-orange-300/30 blur-3xl"></div>

      {/* Main Orange Circle */}

      <div className="relative flex h-[380px] w-[380px] items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_20px_60px_rgba(249,115,22,0.45)] md:h-[450px] md:w-[450px]">

        {/* Decorative Circle Top */}

        <div className="absolute left-10 top-10 h-6 w-6 rounded-full border-2 border-white/60"></div>

        {/* Decorative Circle Bottom */}

        <div className="absolute bottom-14 right-10 h-10 w-10 rounded-full border-4 border-orange-200"></div>

        {/* Decorative Dot */}

        <div className="absolute right-16 top-20 h-3 w-3 rounded-full bg-white"></div>

        {/* Profile Image */}

        <div className="relative z-10 h-[400px] w-[400px] overflow-hidden rounded-full">

  <img
    src="/images/profile.png"
    alt="Muhammad Hanif"
    className="h-full w-full object-cover"
  />

</div>
      </div>
    </div>
  );
};

export default HeroImage;