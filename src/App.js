import "./App.css";
import ImportedComponent from "./components/ImportedComponent";
import RenderFunc from "./components/RenderFunc";
import Constructor from "./components/Constructor";
import GetDerivedStateFromProps from "./components/GetDerivedStateFromProps";
import ComponentDidMount from "./components/ComponentDidMount";
import ShouldComponentUpdate from "./components/ShouldComponentUpdate";
import ES6 from "./components/ES6.js";

function App() {
  return (
    <div>
      <h1>Start React 200</h1>
      <p>html in jsx</p>
      <ES6 />
    </div>
  );
}

export default App;
