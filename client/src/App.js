import "./App.css";
import SignUpForm from "./Components/SignUpForm";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { useEffect, useState } from "react";
import Courses from "./Components/Courses";
import Units from "./Components/Units";

function App() {
   const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/sign-up" element={<SignUpForm />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/courses/units/:id" element={<Units />}></Route>
      </Routes>
    </div>
  );
}

export default App;
