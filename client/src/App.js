import "./App.css";
import SignUpForm from "./Components/SignUpForm";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { useEffect, useState } from "react";

function App() {
  // const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => console.log(user));
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/sign-up" element={<SignUpForm />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
