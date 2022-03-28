import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import CartPage from "./pages/CartPage";
import ConnexionPage from "./pages/ConnexionPage";
import Clients from "./pages/Clients";
import MealsDay from "./components/Feature/MealsDay";
import { Children } from "react";
import Workers from "./pages/Workers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="MealsDay" element={<MealsDay />} />
        </Route>

        <Route path="Restaurants" element={<Restaurants />}>
          <Route path="Restaurants/:id" element={<Restaurants />} />
        </Route>

        <Route path="Cartpage" element={<CartPage />}></Route>
        <Route path="/MealsDay" element={<MealsDay />} />
        <Route path="/Login" element={<ConnexionPage />} />
        <Route path="/Workers" element={<Workers />} />
        <Route path="/Clients" element={<Clients />} />
      </Routes>
    </>
  );
}

export default App;
