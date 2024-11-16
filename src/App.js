import logo from "./logo.svg";
import "./App.css";
import { ReactUseState } from "./useEffect";
import { Challenge } from "./usestare_challange/effectchallange";
import { Cleanup } from "./usestare_challange/cleanup";
import { Howtonotfetchapi } from "./usestare_challange/hownottofextapi";

function App() {
  return (
    <div className="App">
      {/* <ReactUseState /> */}
      {/* <Challenge /> */}
      {/* <Cleanup /> */}
      <Howtonotfetchapi />
    </div>
  );
}

export default App;
