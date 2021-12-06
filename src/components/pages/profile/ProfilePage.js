import React, { useState, useEffect } from "react";
// the css 
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfilePage.css";
import Card from 'react-bootstrap/Card';
import API from "../../utils/API"
import auth from "../../utils/auth"

function ProfilePage() {
  const [purchased, setPurchased] = useState([]);
  const [saved, setSaved] = useState([]);
  const loadPurchased = async () => {
    try {
      const token = localStorage.getItem("id_token")
      console.log(token)
      const response = await API.getPurchasedItineraries(token);
      console.log(response)
      const purchased = response.data.purchased_itinerary
      const saved = response.data.saved_itinerary
      console.log("purchased", purchased.shift(), "saved", saved.shift())
      setPurchased(purchased)
      setSaved(saved)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadPurchased();
  }, []);

  return (
    <>

      <div className="section3">
        <h2>Purchased Itineraries</h2>
      </div>
      <div className="profileCards">
        {purchased.map((card) => (
          <Card className="profileCard">
            <Card.Img className="cardImg" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <small>Rating: {handleRating(card.ratings)}*</small> */}
            </Card.Footer>
          </Card>
        ))}
      </div>
      <div className="section3">
        <h2>Saved Itineraries</h2>
      </div>
      <div className="profileCards">
        {saved.map((card) => (
          <Card className="profileCard">
            <Card.Img className="cardImg" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <small>Rating: {handleRating(card.ratings)}*</small> */}
            </Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ProfilePage;