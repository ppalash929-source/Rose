import RightPage from "./RightPage"
const Right = (props) => {
  return (
    <div className="w-full md:w-2/3 flex overflow-x-auto flex-nowrap gap-4 sm:gap-6 md:gap-10 px-2 pb-3
      [scrollbar-width:none]
      [-ms-overflow-style:none]
      [&::-webkit-scrollbar]:hidden">
      {props.users.map(function(element){
        return <RightPage key={element.num} img={element.img} tag={element.Tag} num={element.num} para={element.para}/>
      })}
    </div>
  )
}

export default Right
