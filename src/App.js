import logo from "./logo.svg";
import "./App.css";
import { ReactUseState } from "./useEffect";
import { Challenge } from "./usestare_challange/effectchallange";

function App() {
  return (
    <div className="App">
      <ReactUseState />
      <Challenge />
    </div>
  );
}

export default App;
