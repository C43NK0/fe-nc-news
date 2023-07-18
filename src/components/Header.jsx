import { useContext } from "react";
import { UserContext } from "../context/User";

function Header() {
    const {user} = useContext(UserContext)

    return (
   <div>
    <h3 className="user-text"><strong>Welcome to the undisputed home of the article!</strong></h3>
    <p className="login-text">Currently logged in as: <i>'{user}'</i></p>
    </div>    
    )
}

export default Header;