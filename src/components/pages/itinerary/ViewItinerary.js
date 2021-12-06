// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ViewItinerary.css";
import Card from "react-bootstrap/Card";
// import CreateItinerary from "./CreateItinerary";


function ViewItinerary(props) {
//   console.log(props.viewItin[[0]]);

//   const handleRating = (rating) => {
//     let sum = 0;
//     if(rating.length > 0) {

//       for(let note of rating){
//         sum += note;
//       }
//       return sum/rating.length
//     }
//     return 0
//   }
console.log(props.viewItin);
  return (

    <div className="youritinerarycard">
    
     
        <Card className="featuredCard" key={props.viewItin._id}>
          <Card.Img className="cardImg" src={props.viewItin.image}/>
          <Card.Body>
           
            <Card.Title>{props.viewItin.title}</Card.Title>
            
            <Card.Text>{props.viewItin.description}</Card.Text>
            
            <Card.Text>${props.viewItin.price} to purchase.</Card.Text>
            {/* <Card.Text>Day 1 Activities</Card.Text> */}
            
            {/* {props.viewItin.days.map((days) => {
              <ul className="list-group">
               
                <li className="list-group-item">{props.viewItin.days.day_number}</li>
               
                <li className="list-group-item">{props.viewItin.days.city}</li>
               
                {props.viewItin.day.activities.map((activities) => {
                  <li className="list-group-item">
                    {(props.viewItin.activities.where, props.viewItin.activities.what, props.viewItin.activities.cost)}
                  </li>;
                })}
              </ul>;
            })} */}
          </Card.Body>
          <Card.Footer>
            {/* <small> Rating: {props.viewItin.ratings} </small> */}
          </Card.Footer>
        </Card> 
      
    </div>
  );
}
export default ViewItinerary;