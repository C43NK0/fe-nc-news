import { useEffect } from "react";
import { postComment } from "../utils/utils";
import CommentsList from "./CommentsList";
import { useParams } from "react-router-dom";

function CommentAdder () {

    const articleId = useParams()

    useEffect(() => {
        const comment = {
            username: "testCrow",
            body: "testBod"
        }
        postComment(articleId, comment).then((response) =>{
            console.log(response, "res in comment adder!")
        })
    })
    console.log(response)
}