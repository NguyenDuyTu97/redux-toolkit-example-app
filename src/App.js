import { Counter } from "@pages/counter/Counter";
import Dashboard from "@pages/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}

      <Counter />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
