import axios from "axios";

const ncNewsBaseUrl = axios.create({ baseURL: "https://another-unique-name.onrender.com"});

export const getAllArticles = () => {
    return ncNewsBaseUrl.get("/api/articles").then((response) => {
    
        return response.data.articles
    })
}