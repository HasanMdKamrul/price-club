import "./App.css";
import AssignmentMarks from "./components/AssignmentMarks/AssignmentMarks";
import NavBarReDesign from "./components/NavBarRedeisgn/NavBarReDesign";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <NavBarReDesign />
      <Pricing />
      <AssignmentMarks />
    </div>
  );
}

export default App;
