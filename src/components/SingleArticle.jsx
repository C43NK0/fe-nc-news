import React from "react";

function SingleArticle({singleArticle}) {
    return (
        <section className="single-article">
            <img src={singleArticle.article_img_url} alt={singleArticle.title} />
            <section className="single-article-info">
                <p><strong>Article name: </strong><i>{singleArticle.title}</i></p>
                <p><strong>Topic: </strong><i>{singleArticle.topic}</i></p>
                <section className="anchor-btn-container">
                    <button className="anchor-button">
                        This will eventually be the anchor link!
                    </button>
                </section>
            </section>
        </section>
    );
}

export default SingleArticle;
