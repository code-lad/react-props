import logo from '../logo.svg';
import '../App.css';

const reactLogo = <img src={logo} alt='logo'/>
const title  = <h1>Full Stack Dev</h1>
function Header(){
return(
  <div className="Header">
<div className="logo">{reactLogo} {title}</div>
  </div>
)
}

export default Header;