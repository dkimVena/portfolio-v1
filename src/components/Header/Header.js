import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderMenu = () =>
    this.props.menu.map(item => (
      <li className="nav-item" key={item.url}>
        {item.url.startsWith('http') ? (
          <a
            className="button-nav button--itzel button--text-thick button--text-upper button--border-thick button--size-s"
            rel="noopener noreferrer"
            target="_blank"
            href={item.url}
          >
            <i className={`button__icon ${item.icon}`} />
            <span>{item.name}</span>
          </a>
        ) : (
          <Link
            className="button-nav button--itzel button--text-thick button--text-upper button--border-thick button--size-s"
            to={item.url}
          >
            <i className={`button__icon ${item.icon}`} />
            <span>{item.name}</span>
          </Link>
          // <Link className="nav-link" to={item.url}>
          //   {item.name}
          // </Link>
        )}
      </li>
    ));

  render() {
    return (
      <React.Fragment>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <Link className="navigation__banner navbar-brand" to="/">
            <span className="navigation__banner-text">DAVID KIM</span>
          </Link>
          <button
            className="navigation-button navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navigation__icon">&nbsp;</span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">{this.renderMenu()}</ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Header;
