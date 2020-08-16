import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="col-2 header-asserts d-flex flex-column align-items-left">
        <div className="col-2 position-fixed header-content d-flex flex-column text-center">
          <Link to="/">
            <img src={logo} className="logo-img" alt="logo" />
          </Link>
          <ul className="menu-list text-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/experiences">Academic and Work Experiences</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="d-flex mt-auto p-2 menu-list-icon justify-content-center">
            <li>
              <a
                href="https://github.com/rfreitasbatista"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiGithubBadge />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rfreitasbatista/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
