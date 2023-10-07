import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Dashboard } from "./pages/Dashboard";
import { MusicGame } from "./pages/MusicGame";
import { Dreams } from "./pages/Dreams";

export function App() {
  const [language, setLanguage] = useState(
    () => window.localStorage.getItem("language") || "ES"
  );

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Dashboard language={language} />} />
        <Route path="music&games" element={<MusicGame language={language} />} />
        <Route path="dreams" element={<Dreams language={language} />} />
        <Route path="/" element={<Dashboard language={language} />} />
      </Routes>
      <Footer language={language} />
    </div>
  );
}
