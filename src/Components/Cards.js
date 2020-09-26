import React from "react";
import "../Styles/Cards.css";
import Card from "./Card";
import { Room, PhotoCamera, Schedule } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards">
      <Card
        headline={<PhotoCamera />}
        title="BEFORE & AFTER"
        description="A few of our cases and work done."
        action=""
        button={
          <Link to="/beforeafter" style={{ textDecoration: "none" }}>
            <Button variant="contained" className="card__action">
              See More
            </Button>
          </Link>
        }
      />
      <Card
        headline={<Room />}
        title="LOCATION"
        description="Street address and directions to see us"
        action=""
        button={
          <a
            href="https://www.google.com/maps/place/Goa+Dental+Studio/@15.5295082,73.7637537,15z/https://www.google.com/maps/place/Goa+Dental+Studio/@15.5295082,73.7637537,15z/data=!4m2!3m1!1s0x0:0x1e866e0e73a2f475?sa=X&ved=2ahUKEwi1g-_VxYfsAhVq8HMBHToSBHEQ_BIwCnoECBoQCA"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" className="card__action">
              FIND US
            </Button>
          </a>
        }
      />
      <Card
        headline={<Schedule />}
        title="OPEN HOURS"
        description={["Monday-Saturday ", <br />, "9:00AM to 5:00PM"]}
        action=""
        button={
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button variant="contained" className="card__action">
              Contact Us
            </Button>
          </Link>
        }
      />
    </div>
  );
}

export default Cards;
