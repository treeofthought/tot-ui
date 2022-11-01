import { useEffect, useState } from 'react';
import Page from '../components/page.js';
import { Link } from 'react-router-dom';

function Index() {
  const [latestBlog, setLatestBlog] = useState({title: '', preview: '', date:'', blogSlug:''});

  useEffect(() => {
    const getLatestBlog = async () => {
      const response = await fetch('http://127.0.0.1:5000/blog-latest')
      const list = JSON.parse(await response.text())
      
      setLatestBlog(list)
    }
    getLatestBlog()
  }, [])

  return(
    <Page title = 'Home'>
    <h1>Tree of Thought</h1>
      <div className="textField">
        <h2>Latest blog post</h2>
        <h3><Link to={`blog/${latestBlog.blogSlug}`}>{latestBlog.title}</Link></h3>
        <p>{latestBlog.preview}</p>
        <h2>Featured projects</h2>
        <h3><Link to='/projects/this-website'>This website</Link></h3>
        <p>A write up about how I built, host, and maintain this website.</p>
      </div>
    </Page>)
}

export default Index;