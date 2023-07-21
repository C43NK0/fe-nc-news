import React from "react";
import { Link } from "react-router-dom";



function SingleArticle({singleArticle}) {
    return (
        <section className="single-article">
            <img src={singleArticle.article_img_url} alt={singleArticle.title} />
            <article className="single-article-info">
                <p><strong>  Article name:  </strong><i>{singleArticle.title}</i></p>
                <p><strong>  Topic:  </strong><i>{singleArticle.topic}</i></p>
                <section className="anchor-btn-container">
                    <Link to={{
                        pathname: `/articles/${singleArticle.article_id}`,
                        }}>
                        <button className="anchor-button">
                        View without comments...
                    </button></Link>
                    <Link to={{
                        pathname: `/articles/${singleArticle.article_id}/comments`,
                        }}>
                        <button className="anchor-button">
                        View with comments
                    </button></Link>
                </section>
            </article>
        </section>
    );
}

export default SingleArticle;
