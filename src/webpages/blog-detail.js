import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Page from '../components/page.js';
import apiService from '../services/api-service.js';
import './blog.css';

function BlogDetail() {
  const slug = useParams().slug
  const [detail, setDetail] = useState({title: '', body: ''});

  useEffect(() => {
    const getDetail = async () => {
      const detail = await apiService.getBlog(slug)
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