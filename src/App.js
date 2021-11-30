import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// importing the pages and modals
import Homepage from "./components/pages/homepage/Homepage";
import Footer from "./components/Footer";
import CreateItinerary from "./components/pages/itinerary/CreateItinerary";
import ProfilePage from "./components/pages/profile/ProfilePage"

import NavBar from "./components/NavBar";
// CSS and bootstrap
import "./NavFooter.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
   <Router>
   <NavBar />
      {/* Here are the routes to the different pages */}
      <Switch>
        <Route path="/CreateItinerary"> <CreateItinerary /></Route>
        <Route path="/ProfilePage"> <ProfilePage /></Route>
       
        
        <Route path="/" >
          <Homepage/>
          </Route>
        
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
