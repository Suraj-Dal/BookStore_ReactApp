import axios from 'axios'

let header = {
    headers: {
        Authorization: "Bearer" + " " + localStorage.getItem("Token")
    }
}

export const signIn = async (obj) => {
    let response = await axios.post("https://localhost:44388/api/User/login", obj)
    return response;
}

export const signUp = async (obj) => {
    let response = await axios.post("https://localhost:44388/api/User/register", obj)
    return response;
}

export const forget = async (email) => {
    let response = await axios.post(`https://localhost:44388/api/User/forget?Email=${email}`, null)
    return response;
}

export const reset = async (obj) => {
    let response = await axios.post("https://localhost:44388/api/User/reset", obj, header)
    return response;
}