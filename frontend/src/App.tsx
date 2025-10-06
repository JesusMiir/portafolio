import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectPage from "./pages/Project/ProjectPage";
import MobileHeader from "./components/header/MobileHeader";
import DesktopHeader from "./components/header/DesktopHeader";

/*
  This is what gets created when you build
  dist
    index.html
    public.svg
    vite.svg
    assets    <- not the same as assets in src
    | akjshdfjakdhf.js
    | aslkdjfaklsdf.css

  pages
    HomePage
    AboutPage
    ContactPage
    ProjectsPage
*/

function App() {
  return (
    <>
      <div className="container">
        <aside>
          <MobileHeader />
          <DesktopHeader />
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* <Route path="/**" element={}> */}
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
