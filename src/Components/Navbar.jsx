import { Link } from "react-router-dom"
import '../Style/App.css'

export const Navbar = () => {
    return (
    <nav>
        <Link className='link' to='/'>Home</Link>
    </nav>
    );
}