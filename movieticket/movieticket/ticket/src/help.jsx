import React from "react";
// import Shop from "shop";
import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
// import "./navbar.css";
import { Contact } from "./pages/contact.css";


export const Help = () => {
    return (
      <div className="shop">
        <div className="shopTitle">
          <h3>Helpline</h3>
          <p className="para">
            If you face any problem in ticket booking please visit about page.
          </p>
          <h6><Link to="/contact"> About </Link></h6>
        </div>
        <center>
              <h4>Address your Problem</h4>
              <form action="" className="form">
                <label htmlFor="">Name</label>
                <input type="text" />
                <br/>
                <label htmlFor="">Account Number</label>
                <input type="text"  className="val"/>
                <br/><br/>
                <label htmlFor="" className="val2">What's your issue</label>
                <br/>
                
                <textarea name="" id="" cols="45" rows="10"></textarea>
              </form>
        </center>
      </div>
    );
  };
  