import Navbar from "./Navbar"
import Page1 from "./Page1"
const Section1 = (props) => {
  console.log(props.users);
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Page1 users={props.users}/>
    </div>
  )
}

export default Section1