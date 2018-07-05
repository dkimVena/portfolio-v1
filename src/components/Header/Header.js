import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderMenu = () =>
    this.props.menu.map(item =>
      <li className="nav-item" key={item.url}>
        {
          item.url.startsWith('http') ?
            <a className="nav-link" href={item.url}>{item.name}</a> :
            <Link className="nav-link" to={item.url}>{item.name}</Link>
        }
      </li>,
    );

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <h3><Link className="navbar-brand" to="/">DAVID KIM</Link></h3>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              { this.renderMenu() }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
