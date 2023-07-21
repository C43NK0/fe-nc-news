import { useParams } from "react-router-dom";
import { viewCommentsByArticleId } from "../utils/utils";
import { useState, useEffect } from "react";


function CommentsList() {

    const articleId = useParams()
    const [commentsById, setCommentsById] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        viewCommentsByArticleId(articleId.id)
        .then((response) => {            
            setCommentsById(response.comments)
            setIsLoading(false)         
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    if (isLoading) return <p>Loading... please wait</p>
    

    return (
        <section className="comments-container">
            <h2 className="comments-header">Comments!</h2>
            <section className="comments-list">
                {commentsById.map(({ comment_id, body, votes, author}) => {
                    return (
                        <ul className="unordered-comments-list">
                        <li key={comment_id}>
                        <li className="comment-text"> <em>{body}</em> </li>
                        <li> <i><b>user: </b> {author}</i> <b>likes: </b>{votes} </li>  
                        </li>
                        </ul>
                    )
                })}            
            </section>
        </section>      
        )
}



export default CommentsList