import logo from '../Asset/Logo.png'
import '../Style/Header.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../Redux';
import { useNavigate } from "react-router-dom";


function Header() {

    const dispatch = useDispatch();
    const state = useSelector(state => state.control)
    console.log(state);
    const history = useNavigate();

    function handleLogout(){
        dispatch(logout())
    }

    if (state.firstname !== "") {

        return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <div>
                        <Link className="main-nav-item" to="/User" >
                            <i className="fa fa-user-circle" ></i>
                            {state.firstname}
                        </Link>
                        <Link className="main-nav-item" to="/" onClick={handleLogout}>
                            <i className="fa fa-sign-out"></i>
                            {" Sign Out"}
                        </Link>
                    </div>

                </div>
            </nav>

        )
    }

    else {

        return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/Signin">
                        <i className="fa fa-user-circle"></i>
                        {" Sign In"}
                    </Link>
                </div>
            </nav>

        )
    }

}

export default Header