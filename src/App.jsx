import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FooterSection from "./pages/FooterSection";

import Home from "./pages/Home";
import Getinvolved from "./components/GetInvolved";
import Aboutus from "./components/Aboutus";
import KeyFocus from "./pages/KeyFocus";
import Team from "./pages/Team";
import Collabrations from "./pages/Collabrations";
import Impactstories from "./components/ImpactStories";
import ProgressSection from "./pages/ProgressSection";
import Supportour from "./components/Supportour";
import FAQSection from "./pages/FAQSection";

import AbtDetailed from "./components/AboutDetailed";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center font-inria overflow-x-hidden">
      <Header />

      {/* Routing */}
      <Routes>
        {/* Home Page (All sections) */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Getinvolved />
              <Aboutus />
              <KeyFocus />
              <Impactstories />
              <Team />
              <Collabrations />
              <ProgressSection />
              <Supportour />
              <FAQSection />
              <FooterSection />
            </>
          }
        />

        {/* About Detailed/Campaign Page */}
        <Route
          path="/Campaign"
          element={
            <>
              <AbtDetailed />
              <FooterSection />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
