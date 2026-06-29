import { TiHeart } from "react-icons/ti";

const HeroText = () => {
  return (
    <div className="relative h-full w-full flex flex-col justify-center p-4 sm:p-10">
      
      {/* Artistic Heading with Floating Heart */}
      <div className="relative z-10">
        <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[0.9] tracking-tight text-gray-800">
          Knowledge <br />
          <span className="ml-6 sm:ml-12 bg-[linear-gradient(to_right,#ff6b6b,#c44569,#f8b500)] bg-clip-text text-transparent italic">
            Elegance
          </span>
          <br />
          <span className="text-2xl sm:text-4xl md:text-5xl text-gray-600 font-light">
            & Curiosity 
          </span>
        </h3>
        
        {/* Floating decorative heart */}
        <TiHeart className="relative -top-3 -right-6 text-5xl sm:text-8xl rotate-12 animate-soft-glow" />
      </div>

      {/* The "Glass" Note Card */}
      <div className="mt-6 sm:mt-12 max-w-md relative">
        <div className="bg-white/60 backdrop-blur-md border border-white/50 shadow-xl rounded-2xl p-4 sm:p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
          <p className="text-sm sm:text-lg text-gray-700 font-serif leading-relaxed">
            Explore our curated collection of <span className="font-bold text-[#cc2727]">Semester Notes</span>. 
            Designed to help you study without hurdles.
          </p>
        </div>
        
        {/* Decorative line and corner heart */}
        <div className="flex items-center gap-4 mt-4 sm:mt-6 ml-4">
            <hr className="w-12 sm:w-16 border-[#cc2727] border-2" />
            <TiHeart className="text-[#cc2727] text-3xl sm:text-4xl animate-pulse" />
        </div>
      </div>

    </div>
  )
}

export default HeroText
