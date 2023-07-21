import axios from "axios";

const ncNewsBaseUrl = axios.create({ baseURL: "https://another-unique-name.onrender.com"});

export const getAllArticles = () => {
    return ncNewsBaseUrl.get("/api/articles").then((response) => {
    
        return response.data.articles
    })
}

export const viewArticleById = (id) => {
    return ncNewsBaseUrl.get(`/api/articles/${id}`).then((response) => {
        return response.data
    })
}

export const viewCommentsByArticleId = (id) => {
    return ncNewsBaseUrl.get(`/api/articles/${id}/comments`).then((response) => {
        return response.data
    })
}
