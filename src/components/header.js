import { Link } from 'react-router-dom';
import TreeIcon from '../tree.svg';
import './header.css';

function NavItem(props) {
  return(
    <Link {...props}>
      <div className="header__navItem">{props.children}</div>
    </Link>
  )
}

function Header() {
  return(
    <div className="header">
      <div className="header__logoWrap">
        <img className="headerIcon" src={TreeIcon}
           alt="Tree by ka reemov from thenounproject.com"
           title="Tree by ka reemov from thenounproject.com" />
        <Link to='/'><h1>Tree of Thought</h1></Link>
      </div>
      <div className="header__nav">
        <NavItem to='/blog'>Blog</NavItem>
        <NavItem to='/projects'>Projects</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/contact'>Contact</NavItem>
      </div>
    </div>
  )
}

export default Header;
