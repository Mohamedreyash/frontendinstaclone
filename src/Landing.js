import landingImage from "./images/insta.png";
import "./landing.css";
import { Link } from 'react-router-dom'
const Landing = ()=> {
    return (
        <>
            <div className="landing">
                <div className="landing-image">
                    <img src={landingImage} alt="landing"/>
                </div>
                <div className="landing-actions">
                    
                    <div className="landing-text">Insta Clone</div>
                    <Link to="/Postview">
                    <div className="forward">
                    <button className="button">Enter</button>
                    </div>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}
export default Landing;