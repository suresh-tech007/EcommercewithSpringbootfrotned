import axios from "axios";

export const API_BASE_URL = "http://localhost:5454";

const jwt = localStorage.getItem("jwt");

export const createApiInstance = async () => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Authorization": jwt ? `Bearer ${jwt}` : null,
      "Content-Type": "application/json",
    },
  });
};

 