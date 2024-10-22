import axios from "axios"

export const  API_BASE_URL = "http://localhost:5454"

const jwt = localStorage.getItem("jwt");
console.log(jwt)

export const  api  = await axios.create({
    baseURL : API_BASE_URL , 
    headers:{
        "Authorization" :jwt != null && `Bearer ${jwt}` ,
        "Content-Type":"application/json"
    }
})