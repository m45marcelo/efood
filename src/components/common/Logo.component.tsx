import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";

export const Logo = () => {
    return (
        <Link to={"/"}>
            <img src={logo} alt="Logo" />
        </Link>
    );
};
