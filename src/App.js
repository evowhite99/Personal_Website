import { Route, Routes, HashRouter } from "react-router-dom";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Dashboard } from "./pages/Dashboard";
import { Portfolio } from "./pages/Portfolio";
import { Info } from "./pages/Info";
import { Top20 } from "./pages/Top20";
import { Dreams } from "./pages/Dreams";
import { Game } from "./pages/Game";
import { Sales } from "./pages/Sales";

export function App() {
  const [language, setLanguage] = useState(
    () => window.localStorage.getItem("language") || "ES"
  );

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard language={language} />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="info" element={<Info />} />
          <Route path="top20" element={<Top20 />} />
          <Route path="dreams" element={<Dreams />} />
          <Route path="game" element={<Game />} />
          <Route path="sales" element={<Sales />} />
          <Route path="/" element={<Dashboard language={language} />} />
        </Routes>
      </HashRouter>
      <Footer language={language} />
    </div>
  );
}
