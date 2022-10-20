import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Picker } from "./components/Picker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Picker></Picker>
    </div>
  );
}

export default App;
