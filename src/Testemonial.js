import React from "react";
import "./Testemonial.css";
import client from "./client.jpg";
import { Avatar } from "@material-ui/core";

function Testemonial({ name, location, body, image, treatment }) {
  return (
    <div className="testemonial">
      <div className="testemonial__avatarDiv">
        <Avatar src={image} className="testemonial__avatar" />
      </div>
      <div className="testemonial__container">
        <div className="testemonial__title">
          <h1>{name}</h1>
          <h3 className="testemonial__location">({location})</h3>
        </div>
        <div className="testemonial__body">
          {body > 600 ? (
            <p>{body}</p>
          ) : (
            <p>{body.substring(0, 600)} ...read more</p>
          )}
        </div>
        <div className="testemonial__treat">
          {treatment ? <h2>Treatment Done: {treatment}</h2> : null}
        </div>
      </div>
    </div>
  );
}

export default Testemonial;
