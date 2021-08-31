import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const activeTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#33cc99' };
  }
};

const Header = ({ history }) => {
  return (
    <header className="wrapper">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="Listen Boise" />
        </Link>
      </div>

      <div className="midHeadContainer">
        <Link
          style={activeTab(history, '/featured')}
          className="nav-item"
          to="/featured"
        >
          <i className="fa fa-headphones"></i>
          <span>&nbsp;Featured</span>
        </Link>
        <Link
          style={activeTab(history, '/explore')}
          className="nav-item"
          to="/explore"
        >
          <i className="fas fa-podcast"></i>
          <span>&nbsp;Explore</span>
        </Link>
        <Link
          style={activeTab(history, '/myactivity')}
          className="nav-item"
          to="/myactivity"
        >
          <i className="fas fa-user"></i>
          <span>&nbsp;My Podcasts</span>
        </Link>
      </div>

      <div className="LoginContainer">
        <Link className="nav-item" to="/">
          <i className="fa fa-sign-out-alt"></i>
          <span>&nbsp;Login</span>
        </Link>
      </div>
    </header>
  );
};

export default withRouter(Header);
