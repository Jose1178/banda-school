import "./App.css";
import SignUpForm from "./Components/SignUpForm";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { useEffect, useState, createContext } from "react";
import Courses from "./Components/Courses";
import Units from "./Components/Units";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import ResetPassword from "./Components/ResetPassword";
import Admin from "./Components/Admin";

export const UserContext = createContext();
function App() {
   const [user, setUser] = useState(false);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.status === 200) {
        response.json().then((user) => setUser(true));
      }
    });
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/sign-up" element={<SignUpForm />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/courses/units/:id" element={<Units />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
