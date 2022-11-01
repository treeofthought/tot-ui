import { Link } from 'react-router-dom';
import Page from '../components/page.js';
import ExternalLink from '../components/external-link.js';

function ThisWebsite() {
  return(
    <Page>
      <h1 className="pageTitle">How I built this website</h1>
      <div className="textField">
        <h2>Architecture</h2>
        <h3>Front end</h3>
        <p>The front end is a React app originally generated via <code>npx create-react-app</code></p>
        <p><ExternalLink href="https://github.com/treeofthought/tot-ui">Source code is here</ExternalLink></p>
        <p>The styles are written by hand and roughly adhere to the <ExternalLink href="https://en.bem.info/methodology/quick-start/">BEM</ExternalLink> model of CSS.</p>

        <h3>Back end</h3>
        <p>The back end is a python flask app, the core design of which is derived from <ExternalLink href="https://github.com/miguelgrinberg/flasky">flasky</ExternalLink></p>
        <p><ExternalLink href="https://github.com/treeofthought/tot-api">Source code is here</ExternalLink></p>
        <p>
          To learn more about flasky, check out <ExternalLink href="https://www.amazon.com/Flask-Web-Development-Developing-Applications/dp/1491991739">this book</ExternalLink>. Or you
          can follow the <ExternalLink href="https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world">Flask Mega-Tutorial</ExternalLink>. 
        </p>

        <h3>Hosting / Deployment</h3>
        <p>I host the website in AWS, because that's what my company uses, so 
        new knowledge or AWS tools I build are applicable in both places.</p>
        <p>The flask app lives in Elastic beanstalk</p>
        <p>The react app is hosted in S3 and served via a Cloudfront distribution.</p>
      </div>
      <div className="blogPost__back"><Link to='/projects'>Projects</Link></div>
    </Page>
  )
}

export default ThisWebsite;