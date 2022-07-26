import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
    <div className="nav-bar">
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#a6a6a6" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#a6a6a6" />
                </NavLink>
                <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#a6a6a6" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#a6a6a6" />
                </NavLink>
            </nav>
        <ul>
            <li>
                <a
                    href="https://www.linkedin.com/in/joyumoekpo/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#a6a6a6" />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/JoyUmoekpo"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} color="#a6a6a6" />
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar