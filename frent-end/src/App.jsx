import "bootstrap/dist/css/bootstrap.min.css";
import Exemple from "./components/Home/Exemple";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Acceuil from "./components/Home/Acceuil";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/navbar" element={<Exemple />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
