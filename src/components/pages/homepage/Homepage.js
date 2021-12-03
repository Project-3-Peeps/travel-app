
import React, { useState, useEffect } from "react";
// this is the css 
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
// these are the images
import France from "./images/france.jpeg";
import Seattle from "./images/seattle.jpeg";
import Peru from "./images/peru.jpeg";
import Thailand from "./images/thailand.jpeg";
import Venice from "./images/venice.jpeg";
import API from "../../utils/API";
import token from "../../utils/auth";
import { useHistory } from "react-router-dom";
// import { searchCity } from "../../utils/API";

console.log(token);

function Homepage() {

   let history = useHistory();
  //sets up a state variable for "city" 
  const [city, setCity] = useState('');
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('')
  const [rating, setRating] = useState('')
  const [itins, setItins] = useState(0)

  const loadFeatured = () => {
    API.getAllItineraries(token)
      .then(response => {
        // const iData = response.data
        // console.log(iData)
        // setItins(response)
        if (response.status === 200) {
          setTitle(response.data.map(a => a.title))
          console.log(title)
          setDesc(response.data.map(a => a.description))
          console.log(description)
          setImage(response.data.map(a => a.image))
          setItins(title.length)
          console.log(image)
        } else {
          console.error(response.error)
        }
      })
  }
  useEffect(() => {
    loadFeatured()
  },[])

  const handleInputChange = (event) => {
    //get name and value of input triggering the change
    setCity(event.target.value);
    // console.log(city)
  };
  // Once the form has been submitted, this function will post to the backend
  const handleFormSubmit = async (event) => {
    //prevent default behavior of the form, which is to refresh the page
    event.preventDefault();
    const cityQuery = {

      city: city.toString(),
    };
    console.log(cityQuery);
    const res = await API.searchCity(token, cityQuery);
    props.setSearchInfo([res.data]);
    console.log(props.searchInfo);
    history.push("/ItineraryCard");
    // console.log(res)
    // const title = res.data.title
    // const description = res.data.description
  };


  return (
    <>
      {/* this is the search section  */}
      <div className="section1">
        <h1>What's Next on Your List?</h1>
        <Form
          className="searchForm"
          onSubmit={() => API.searchCity(token, city)}
        >
          <FormControl
            type="search"
            placeholder="Search for a city..."
            value={city}
            name="city"
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            onClick={handleFormSubmit}
            className="searchBtn"
          >
            Search
          </Button>
        </Form>
      </div>
      {/* this is the "about" section  */}
      <div className="section2">
        <h2>About</h2>
        <div className="aboutCards">
          <Card className="aboutCard">
            <h3>Get curated itineraries from travelers just like you!</h3>
          </Card>
          <Card className="aboutCard">
            <h3>Share your personal itineraries with the world!</h3>
          </Card>
          <Card className="aboutCard">
            <h3>You can buy an itinerary and rate your experience!</h3>
          </Card>
        </div>
      </div>
      {/* this is the featured section  */}
      <div className="section3">
        <h2>Featured Itineraries</h2>
      </div>
      <div className="featuredCards">
        {/* {for (let i =0; i < )} */}
        <Card className="featuredCard">
          <Card.Img className="cardImg" src={image[0]} />
          <Card.Body>
            <Card.Title>{title[0]}</Card.Title>
            <Card.Text>
              {description[0]}
            </Card.Text>

          </Card.Body>
          <Card.Footer>
            <small>Rating: ⭐⭐⭐⭐⭐</small>
          </Card.Footer>
        </Card>
        {/* <Card className="featuredCard">
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
  </Card> */}
      </div>
    </>
  );
}

export default Homepage;
