import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import "./scss/app.scss";

const Cart = React.lazy(() => import("./pages/Cart"));
const FullPizza = React.lazy(() => import("./pages/FullPizza"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<Preloader />}>
              {" "}
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<Preloader />}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Preloader />}>
              <NotFound />{" "}
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
