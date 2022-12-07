import { useNavigate } from 'react-router-dom';
import "./index.css"

const Navbar=()=>{
    const navigate = useNavigate();

    const onClickGoToLogin=()=>{
        console.log("logging out")
        navigate('/login')
    }

    return(
        <nav className="navbar-container">
            <img alt="logo" className="logo-size" src="https://res.cloudinary.com/dodmtflaq/image/upload/v1670336590/mcqs-logo_gwlphj.jpg" />
            <h1 className="mcqs-heading">MCQs Adda</h1>
            <button type="button" className="logout-button" onClick={onClickGoToLogin}>Log Out</button>
        </nav>
    )
}

export default Navbar