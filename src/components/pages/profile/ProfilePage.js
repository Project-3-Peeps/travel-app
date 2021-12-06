import React, {useState, useEffect} from "react";
// the css 
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfilePage.css";
import Card from 'react-bootstrap/Card';
import API from "../../utils/API"
import auth from "../../utils/auth"

// images 
import France from "../homepage/images/france.jpeg";
import Seattle from "../homepage/images/seattle.jpeg";
import Peru from "../homepage/images/peru.jpeg";
import Thailand from "../homepage/images/thailand.jpeg";
import Venice from "../homepage/images/venice.jpeg";


function ProfilePage() {
  const [myItin, setMyItin] = useState({})
  const [purchasedItin, setPurchasedItin] = useState({})
  
  const saveItineraries = async () => {
    const token = auth.getToken()
    const {saved_itinerary, purchased_itinerary} = await API.savedItinerary(token)
    console.log(saved_itinerary)
    console.log(purchased_itinerary)
  }
  
  useEffect(() => {
    saveItineraries()
  })
  return (
    <>
      <div className="itineraries">
        <h2>My Itineraries</h2>
      </div>
      <div className="profileCards">
        <Card className="profileCard">
          <Card.Img className="cardImg" src={France} />
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
          <Card.Img className="cardImg" src={Thailand} />
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
          <Card.Img className="cardImg" src={Venice} />
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
      </div>
    </>
  );
}

export default ProfilePage;