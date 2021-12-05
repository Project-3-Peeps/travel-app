import axios from "axios";
// import ProfilePage from "../pages/profile/ProfilePage";
// import AuthService from "../utils/auth";
//local
const URL_PREFIX = "http://localhost:3001";
//delploy
// const URL_PREFIX = "https://triptinerary-backend.herokuapp.com"

const API = {
  // TODO:
  getProfile: (token) => {
    return axios.get(`${URL_PREFIX}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  // TODO:
  login: (usrData) => {
    return axios.post(`${URL_PREFIX}/api/users/login`, usrData);
  },
  // route use to create a user.
  signup: (usrData) => {
    return axios.post(`${URL_PREFIX}/api/users/signup`, usrData);
  },
  // TODO:
  profilePage: () => {
    return axios.get(`${URL_PREFIX}/api/ProfilePage`);
  },
  // TODO:
  getUserData: (id) => {
    return axios.get(`${URL_PREFIX}/api/users/${id}/itineraries`);
  },
  // TODO:
  getAllItineraries: () => {
    return axios.get(`${URL_PREFIX}/api/users/itinerary`)
  },
  // user _id must go inside the token
  savedItinerary: (token, itineraryInfo) => {
    return axios.get(`${URL_PREFIX}/api/users/savedItinerary`, itineraryInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  },
  // user _id must go inside the token
  createItinerary: (token, itineraryData) => {
    return axios.post(`${URL_PREFIX}/api/users/createItinerary`, itineraryData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  
  // user _id must go inside the token, and itinerary _id inside the body
  purchaseItinerary: (token, _id) => {
    return axios.put(
      `${URL_PREFIX}/api/users/purchaseItinerary`,
      _id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  searchCity: (token, city) => {
    return axios.post(
      `${URL_PREFIX}/api/users/searchCity`,
      city,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  }
};

export default API;
