const RightPage = (props) => {
  return (
    <div className="h-full shrink-0 w-52 sm:w-64 md:w-80 overflow-hidden relative rounded-3xl sm:rounded-4xl shadow-2xl ring-1 ring-black/5 overscroll-contain
  will-change-transform
  transform-gpu
  [scrollbar:none]
  [-ms-overflow-style:none]
  [&::-webkit-scrollbar]:hidden">
      
      {/* Image */}
      <img 
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" 
        src={props.img}
        alt="woman"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>
     
      <div className="absolute top-0 left-0 h-full w-full p-3 sm:p-6 flex flex-col justify-between">
        
        {/* Number Badge */}
        <h1 className="bg-white shadow-md rounded-full h-8 w-8 sm:h-12 sm:w-12 font-serif text-base sm:text-2xl flex items-center justify-center text-gray-800">
          {props.num}
        </h1>
     
        <div className="text-white space-y-2 sm:space-y-4">
          <p className="font-serif text-xs sm:text-sm leading-relaxed text-gray-100 drop-shadow-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quam temporibus dolor esse obcaecati voluptatum.
          </p>
          
          {/* Button */}
          <button className="bg-linear-to-r from-pink-500 to-red-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:-translate-y-1">
            {props.tag}
          </button>     
        </div>
      </div>
    </div>
  )
}

export default RightPage
