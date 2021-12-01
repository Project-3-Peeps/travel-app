import axios from "axios";
//local
const URL_PREFIX = "http://localhost:5001";
//delploy
// const URL_PREFIX = "https://reactauthdemo-back.herokuapp.com"

const API = {
  getProfile: (tkn) => {
    return axios.get(`${URL_PREFIX}/profile`, {
      headers: {
        Authorization: `Bearer ${tkn}`,
      },
    });
  },
  login: (usrData) => {
    return axios.post(`${URL_PREFIX}/login`, usrData);
  },
  signup: (usrData) => {
    return axios.post(`${URL_PREFIX}/signup`, usrData);
  },
  profilePage: () => {
    return axios.get(`${URL_PREFIX}/api/ProfilePage`);
  },
  getUserData: (id) => {
    return axios.get(`${URL_PREFIX}/api/users/${id}/itineraries`);
  },
  getAllItineraries: () => {
    return axios.get(`${URL_PREFIX}/api/itineraries`);
  },
  savedItinerary: () => {
    return axios.get(`${URL_PREFIX}/api/savedItinerary`);
  },
  createItinerary: (itineraryData, token) => {
    return axios.post(`${URL_PREFIX}/api/createItinerary`, itineraryData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  purchaseItinerary: (itineraryData, id, token) => {
    return axios.put(
      `${URL_PREFIX}/api/purchaseItinerary/${id}`,
      itineraryData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};

export default API;
