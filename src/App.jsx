import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Butterfly from "./components/Butterfly";
// External URL - MUST be a string variable, NOT an import
const userIMG1 = "https://images.pexels.com/photos/8185815/pexels-photo-8185815.jpeg";

// Local assets - Use relative paths with ./
import userIMG2 from "./assets/SVG8.webp";
import userIMG3 from "./assets/woman-hi-ai-heart.png";
import userIMG4 from "./assets/woman-ai-mirror.png";

const App = () => {
  const users = [
    { img: userIMG1, num: "1", Tag: "Satisfied", para:"" },
    { img: userIMG2, num: "2", Tag: "Underserving", para:""},
    { img: userIMG3, num: "3", Tag: "Complete", para:"" },
    { img: userIMG4, num: "4", Tag: "Declare", para:"" }
  ];

  return (
    <div className="min-h-screen">
      <Butterfly/> 
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;