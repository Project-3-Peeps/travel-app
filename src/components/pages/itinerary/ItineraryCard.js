import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateItinerary.css";
import Card from "react-bootstrap/Card";
import CreateItinerary from "./CreateItinerary";

function ItineraryCard(props) {
  return (
    <>
      {props.itinerary.map((itin) => {
        <Card className="featuredCard" key={props.itinerary._id}>
          <Card.Img className="cardImg" />
          <Card.Body>
            {/* Itinerary Preview Section */}
            {/* Title */}
            <Card.Title key={itin._id}>{itin.title}</Card.Title>
            {/* Description */}
            <Card.Text key={itin._id}>{itin.description}</Card.Text>
            {/* Price */}
            <Card.Text key={itin._id}>{itin.price}</Card.Text>
            {/* Preview End */}
            {/*  */}
            {itin.days.map((days) => {
              <ul className="list-group">
                {/* if (!loggedIn) {hide} */}
                {/* itin day */}
                <li className="list-group-item">{days.day_number}</li>

                {/* Location = "city" in Itinerary Model*/}

                <li className="list-group-item">{days.city}</li>

                {/* Activities*/}
                {days.activities.map((activity) => {
                  <li className="list-group-item">
                    {(activity.where, activity.what, activity.cost)}
                  </li>;
                })}
              </ul>;
            })}
          </Card.Body>
          <Card.Footer>
            <small key={props.itinerary._id}> Rating: {props.itinerary.ratings} </small>
          </Card.Footer>
        </Card>;
      })}
    </>
  );
}

export default ItineraryCard;
