import { Link } from 'react-router-dom';
import Page from '../components/page.js';

function Projects() {
  return(
    <Page title='Projects'>
      <h1 className="pageTitle">Projects</h1>
      <p>
        Stuff I want to share that I don't consider to be blog posts.
      </p>
      <div className="textField">
        <h2>Technology</h2>
        <ul>
          <li><Link to='/projects/this-website'>This website</Link></li>
        </ul>
        <h2>Music</h2>
        <h3>Live at West Orange</h3>
        <ul>
          <li><a href="https://soundcloud.com/user-914143480/harland-ember-live-in-west-orange-71522" target="_blank">Ember</a></li>
          <li><a href="https://soundcloud.com/user-914143480/harland-ill-remember-you-live-in-west-orange" target="_blank">I'll Remember You</a></li>
        </ul>
      </div>
    </Page>
  )
}

export default Projects;