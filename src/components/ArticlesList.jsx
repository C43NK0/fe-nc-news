import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/utils";
import SingleArticle from "./SingleArticle";

function ArticlesList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getAllArticles()
        .then((res) => {
            setArticles(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);
    console.log(articles, "is it here?")
    
return (
    <main className="articles-container">
        <div className="articles-list">
            {articles.map((singleArticle) => {
                return (
                    <SingleArticle
                    key={singleArticle.article_id}
                    singleArticle={singleArticle}
                    />
                )
            })}
        </div>
    </main>
)

}

export default ArticlesList;

