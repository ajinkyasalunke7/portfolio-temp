/* eslint-disable react/no-unescaped-entities */
import "./Portfolio.css";
import logo from "./images/logo.png";
import user from "./images/user.png";

export default function Portfolio() {
    return (
        <div>
            {/* header section */}
            <div id="header">
                <div className="container">
                    <nav>
                        <img
                            src={logo}
                            className="logo"
                            draggable="false"
                            alt="Logo"
                        />
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#"> About</a>
                            </li>
                            <li>
                                <a href="#"> Services</a>
                            </li>
                            <li>
                                <a href="#"> Portfolio</a>
                            </li>
                            <li>
                                <a href="#"> Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-text">
                        <p>UI/UX Desginer</p>
                        <h1>
                            Hi, I'm <span>Client Name</span> <br /> From India
                        </h1>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src={user} />
                        </div>
                        <div className="about-col-2">
                            <h1 className="subtitle">About Me</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Neque ex nihil illo optio.
                                Molestiae et placeat ipsam fugiat vero aliquam?
                            </p>
                            <div className="tab-titles">
                                <p className="tab-links active-link">Skills</p>
                                <p className="tab-links">Experirnce</p>
                                <p className="tab-links">Education</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
