// import { useEffect, useState } from 'react';
// import Page from '../components/page.js';
// import apiService from '../services/api-service.js';
// import { Link } from 'react-router-dom';

function Index() {
  // const [latestBlog, setLatestBlog] = useState({title: '', preview: '', date:'', blogSlug:''});

  // useEffect(() => {
  //   const getLatestBlog = async () => {
  //     const list = await apiService.getLatestBlog();
  //     setLatestBlog(list)
  //   }
  //   getLatestBlog()
  // }, [])

  // return(
  //   <Page title = 'Home'>
  //   <h1>Tree of Thought</h1>
  //     <div className="textField">
  //       <h2>Latest blog post</h2>
  //       <h3><Link to={`blog/${latestBlog.blogSlug}`}>{latestBlog.title}</Link></h3>
  //       <p>{latestBlog.preview}</p>
  //       <h2>Featured projects</h2>
  //       <h3><Link to='/projects/this-website'>This website</Link></h3>
  //       <p>A write up about how I built, host, and maintain this website.</p>
  //     </div>
  //   </Page>)

  return(
    <>
      <h1 className="text-center">Tree of Thought</h1>
      <div className="col-md-10 offset-md-1 rounded p-3 shadow bg-light">
        <p>My name is Stuart Mason.</p>
        <p>I don't know what this website is yet. Part blog, part digital portfolio, maybe.</p>
        <p>I'm working on a data science project that has to do with <a href="/superbowl-excitement">quantifying the excitement of Super Bowls</a>. (It's just a draft, so for now, you need the password to see it!)</p>
        <p>You can follow me on twitter: <a href="https://twitter.com/treeofthought1" target="_blank" rel="noreferrer">@treeofthought1</a></p>
      </div>
    </>
  )
}

export default Index;