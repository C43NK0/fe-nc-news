import { useParams } from "react-router-dom";
import { viewCommentsByArticleId } from "../utils/utils";
import { useState, useEffect } from "react";


function CommentsList() {

    const articleId = useParams()
    const [commentsById, setCommentsById] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [userVotes, setUserVotes] = useState(0)

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
    
    const handleClick = () => {
        setUserVotes((userVotes) => {
            return userVotes + 1
        });
    }

    return (
        <section className="comments-container">
            <h2 className="comments-header">Comments!</h2>
            <section className="comments-list">
                {commentsById.map(({ comment_id, body, votes, author}) => {
                    return (
                        <ul key={comment_id} className="unordered-comments-list">
                        <li key={comment_id}>
                        <p key={comment_id}className="comment-text"> <em>{body}</em> </p>
                        <p key={{comment_id}}> <i><b>user: </b> {author}</i> <b>likes: </b>{votes + userVotes} </p>
                        <button aria-label="like this comment"
                        onClick={handleClick}
                        disabled={userVotes > 0}> &#128077; </button>  
                        </li>
                        </ul>
                    )
                })}            
            </section>
        </section>      
        )
}



export default CommentsList