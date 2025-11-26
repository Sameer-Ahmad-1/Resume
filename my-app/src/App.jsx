import "./App.css";
import { useState } from "react";
import { NavbarDemo } from "./component/ui/navBar";
import { SignupFormDemo } from "./component/ui/signup";
import { LoginFormDemo } from "./component/ui/login";
import { FeaturesSectionDemo } from "./component/ui/feature";
import { TypewriterEffectSmoothDemo } from "./component/ui/hero";
import { TracingBeamDemo } from "./component/ui/about";
import Footer from "./component/ui/footer";
import { ExpandableCardDemo } from "./component/ui/card-skill";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleNavClick = (section) => {
    console.log("Navigation clicked:", section);
    setActiveSection(section);

    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar at top */}
      <NavbarDemo onNavClick={handleNavClick} />

      {/* Hero directly visible, no section wrapper */}
      <div id="hero" className="px-4 pt-8 pb-2">
        {" "}
        {/* You can tweak pt-8 to reduce top spacing */}
        <TypewriterEffectSmoothDemo />
      </div>

      {/* Conditional Sections */}
      {activeSection === "signup" && (
        <section id="signup" className="px-4 py-16">
          <SignupFormDemo />
        </section>
      )}

      {activeSection === "login" && (
        <section id="login" className="px-4 py-16">
          <LoginFormDemo />
        </section>
      )}

      {activeSection === "feature" && (
        <section id="feature" className="px-4 py-16">
          <FeaturesSectionDemo />
        </section>
      )}
      {activeSection === "about" && (
        <section id="about" className="px-4 py-16">
          <TracingBeamDemo />
        </section>
      )}
      {/* <MultiStepLoaderDemo id="skills"/> */}

      <ExpandableCardDemo />

      <Footer />
    </div>
  );
}

export default App;
