import Header from './header.js';
import './page.css';

function Page(props) {
  const title = props.title ? 'Tree of Thought - ' + props.title : 'Tree of Thought'
  document.title = title
  return(
    <div className="page">
      <Header />
        <div className="content">
          {props.children}
        </div>
    </div>
  )
}

export default Page;
