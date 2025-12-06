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
import ScrollToTop from "./components/Scrolltotop";
import AbtDetailed from "./components/AboutDetailed";
import DonateAndSupport from "./pages/DonateAndSupport";
import Blog from "./pages/Blog";
import MediaGallery from "./pages/MediaGallery";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center font-inria overflow-x-hidden">
      <Header />

      <ScrollToTop></ScrollToTop>
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
        {/* donate and support */}
        <Route
        path="/DonateAndSupport"
        element={
          <>
          <DonateAndSupport/>
          <FooterSection/>
          </>
        }
        />
        {/* Blog */}
         <Route
        path="/Blog"
        element={
          <>
          <Blog/>
          <FooterSection/>
          </>
        }
        />
        {/* Media Gallery */}
         <Route
        path="/Media"
        element={
          <>
          <MediaGallery />
          <FooterSection/>
          </>
        }
        />
      </Routes>
    </div>
  );
};

export default App;
