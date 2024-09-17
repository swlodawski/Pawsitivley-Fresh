import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import Nav from "../Nav/Nav";


export default function Header() {
  return (
    <div id="header">
      <div id="logo">
        <Link to="/">
        <img src={logo} />
        </Link>
      </div>
      <Nav />
    </div>
  );
}
