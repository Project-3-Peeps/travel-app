// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./CreateItinerary.css";
// import Card from "react-bootstrap";
// import CreateItinerary from "./CreateItinerary";

// function ItineraryCard(props) {
//   return (
//     <>
//       {itinerary.map((itin) => {
//         <Card className="featuredCard" key={itinerary.id}>
//           <Card.Img className="cardImg" />
//           <Card.Body>
//             {/* Itinerary Preview Section */}
//             {/* Title */}
//             <Card.Title key={itin.id}>{itin.title}</Card.Title>
//             {/* Description */}
//             <Card.Text key={itin.id}>{itin.description}</Card.Text>
//             {/* Price */}
//             <Card.Text key={itin.id}>{itin.price}</Card.Text>
//             {/* Preview End */}
//             {/*  */}
//             {itin.days.map((days) => {
//               <ul className="list-group">
//                 {/* if (!loggedIn) {hide} */}
//                 {/* itin day */}
//                 <li className="list-group-item">{days.day_number}</li>

//                 {/* Location = "city" in Itinerary Model*/}

//                 <li className="list-group-item">{days.city}</li>

//                 {/* Activities*/}
//                 {days.map((activities) => {
//                   <li className="list-group-item">
//                     {(activities.where, activities.what, activities.cost)}
//                   </li>;
//                 })}
//               </ul>;
//             })}
//           </Card.Body>
//           <Card.Footer>
//             <small key={itinerary.id}> Rating: {itinerary.ratings} </small>
//           </Card.Footer>
//         </Card>;
//       })}
//     </>
//   );
// }

// export default ItineraryCard;
