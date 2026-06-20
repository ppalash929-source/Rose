import { TiHeart } from "react-icons/ti";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-4 sm:px-8 md:px-18 bg-gray-900">
        <h4 className="bg-blue-200 text-xs sm:text-s font-bold text-red-800 px-3 sm:px-6 py-2 rounded-full">
            Target Audience
        </h4>
        <div className="text-4xl sm:text-5xl text-[#de1d3dd5] font-bold">
            <TiHeart />
        </div>
        <button className="bg-gray-300 tracking-wider font-medium font-serif text-black text-xs px-3 sm:px-6 py-2 rounded-full hover:bg-red-300 transition">
        Skill Based Platform
        </button>
    </div>
  )
}

export default Navbar;
