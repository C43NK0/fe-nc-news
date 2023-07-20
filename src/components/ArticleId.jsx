import { useEffect, useState } from "react"
import {  viewArticleById } from "../utils/utils";
import { useParams } from "react-router-dom";


function ArticleId() {

const articleId = useParams()
    const [articleById, setArticleById] = useState({

    });
    useEffect(() => {
        viewArticleById(articleId.id)
        .then((res) => {
            setArticleById(res.article)
            console.log(res, "the res from VABD")
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    console.log(articleById.topic, "HERE?")
    return (
        <section className="full-article">
            <img src={articleById.article_img_url} alt={articleById.title} />
            <section className="full-article-info">
                <p><strong>Article name: </strong><i>{articleById.title}</i></p>
                <p><strong>Author: </strong><i>{articleById.author}</i></p>
                <p><strong>Topic: </strong><i>{articleById.topic}</i></p>
                <p className="full-article-text"><i>{articleById.body}</i></p>
            </section>
        </section>)
   
}




export default ArticleId