import React from 'react';
import './index.css';

function Navbar() {
  return (
    <>
    <div className="container-fluid nav-bg">
        <div className="row">
            <div className="col-10 mx-auto">


            <nav
  className="navbar navbar-expand-lg navbar-light"
  style={{ height: '80px' }}
>
        <div className="container-fluid">
        <a
  className="navcheck navbar-brand"
  href="/Home"
  style={{ color: 'rgb(4, 108, 245)', fontWeight: 900  }}
>
            Smart Seo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto me-auto me-lg-0">
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="/Home">
      Home
    </a>
  </li>
  <li className="nav-item ">
    <a className="nav-link" href="/About">
      About
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/Service">
      Services
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/Contact">
      Contact
    </a>
  </li>
</ul>

          </div>
        </div>
      </nav>

      </div>
        </div>
    </div>
    </>
  );
}

export default Navbar;

