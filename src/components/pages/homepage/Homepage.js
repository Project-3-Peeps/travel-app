import React, {useState} from "react";


// this is the css 
import "bootstrap/dist/css/bootstrap.min.css";
import  "./Homepage.css";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// these are the images 
import France from "./images/france.jpeg";
import Seattle from "./images/seattle.jpeg";
import Peru from "./images/peru.jpeg";
import Thailand from "./images/thailand.jpeg";
import Venice from "./images/venice.jpeg";
import API from "../../utils/API";
import auth from "../../utils/auth"
import jwt from "jsonwebtoken";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoia3lsZSBib3ZlIiwiZW1haWwiOiJrYm92ZTk0QGdtYWlsLmNvbSIsIl9pZCI6IjYxYTZlNTQ1NjUwYTQ2Y2RiMmFmNDY1MiIsInBvaW50cyI6MH0sImlhdCI6MTYzODM5ODk1MywiZXhwIjoxNjM4NDA2MTUzfQ.y1fkpjyKcJ9p_uB9kwKT4y3nSnrywfZlloETdgNlYbQ"

function Homepage() {
  //sets up a state variable for "city" 
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    //get name and value of input triggering the change
    // const { target } = e;
    // const inputType = target.name;
    // const inputValue = target.value;

    if (event.target.name === 'city') {
      setCity(event.target.value);
    }
    // console.log(city)
  }

  const handleFormSubmit = (e) => {
    //prevent default behavior of the form, which is to refresh the page
    e.preventDefault();
    alert(`You searched for ${city}`);
    API.searchCity(token, city)
    .then(res => {
      // res.json(res)
      console.log(res)
    })
  }

  return (
   <> 
   {/* this is the search section  */}
    <div className="section1">
    <h1>What's Next on Your List?</h1>
    <Form className="searchForm" onSubmit={API.searchCity(token,city)}>
          <FormControl
            type="search"
            placeholder="Search for a city..."
            value={city}
            name="city"
            onChange={handleInputChange}
            />
            
          <Button type="submit" onClick={handleFormSubmit} className="searchBtn">Search</Button>
        </Form>
    
  </div>
{/* this is the "about" section  */}
  <div className="section2">
  <h2>About</h2>
    <div className="aboutCards">
    <Card className="aboutCard">Get curated itineraries from travelers just like you!</Card>
    <Card className="aboutCard">Share your personal itineraries with the world!</Card>
    <Card className="aboutCard">Buy an itinerary and rate your experience!</Card>
  </div>
</div>
{/* this is the featured section  */}
<div className="section3">
  <h2>Featured Itineraries</h2>
  </div>
    <div className="featuredCards">
  <Card className="featuredCard">
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
  </div>

</>
  );
}

export default Homepage;