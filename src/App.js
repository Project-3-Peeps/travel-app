import {React, useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// importing the pages and modals
import Homepage from "./components/pages/homepage/Homepage";
import Footer from "./components/Footer";
import CreateItinerary from "./components/pages/itinerary/CreateItinerary";
import ProfilePage from "./components/pages/profile/ProfilePage";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import NavBar from "./components/NavBar";
import ItineraryCard from "./components/pages/itinerary/ItineraryCard";
// Import API
import API from "./components/utils/API";
import auth from "./components/utils/auth"

// CSS and bootstrap
import "./NavFooter.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  const [userState, setUserState] = useState({
    email: "",
    id: 0,
  });
  const [token, setToken] = useState("");

  useEffect(() => {
    const myToken = auth.getToken();
    console.log("use effected");
    console.log(myToken);
    if (myToken) {
      API.getProfile(myToken)
        .then((res) => {
          console.log("worked");
          setToken(myToken);
          setUserState({
            email: res.data.email,
            id: res.data.id,
          });
        })
        .catch((err) => {
          console.log("failed");
          console.log(err);
          localStorage.removeItem("token");
        });
    }
  }, []);

  const logMeOut = () => {
    setUserState({ email: "", id: 0 });
    setToken("");
    auth.logout()
  };
  return (
    <Router>
      <NavBar />
      {/* Here are the routes to the different pages */}
      <Switch>
        <Route path="/CreateItinerary">
          {" "}
          <CreateItinerary />
        </Route>
        <Route path="/ProfilePage">
          {" "}
          <ProfilePage /                                   >
        </Route>
        <Route path="/login">
          <LoginModal />
        </Route>
        <Route path="/signup">
          <SignupModal />
        </Route>
        <Route path="/ItineraryCard">
          <ItineraryCard />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
