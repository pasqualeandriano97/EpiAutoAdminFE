import "./App.css";
import "../custom.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarComponent1 from "../src/components/Navbar/NavBarComponent1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rent from "./components/Rent/RentComponent";
import HomePage from "./components/Navbar/HomePage";
import AppointmentComponent from "./components/Appointment/AppointmentComponent";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBarComponent1 />
      </header>
      <main className="root">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/appointment" element={<AppointmentComponent />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
