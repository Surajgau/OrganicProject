import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (  <div className="container">
    <div className="navbar">
      <div className="logo">
        <a href="index.html">
          <img
            src="https://i.ibb.co/kDVwgwp/logo.png"
            alt="RedStore"
            width="125px"
          />
        </a>
      </div>
      <nav>
        <ul id="MenuItems">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="product.html">Service</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Login">LogIn</Link>
            {/* <Link to="/signUp">Sign up</Link> */}
          </li>
        </ul>
      </nav>
      <a href="cart.html">
        <img
          src="https://i.ibb.co/PNjjx3y/cart.png"
          alt=""
          width="30px"
          height="30px"
        />
      </a>
      <img
        src="https://i.ibb.co/6XbqwjD/menu.png"
        alt=""
        className="menu-icon"
        onclick="menutoggle()"
      />
    </div>
  </div>
  )
}

export default Header
