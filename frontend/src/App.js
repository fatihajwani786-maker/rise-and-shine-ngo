import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import main layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Import all page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage'; // The new detail page
import MediaPage from './pages/MediaPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import BlogPage from './pages/BlogPage';
import DonatePage from './pages/DonatePage';

function App() {
  return (
    <BrowserRouter>
      {/* Header and Footer will be on EVERY page */}
      <Header />
      
      <main>
        {/* The router will swap the component here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          
          {/* This is the crucial line for your project details */}
          <Route path="/projects/:id" element={<ProjectDetailPage />} /> 
          
          <Route path="/media" element={<MediaPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;