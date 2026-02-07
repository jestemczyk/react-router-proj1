import { Link, Routes, Route } from "react-router";
import { MainPage } from "./pages/MainPage";
import { RegisterPage } from "./pages/RegisterPage";
import { useState } from "react";
import cards from "./cards.json";
import { CardPage } from "./pages/CardPage";
import { createBrowserHistory } from "history";
import { PrivateRoute } from "./pages/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/"></Route>
        <Route index element={<MainPage />} />
        <Route path="registration" element={<RegisterPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="cards/:id" element={<CardPage cards={cards} />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h1>404: {window.location.pathname}</h1>
              <Link to={"/"}>
                <button>На главную</button>
              </Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
