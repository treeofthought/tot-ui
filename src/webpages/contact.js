import Page from '../components/page.js';
import TwitterIcon from '../twitter.svg';
import RedditIcon from '../reddit.svg';
import LinkedInIcon from '../linkedin.svg';
import './contact.css';

function Social(props) {
  return(
    <div className="socialRow">
      <div className="socialWrapper">
        <img className="socialImage" src={props.icon} />
      </div>
      <a href={props.href} target="_blank">{props.children}</a>
    </div>  
  )
}

function Contact() {
  return(
    <Page title='Contact'>
      <h1 className="pageTitle">Contact</h1>
      <div className="textField">
        <Social icon={TwitterIcon} href="https://twitter.com/treeofthought1">
          @treeofthought1
        </Social>
        <Social icon={RedditIcon} href="https://www.reddit.com/user/tree-of-thought">
          u/tree-of-thought
        </Social>
        <Social icon={LinkedInIcon} href="https://www.linkedin.com/in/stuart-mason-8670aa112/">
          Stuart Mason
        </Social>
      </div>
    </Page>
  )
}

export default Contact;