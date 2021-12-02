// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./CreateItinerary.css";
// import Card from "react-bootstrap";

// function ItineraryCard(props) {
//   return (
//     <>
//       <Card className="featuredCard">
//         <Card.Img className="cardImg"/>
//         <Card.Body>
//         {/* Itinerary Preview Section */}

//           {/* Title */}
//           {props.Itinerary.map((itinerary) => (
//               <Card.Title key={itinerary.id}>{itinerary.title}</Card.Title>
//           ))}
//           {/* Description */}
//           {props.Itinerary.map((itinerary) => (
//               <Card.Text key={itinerary.id}>{itinerary.description}</Card.Text>
//           ))}
//           {/* Price */}
//           {props.Itinerary.map((itinerary) => (
//               <Card.Text key={itinerary.id}>{itinerary.price}</Card.Text>
//           ))}
//         {/* Preview End */}

//         <ul className="list-group">
//         if (!loggedIn) {hide}
//         {/* Itinerary day */}
//         {props.Itinerary.map((itinerary) => (
//             <li className="list-group-item" key={itinerary.id}>{itinerary.days[day_number]}</li>
//           ))}
//         {/* Location "city" in Itinerary Model*/}
//         {props.Itinerary.map((itinerary) => (
//            <li className="list-group-item" key={itinerary.id}>{itinerary.days[days.city]}</li>
//           ))}
//         {/* Activities*/}
//         {props.Itinerary.map((itinerary) => (
//            <li className="list-group-item" key={itinerary.id}>{itinerary.days.activities[activities.where, activities.what, activities.cost]}</li>
//           ))}
//         </ul>
//         </Card.Body>
//         <Card.Footer>
//           <small key={itinerary.id}> Rating: {itinerary.ratings} </small>
//         </Card.Footer>
//       </Card>
//     </>
//   );
// }

// export default ItineraryCard;
