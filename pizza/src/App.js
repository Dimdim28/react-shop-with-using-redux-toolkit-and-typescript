import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
