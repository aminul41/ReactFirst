import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import BioData from "./component/BioData";
// import Counter from "./component/Counter.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Note /> */}
    {/* <Counter /> */}
    {/* <BioData country="Bangladesh" name="Aminul" age={30} /> */}
    <App />
  </StrictMode>
);
