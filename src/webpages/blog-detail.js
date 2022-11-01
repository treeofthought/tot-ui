import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Page from '../components/page.js';
import './blog.css';

function BlogDetail() {
  const slug = useParams().slug
  const [detail, setDetail] = useState({title: '', body: ''});

  useEffect(() => {
    const getDetail = async () => {
      const response = await fetch(`http://127.0.0.1:5000/blogs/${slug}`)
      const detail = JSON.parse(await response.text())
      setDetail(detail)
    }
    getDetail()
  }, [slug])

  return(
    <Page>
      <h1>{detail.title}</h1>
      <div className="textField">
        <ReactMarkdown className="blogPost__blogBody">{detail.body}</ReactMarkdown>
      </div>
      <div className="blogPost__back"><Link to='/blog'>Blogs</Link></div>
    </Page>
  )
}

export default BlogDetail;