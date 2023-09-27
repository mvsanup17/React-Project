import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Ticket } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <b className="log">BOOK TICKET</b>  
        <Link to="/"> Cinema </Link>
        <Link to="/contact"> About </Link>
        <Link to="/help"> Help </Link>
        <Link to="/offer"> Offer </Link>
        <Link to="/cart">
          <Ticket size={32} />
        </Link>
      </div>
    </div>
  );
};
