import React from "react";
import "./contact.css";
import ui from"./tick.jpg"

export const Contact = () => {
  return (
    <div className="contact-container"> {/* Added a CSS class for styling */}
      <h1>Welcome to Book Ticket</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam iste,
        accusamus, ipsa temporibus explicabo repellat omnis sint ratione voluptatum nisi minima cumque a quo, labore suscipit!
        Aut, facilis distinctio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam iste,
        accusamus, ipsa temporibus explicabo repellat omnis sint ratione voluptatum nisi minima cumque a quo, labore suscipit!
        Aut, facilis distinctio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam iste,
        accusamus, ipsa temporibus explicabo repellat omnis sint ratione voluptatum nisi minima cumque a quo, labore suscipit!
      </p>
      <center>
        <img src={ui} alt="Product 1" height="300px" />
      </center>
    </div>
  );
};