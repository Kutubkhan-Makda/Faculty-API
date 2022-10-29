import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <div className="nav-link"><Link to="./">Home</Link></div>
            </li>
            <li class="nav-item">
                <div className="nav-link"><Link to="./Faculty">Faculty</Link></div>
            </li>
            <li className="nav-item">
                <div className="nav-link"><Link to="./DetailFaculty/:id">About</Link></div>
            </li>
            <li className="nav-item">
                <div className="nav-link"><Link to="./">Contact</Link></div>
            </li>
        </ul>
        </>
    );
}

export default Navbar;