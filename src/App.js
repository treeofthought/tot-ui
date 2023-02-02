import { Routes, Route } from "react-router-dom";
// import Page from './components/page.js';
// import About from './webpages/about.js';
// import Blog from './webpages/blog.js';
// import BlogDetail from './webpages/blog-detail.js';
// import Contact from './webpages/contact.js';
import Index from './webpages/index.js';
import SuperBowlExcitement from './webpages/superbowl-excitement.js';
import SuperBowlExcitementMethods from './webpages/superbowl-excitement-methods.js';
// import Projects from './webpages/projects.js';
// import ThisWebsite from './webpages/this-website.js';

function App() {
  return (
    <div className="container d-flex flex-column gap-4 pt-5">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/superbowl-excitement" element={<SuperBowlExcitement />} />
        <Route path="/superbowl-excitement/methods" element={<SuperBowlExcitementMethods />} />
  {/*//       <Route path="/" element={<Index />} />
  //       <Route path="/projects" element={<Projects />} />
  //       <Route path="/projects/this-website" element={<ThisWebsite />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/blog" element={<Blog />} />
  //       <Route path="/blog/:slug" element={<BlogDetail />} />*/}
       </Routes>
     </div>
    
  );
}

export default App;
