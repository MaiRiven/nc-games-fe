import { Link } from "react-router-dom"
import '../Style/App.css'

export const Navbar = () => {
    return (
    <nav className="navbar">
        <Link className='link' to='/'>Home</Link>
        <Link className="link" to={'/users'}>User Login</Link>
    </nav>
    );
}