import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Company from './components/Company';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Inquiry from './components/Inquiry';
import { MOCK_BLOG_POSTS, NAVER_BLOG_ID } from './constants';
import { BlogPost } from './types';
import { fetchNaverBlogPosts } from './services/naverService';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [projects, setProjects] = useState<BlogPost[]>([]);

  // Fetch Naver Blog posts on mount
  useEffect(() => {
    const loadNaverPosts = async () => {
      if (NAVER_BLOG_ID) {
        const naverPosts = await fetchNaverBlogPosts(NAVER_BLOG_ID);
        if (naverPosts.length > 0) {
          // Use only Naver Data
          setProjects(naverPosts);
        }
      }
    };

    loadNaverPosts();
  }, []);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      <main>
        <Hero onScrollDown={() => handleNavigate('projects')} />
        <Company />
        <ProjectGrid posts={projects} />
        <Inquiry />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;