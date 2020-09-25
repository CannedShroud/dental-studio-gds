import React from "react";
import "./Cards.css";
import Card from "./Card";
import { Room, PhotoCamera, Schedule } from "@material-ui/icons";
import { Button } from "@material-ui/core";

function Cards() {
  return (
    <div className="cards">
      <Card
        headline={<PhotoCamera />}
        title="BEFORE & AFTER"
        description="A few of our cases and work done."
        action=""
        button={
          <Button variant="contained" className="card__action">
            See More
          </Button>
        }
      />
      <Card
        headline={<Room />}
        title="LOCATION"
        description="Street address and directions to see us"
        action=""
        button={
          <Button variant="contained" className="card__action">
            FIND US
          </Button>
        }
      />
      <Card
        headline={<Schedule />}
        title="OPEN HOURS"
        description={["Monday-Saturday ", <br />, "9:00AM to 5:00PM"]}
        action=""
        button={
          <Button variant="contained" className="card__action">
            Contact Us
          </Button>
        }
      />
    </div>
  );
}

export default Cards;
