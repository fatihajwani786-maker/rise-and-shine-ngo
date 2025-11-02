import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import main layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Import page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage'; 
import ContactPage from './pages/ContactPage'; 
import ProjectsPage from './pages/ProjectsPage'; 
import MediaPage from './pages/MediaPage'; 
import GetInvolvedPage from './pages/GetInvolvedPage'; 
import BlogPage from './pages/BlogPage'; 
import DonatePage from './pages/DonatePage'; //
// We will add more pages here later (e.g., Programs, Contact)

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/donate" element={<DonatePage />} />
          {/* Add routes for other pages here */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;