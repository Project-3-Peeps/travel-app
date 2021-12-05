import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateItinerary.css";
import Card from "react-bootstrap/Card";
import CreateItinerary from "./CreateItinerary";
import API from "../../utils/API"

// console.log("token", token)

function ItineraryCard(props) {
  console.log(props.searchInfo[0][0]._id)
  // console.log("itin id", props.searchInfo)
  // const itinObject = props.searchInfo[0]
  const handleRating = (rating) => {
    let sum = 0;
    if (rating.length > 0) {

      for (let note of rating) {
        sum += note;
      }
      return sum / rating.length
    }
    return 0
  }

  const submitPurchase = async (event) => {
    event.preventDefault()
    try {
      const token = localStorage.getItem("id_token")
      const _id = {_id: event.target.getAttribute('dataKey')}
      console.log(event.target.getAttribute('dataKey'))
      const res = await API.purchaseItinerary(token, _id)
      if (res){
        alert('Itinerary purchase')
        console.log('worked')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {props.searchInfo[0].map(itin => (
        <Card className="featuredCard" key={itin._id}>
          <Card.Img className="cardImg" />
          <Card.Body>
            {/* Itinerary Preview Section */}
            {/* Title */}
            <Card.Title>{itin.title}</Card.Title>
            {/* Description */}
            <Card.Text>{itin.description}</Card.Text>
            {/* Price */}
            <Card.Text>{itin.price}</Card.Text>
            <button datakey={itin._id} onClick={submitPurchase}>Purchase</button>
            {/* Preview End */}
            {/*  */}
            {itin.days.map((day) => {
              <ul className="list-group">
                {/* if (!loggedIn) {hide} */}
                {/* itin day */}
                <li className="list-group-item">{day.day_number}</li>
                {/* Location = "city" in Itinerary Model*/}
                <li className="list-group-item">{day.city}</li>
                {/* Activities*/}
                {day.activities.map((activity) => {
                  <li className="list-group-item">
                    {(activity.where, activity.what, activity.cost)}
                  </li>;
                })}
              </ul>;
            })}
          </Card.Body>
          <Card.Footer>
            <small> Rating: {handleRating(itin.ratings)} </small>
          </Card.Footer>
        </Card>
      ))}
    </>
  );
}
export default ItineraryCard;
