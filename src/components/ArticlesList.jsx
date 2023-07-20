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
    
return (
    <section className="articles-container">
        <article className="articles-list">
            {articles.map((singleArticle) => {
                return (
                    <SingleArticle
                    key={singleArticle.article_id}
                    singleArticle={singleArticle}
                    />
                )
            })}
        </article>
    </section>
)

}

export default ArticlesList;

