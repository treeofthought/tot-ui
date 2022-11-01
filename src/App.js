import { Routes, Route } from "react-router-dom";
import Page from './components/page.js';
import About from './webpages/about.js';
import Blog from './webpages/blog.js';
import BlogDetail from './webpages/blog-detail.js';
import Contact from './webpages/contact.js';
import Index from './webpages/index.js';
import Projects from './webpages/projects.js';
import ThisWebsite from './webpages/this-website.js';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/this-website" element={<ThisWebsite />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
    </Routes>
    
  );
}

export default App;
