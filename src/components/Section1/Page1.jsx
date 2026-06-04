import Right from "./Right"
import Left from "./Left"

const Page1 = (props) => {
  return (
    <div className="py-6 sm:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-20 min-h-[90vh] bg-white px-4 sm:px-8 md:px-18">
        <Left/>
        <Right users={props.users}/>
    </div>
  )
}

export default Page1
