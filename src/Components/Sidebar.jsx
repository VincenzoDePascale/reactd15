import { FaHome } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import Logo from "../assets/Spotify_Logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-2">
      <nav
        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="nav-container">
          <a className="navbar-brand" href="index.html">
            <img src={Logo} alt="Spotify_Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link className="nav-item nav-link" to="/">
                    <FaHome className="fas FaHome fa-lg"></FaHome>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <a className="nav-item nav-link" href="alt">
                    <BsFillBookFill className="fas BsFillBookFill fa-lg"></BsFillBookFill>
                    &nbsp; Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div
                      className="input-group-append"
                      style={{ marginBottom: "4%" }}
                    >
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        id="button-addon1"
                        /* onClick="search()" */
                      >
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <br />
          <a href="alt">Cookie Policy</a> |<a href="alt"> Privacy</a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
