import React from "react";
import Header from "./components/Header";
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

const App = () => {
  return (
    <div className="min-h-screen w-full flex justify-start flex-col items-center font-inria  overflow-x-hidden">
      {/* Header Page */}
      <Header />
      {/* Home Page */}
      <Home />
      {/* Get Involved Page */}
      <Getinvolved />
      {/* About us Page */}
      <Aboutus />
      {/* Key focus Page */}
      <KeyFocus />
      {/* impact Page */}
      <Impactstories />\{/* team Page */}
      <Team />
      {/* Collab Page */}
      <Collabrations />
      {/* progress Page */}
      <ProgressSection />
      {/* support Page */}
      <Supportour />

      <FAQSection />
    </div>
  );
};

export default App;
