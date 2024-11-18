import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Moments</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Notifications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Messages</a>
            </li>
          </ul>
          
        </div>
        
        <form className="form-inline d-flex">
          <input className="form-control mr-sm-2 " type="search" placeholder="Search Twitter" aria-label="Search" />
          <button className="twitter-button-navbar" >Tweet</button>
        </form>
      
      </nav>
    );
  }
}

export default Navbar;



