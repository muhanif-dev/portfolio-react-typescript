import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<SkillPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;