import { Link } from 'react-router-dom';
import './index.scss'

const Home = () => {


    return ( 
        <div className = "container home-page">
            <div className = "text-zone">
                <h1> Hi, I 'm Joy Umoekpo!</h1> 
                <h2> Front End Developer</h2> 
                <Link to = "/contact" className ="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home