import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/page.js';
import './blog.css'

function BlogCard(props) {
  const { title, preview, date, blogSlug } = props.blog;
  return(
    <div className="blogCard">
      <div className="blogCard__header">
        <Link to={`/blog/${blogSlug}`}><h1>{title}</h1></Link>
        <h2>{date}</h2>
      </div>
      <p>{preview}</p>
    </div>
  )
}

function Blog() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const getBlogList = async () => {
      const response = await fetch('http://127.0.0.1:5000/blog-list')
      const list = JSON.parse(await response.text())
      setBlogList(list)
    }
    getBlogList()
  }, [])

  return(

    <Page title='Blog'>
      <h1 className="pageTitle">All Posts</h1>
      {blogList.map((blog, index) => 
        <BlogCard blog={blog} key={index}/>
      )}
    </Page>
    
  )
}

export default Blog;
