/* eslint-disable react/no-unescaped-entities */
import "./Portfolio.css";
import logo from "./images/logo.png";
import user from "./images/user.png";

export default function Portfolio() {
    const openTab = (tabName, event) => {
        // Get all tab links and tab contents

        event.preventDefault();
        let tabLinks = document.querySelectorAll(".tab-links");
        let tabContents = document.querySelectorAll(".tab-contents");

        // Remove "active-link" class from all tab links
        tabLinks.forEach((tabLink) => {
            tabLink.classList.remove("active-link");
        });

        // Remove "active-tab" class from all tab contents
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active-tab");
        });

        // Add "active-link" class to the clicked tab link
        event.currentTarget.classList.add("active-link");

        // Show the corresponding tab content based on tabName
        let selectedTab = document.getElementById(tabName);
        if (selectedTab) {
            selectedTab.classList.add("active-tab");
        }
    };
    document.querySelectorAll(".tab-links").forEach((tabLink) => {
        tabLink.addEventListener("click", () => {
            openTab(tabLink.getAttribute("data-tab"));
        });
    });
    return (
        <div>
            {/* --------------header section--------- */}
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

            {/* --------------About Section----------- */}
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
                                <p
                                    className="tab-links active-link"
                                    onClick={(e) => openTab("skills", e)}
                                >
                                    Skills
                                </p>
                                <p
                                    className="tab-links"
                                    onClick={(e) => openTab("experience", e)}
                                >
                                    Experience
                                </p>
                                <p
                                    className="tab-links"
                                    onClick={(e) => openTab("education", e)}
                                >
                                    Education
                                </p>
                            </div>
                            <div
                                id="skills"
                                className="tab-contents active-tab"
                            >
                                <ul>
                                    <li>
                                        <span>UI/UX</span>
                                        <br />
                                        Designing Web/App Interfaces
                                    </li>
                                    <li>
                                        <span>Web Development</span>
                                        <br />
                                        Web app development
                                    </li>
                                    <li>
                                        <span>App Development</span>
                                        <br />
                                        Building Android/IOS Apps
                                    </li>
                                    <br />
                                </ul>
                            </div>
                            {/* experience section */}
                            <div id="experience" className="tab-contents">
                                <ul>
                                    <li>
                                        <span>2012 - Current</span>
                                        <br />
                                        UI/UX Design Traing at ET Institute
                                    </li>
                                    <li>
                                        <span>2019 - 2021</span>
                                        <br />
                                        Team lead at Startup LLC.
                                    </li>
                                    <li>
                                        <span>2017 - 2019</span>
                                        <br />
                                        Learning UI/UX From Youtube
                                    </li>
                                    <li>
                                        <span>2016 - 2017</span>
                                        <br />
                                        Intership at Ekart -eCommerce
                                    </li>
                                </ul>
                                <br />
                            </div>
                            <div id="education" className="tab-contents">
                                <ul>
                                    <li>
                                        <span>2016</span>
                                        <br />
                                        UI/UX Design Traing at ET Institute
                                    </li>
                                    <li>
                                        <span>2016</span>
                                        <br />
                                        MBA from MIT Pune.
                                    </li>
                                    <li>
                                        <span>2014</span>
                                        <br />
                                        BBA from PCET Pune.
                                    </li>
                                    <br />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
