import logo from "./logo.svg";
import "./App.css";
import { Parent } from "./components/Parent";
import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(true);
  function showParentComponent() {
    setIsShow(!isShow);
  }

  return (
    <div className="App">
      <button onClick={showParentComponent}>Show Parent Component</button>
      {isShow && <Parent></Parent>}
    </div>
  );
}

export default App;
