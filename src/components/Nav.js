//import { Button } from "react-bootstrap";
//import Image from "react-bootstrap/Image";

//import { Link } from "react-router-dom";
//function Nav() {
  //return (
    //<nav>
      //<Link to="/">
        //<Image src="/img/MyIT.png" alt="myit icon" width={155} rounded={true} />
      //</Link>
    //  <Link to="/blogs">
    //    <Button>部落格</Button>
    //  </Link>

   //   <a href="https://discord.gg/myit" target="__blank">
   //     <Button>加入discord</Button>
    //  </a>
    //  <a href="https://github.com/My-IT-discord/myit" target="__blank">
   //     <Button>github源代碼</Button>
    //  </a>
    //</nav>
 // );
//}
//export default Nav;

/*
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../style.css';*/

/*
function BasicExample() {
  return (
    <>
    <div id="mainNavigation" className="top-nav">
  <nav role="navigation">
    <div className="py-3 text-center border-bottom">
      <img
        src="/static_files/images/logos/logo_3_white_2.png"
        alt=""
        className="invert"
      />
    </div>
  </nav>
  <div className="navbar-expand-md">
    <div className="navbar-dark text-center my-2">
      <button
        className="navbar-toggler w-75"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />{" "}
        <span className="align-middle">Menu</span>
      </button>
    </div>
    <div
      className="text-center mt-3 collapse navbar-collapse"
      id="navbarNavDropdown"
    >
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Book Hotel
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Destinations
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Policy
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Company
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

  </>
  
  );
}


export default BasicExample;*/

function BasicExample() {
  return (
    <>
    <section className="top-nav" id="nav">
      <div>{"{"}My-IT{"}"}程式討論區</div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul className="menu">
        <li className="nav-item">
    <a className="nav-link" id="links" aria-current="page" href="/">
      主頁
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="links" href="/aboutus">
      關於我們
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="links" href="https://discord.gg/U3DW4cNkMd">
      加入Discord
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      id="links"
      href="https://github.com/My-IT-discord/myit"
    >
      Github原代碼
    </a>
  </li>
      </ul>
    </section>
  </>
  
  );
}


export default BasicExample;

