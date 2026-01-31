import { Routes, Route } from "react-router";
import { MainPage } from "./pages/MainPage";
import { RegisterPage } from "./pages/RegisterPage";
import { useState } from "react";
import cards from "./cards.json";
import { CardPage } from "./pages/CardPage";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="cards/:id" element={<CardPage cards={cards} />} />
        <Route path="registration" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
