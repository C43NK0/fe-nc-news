import { useContext } from "react";
import { UserContext } from "../context/User";

function Header() {
    const {user} = useContext(UserContext)

    return <h3 className="user-text">Currently logged in as: {user}</h3>;
}

export default Header;