import "./App.css";
import ImportedComponent from "./components/ImportedComponent";
import RenderFunc from "./components/RenderFunc";
import Constructor from "./components/Constructor";
import GetDerivedStateFromProps from "./components/GetDerivedStateFromProps";

function App() {
  return (
    <div>
      <h1>Start React 200</h1>
      <p>html in jsx</p>
      <GetDerivedStateFromProps prop_value="getDerievedStateFromProps" />
    </div>
  );
}

export default App;
