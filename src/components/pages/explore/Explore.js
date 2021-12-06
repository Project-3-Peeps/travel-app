import React, { useState, useEffect } from "react";
// this is the css
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Explore.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import API from "../../utils/API";
import token from "../../utils/auth";
import { useHistory } from "react-router-dom";
// import ItineraryCard from "../itinerary/ItineraryCard";
// import { searchCity } from "../../utils/API";

console.log(token);

function Explore(props) {
  let history = useHistory();
  //sets up a state variable for "city"
  const [city, setCity] = useState("");
  const [itins, setItins] = useState([]);

  const loadFeatured = async () => {
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
    }
  };
  useEffect(() => {
    if(itins.length === 0 ) {
      
    loadFeatured()
    }
    console.log(itins);
  }, [itins])

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
      <div className="titleformarea">
        <h2>All Itineraries</h2>
       
        <div>
        <Form
          className="searchForm"
          onSubmit={() => API.searchCity(token, city)}
        >
          <FormControl
            type="search"
            placeholder="Search by city..."
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
      </div>
     
      <div className="">
        
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

export default Explore;