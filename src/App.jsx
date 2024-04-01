import { GiWorld } from "react-icons/gi";
import { AiTwotoneFilePdf } from "react-icons/ai";
import { GiSittingDog } from "react-icons/gi";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css"
import Register from "./components/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Register/>
   </div>
  );
}

export default App;
