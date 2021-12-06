import React, { useState, useEffect} from "react";
// the css 
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfilePage.css";
import Card from 'react-bootstrap/Card';
import API from "../../utils/API";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// images 
// import France from "../homepage/images/france.jpeg";
// import Seattle from "../homepage/images/seattle.jpeg";
// import Peru from "../homepage/images/peru.jpeg";
// import Thailand from "../homepage/images/thailand.jpeg";
// import Venice from "../homepage/images/venice.jpeg";



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
      console.log("purchased",purchased.shift(), "saved", saved.shift())
      setPurchased(purchased)
      setSaved(saved)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadPurchased();
  }, []);

  // const handleRating = (rating) => {
  //   let sum = 0;
  //   if (rating.length > 0) {
  //     for (let note of rating) {
  //       sum += note;
  //     }
  //     return sum / rating.length;
  //   }
  //   return 0;
  // };



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
    {/* <div className="itineraries">
    <h2>My Itineraries</h2>
    </div>
      <div className="profileCards">
    <Card className="profileCard">
      <Card.Img  className="cardImg" src={France} />
      <Card.Body>
        <Card.Title>Experience Paris</Card.Title>
        <Card.Text>
          If you've never been to Paris, this it the guide you will need. There's much more to this sprawling and historic metropolis than the Eiffel tower. I'll show you the best hidden gems I discovered on my 3 day trip in Paris.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>Rating: ⭐⭐⭐⭐⭐</small>
      </Card.Footer>
    </Card>
    <Card className="featuredCard">
      <Card.Img src={Peru} />
      <Card.Body>
        <Card.Title>Adventure in Peru!</Card.Title>
        <Card.Text>
          My itinerary is crafted for the adventurous traveler. I spent a week traveling in one of the most beautiful countries in the world. You'll find everything you need in my itinerary for the trip of a lifetime!
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>Rating: ⭐⭐⭐⭐⭐</small>
      </Card.Footer>
    </Card>
    <Card className="featuredCard">
      <Card.Img src={Seattle} />
      <Card.Body>
        <Card.Title>Explore the Emerald City</Card.Title>
        <Card.Text>
          This itinerary includes some of the coolest spots in the beautiful city of Seattle, Washington. I spent 3 days experiencing the mix of nature and urban jungle this city has to offer!
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>Rating: ⭐⭐⭐⭐⭐</small>
      </Card.Footer>
    </Card>
    <Card className="featuredCard">
      <Card.Img  className="cardImg" src={Thailand} />
      <Card.Body>
        <Card.Title>See Thailand</Card.Title>
        <Card.Text>
          If you've never been to Paris, this it the guide you will need. There's much more to this sprawling and historic metropolis than the Eiffel tower. I'll show you the best hidden gems I discovered on my 3 day trip in Paris.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>Rating: ⭐⭐⭐⭐⭐</small>
      </Card.Footer>
    </Card>
    <Card className="featuredCard">
      <Card.Img  className="cardImg" src={Venice} />
      <Card.Body>
        <Card.Title>Get lost in Venice!</Card.Title>
        <Card.Text>
          If you've never been to Paris, this it the guide you will need. There's much more to this sprawling and historic metropolis than the Eiffel tower. I'll show you the best hidden gems I discovered on my 3 day trip in Paris.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>Rating: ⭐⭐⭐⭐⭐</small>
      </Card.Footer>
    </Card>
    </div> */}
  </>
  );
}

export default ProfilePage;