import BodyContent from './components/BodyContent.js'
import SideBar from './utils/Sidebar/SideBar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from '../src/components/Home'
import Profile from '../src/components/Profile/profile'
import About from '../src/components/About/about'
import Portfolio from './components/Portfolio/portfolio.js'
import Blogs from './components/Blogs/blogs'


function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blogs" component={Blogs} />
    </div>
    </BrowserRouter>
  );
}

export default App;
