import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./HeaderStyles.css";
function Header(props){

    return <div className={props.colorChange ? "header color-change":"header"}>
        <nav className="nav-bar">
            <img src={logo} className="logo"></img>
            <ul className="menu-items">
                <li><Link to="/work"> Work</Link></li>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/about"> About</Link></li>
            </ul>
            <Link to="/contact"><button>Contact </button></Link>
        </nav>

    </div>;
}

export default Header;