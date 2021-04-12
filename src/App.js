import "./App.css";
import ImportedComponent from "./components/ImportedComponent";
import RenderFunc from "./components/RenderFunc";
import Constructor from "./components/Constructor";
import GetDerivedStateFromProps from "./components/GetDerivedStateFromProps";
import ComponentDidMount from "./components/ComponentDidMount";
function App() {
  return (
    <div>
      <h1>Start React 200</h1>
      <p>html in jsx</p>
      <ComponentDidMount prop_value="componentDidMount" />
    </div>
  );
}

export default App;
