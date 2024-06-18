import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Counter } from "@pages/counter/Counter";
import Dashboard from "@pages/dashboard";

function App() {
  return (
    <div className="App">
      {/* <h2> Redux toolkit </h2> */}
      <Counter />
      <Dashboard />
      <ToastContainer />
    </div>
  );
}

export default App;
