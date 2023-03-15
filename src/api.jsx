import axios from "axios";

export const APICall = axios.create({
    baseURL: `https://64073a4d77c1a905a0f23b03.mockapi.io/fakeData`
})