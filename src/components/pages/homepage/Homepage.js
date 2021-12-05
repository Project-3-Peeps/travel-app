import React, { useState, useEffect } from "react";
// this is the css
import axios from "axios";
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
import ItineraryCard from "../itinerary/ItineraryCard";
// import { searchCity } from "../../utils/API";

console.log(token);

function Homepage(props) {
  let history = useHistory();
  //sets up a state variable for "city"
  const [city, setCity] = useState("");
  const [itins, setItins] = useState([]);

  const loadFeatured = async () => {
<<<<<<< HEAD
    try{
      const response = await API.getAllItineraries()
      console.log(response)
      // response.data.map((itin) => {
      //   console.log(itin.description)
      //   setItins(result => [...result, itin])
      // })
      setItins([...response.data])
      // console.log(itins)
    } catch(err){
      console.log(err)
=======
    try {
      const response = await API.getAllItineraries();
      console.log(response);
      response.data.map((itin) => {
        console.log(itin.description);
        setItins((result) => [...result, itin]);
      });
      console.log(itins);
    } catch (err) {
      console.log(err);
>>>>>>> dev
    }
  };
  useEffect(() => {
<<<<<<< HEAD
    if(itins.length === 0 ) {
      
    loadFeatured()
    }
    console.log(itins);
  }, [itins])
=======
    loadFeatured();
  }, []);
>>>>>>> dev

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

  const handleRating = (rating) => {
    // console.log(rating);
    if (!rating ) {
      return;
    }
    let sum = 0;
    if (rating.length > 0) {
      for (let note of rating) {
        sum += note;
      }
      return sum / rating.length;
    }
    return 0;
  };

  return (
    <>
      {/* this is the search section  */}
      <div className="section1">
        <h1>Explore and share travel itineraries</h1>
        <Form
          className="searchForm"
          onSubmit={() => API.searchCity(token, city)}
        >
          <FormControl
            type="search"
            placeholder="What's next on your list?"
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
      {/* <div className="section2">
        <h2>About</h2>
        <div className="aboutCards">
          <Card className="aboutCard">
            <h4>Get curated itineraries from travelers just like you!</h4>
          </Card>
          <Card className="aboutCard">
            <h4>Share your personal itineraries with the world!</h4>
          </Card>
          <Card className="aboutCard">
            <h4>You can buy an itinerary and rate your experience!</h4>
          </Card>
        </div>
      </div> */}
      {/* this is the featured section  */}
      <div className="section3">
        <h2>Featured Itineraries</h2>
      </div>
      <div className="featuredCards">
        {itins.map((card) => (
          <Card className="featuredCard">
            <Card.Img className="cardImg" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Rating: {handleRating(card.ratings)}</small>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Homepage;
