import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useContext } from 'react';
import UserContext from './pages/UserContext';
import logo from './images/logo.png';

export default function Navbar() {
    const { loggedIn } = useContext(UserContext);

    return (
        <nav className="nav">
            <div className="logo-container">
                <Link to="/" className="site-title">
                    PURE EARTH
                </Link>
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul>
                <CustomLink to="/parks">Parks</CustomLink>
                <CustomLink to="/questions">Questions</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                {loggedIn ? (
                    <CustomLink to="/profile">Profile</CustomLink>
                ) : (
                    <CustomLink to="/login">Login</CustomLink>
                )}
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
