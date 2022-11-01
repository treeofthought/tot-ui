import { Link } from 'react-router-dom';
import Page from '../components/page.js';
import ExternalLink from '../components/external-link.js';

function About() {
  return(
    <Page title='About'>
      <h1 className="pageTitle">About</h1>
      <p>
        Who am I and what are we doing here?
      </p>
      <div className="textField">
        <p>My name is Stuart Mason.</p>
        <p>This is my blog and also digital portfolio.</p>
        <p>
          I am CTO and co-founder of <Link to='https://www.sunboundhomes.com'>Sunbound</Link>, a company which seeks to
          simplify and provide flexibility to rent payments for senior care
          facilities.
        </p>
        <p>
          Being the sole technical resource at a company for a year forced me
          to hone a lot of different skills at once. In particular, I've
          built a few APIs and React front ends now, and developed a compulsion
          to document and create systems for every project.
        </p>
        <p>
          I've decided to migrate my blog from wordpress to this homemade
          solution. This gives me the flexibility to host anything, not just
          blog posts.
        </p>
        <p>
          If I do it right, this place becomes a hub for all my different pursuits!
        </p>
        <h2>Credits</h2>
        "Tree" icon by ka reemov from <ExternalLink href="https://thenounproject.com/browse/icons/term/tree">Noun Project</ExternalLink>
      </div>
    </Page>
  )
}

export default About;