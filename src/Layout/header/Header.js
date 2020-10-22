import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="navbar navbar-expand-lg">
      <div class="container">
        <a className="navbar-brand" href="#">DEMO Streaming</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li><a href="#">Log in</a></li>
            <li><a className="btn btn-primary" href="#">Start your free trial</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
