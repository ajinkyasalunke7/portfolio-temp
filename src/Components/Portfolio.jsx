/* eslint-disable react/no-unescaped-entities */
import "./Portfolio.css";
import logo from "./images/logo.png";
import user from "./images/user.png";
import work_1 from "./images/work-1.png";
import work_2 from "./images/work-2.png";
import work_3 from "./images/work-3.png";
import cv from "./images/my-cv.pdf";
import { useState } from "react";

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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
        document.getElementById("side_menu").style.right = "0";
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.getElementById("side_menu").style.right = "-200px";
    };
    const handleMenuItemClick = (header) => {
        if (header === "header") {
            // Check for the specific header value and trigger vibration
            if (navigator.vibrate) {
                navigator.vibrate(100);
            }
        }
        navigator.vibrate(100);
        closeMenu(); // Close the menu when any menu item is clicked
    };

    // const side_menu = document.getElementById("side_menu");
    // const closeMenu = () => {
    //     side_menu.style.right = "-200px";
    // };
    // const openMenu = () => {
    //     console.log("Heelo");
    //     side_menu.style.right = "0";
    // };

    function submitForm() {
        const wait_msg = document.getElementById("wait-msg");
        const msg = document.getElementById("msg");
        const spinner = document.getElementById("spinner");
        // const form = document.getElementById("form");
        const url =
            "https://script.google.com/macros/s/AKfycbw8EmE9F1GhRhkWBlOtiZ_tzF7XDvgUqdYbEPEl-KizjjJUbwxIPRfWhmmvO0dgP9U/exec";

        try {
            const scriptURL = url;
            const form = document.forms["submit-to-google-sheet"];

            form.addEventListener("submit", (e) => {
                // form.style.display = "none";
                document.getElementById("Name").readOnly = true;
                document.getElementById("Email").readOnly = true;
                document.getElementById("Message").readOnly = true;
                document.getElementById("cus").readOnly = true;
                document.getElementById("dis").display = "block";

                wait_msg.innerHTML = "Please wait...";
                spinner.style.display = "block";
                e.preventDefault();
                fetch(scriptURL, { method: "POST", body: new FormData(form) })
                    .then((response) => {
                        wait_msg.innerHTML = "";

                        msg.innerHTML = "Message Sent Successfully";
                        spinner.style.display = "none";
                        setTimeout(function () {
                            msg.innerHTML = "";
                        }, 3000);
                        form.reset();
                        document.getElementById("Name").readOnly = false;
                        document.getElementById("Email").readOnly = false;
                        document.getElementById("Message").readOnly = false;
                        document.getElementById("cus").readOnly = false;
                        // console.log("Success!", response);
                    })
                    .catch((error) => console.error("Error!", error.message));
            });
        } catch (error) {
            console.log(error.message);
        }
    }

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
                        <ul id="side_menu" className={isMenuOpen ? "open" : ""}>
                            <li>
                                <a
                                    href="#header"
                                    onClick={() =>
                                        handleMenuItemClick("header")
                                    }
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={handleMenuItemClick}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    onClick={handleMenuItemClick}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    onClick={handleMenuItemClick}
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={handleMenuItemClick}
                                >
                                    Contact
                                </a>
                            </li>
                            <i
                                className="fa-solid fa-xmark close"
                                onClick={(e) => closeMenu(e)}
                            ></i>
                        </ul>
                        <i
                            className="fa-solid fa-bars menu"
                            onClick={(e) => openMenu(e)}
                        ></i>
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

            {/* --------------Services Section----------- */}
            <div id="services">
                <div className="container">
                    <h1 className="subtitle">My Services</h1>
                    <div className="services-list">
                        <div>
                            <i className="fa-solid fa-code"></i>
                            <h2>Web Design</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Esse, aperiam.
                            </p>
                            <a href="#">Learn More</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-figma"></i>
                            <h2>UI/UX Design</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Esse, aperiam.
                            </p>
                            <a href="#">Learn More</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-app-store"></i>
                            <h2>App Development</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Esse, aperiam.
                            </p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------Portfolio Section----------- */}
            <div id="portfolio">
                <div className="container">
                    <h1 className="subtitle">My Work</h1>
                    <div className="work-list">
                        <div className="work">
                            <img src={work_1} alt="" />
                            <div className="layer">
                                <h3>Social Media App</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Repellendus, inventore.
                                </p>
                                <a href="#">
                                    {/* <i className="fa-solid fa-link"></i> */}
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img src={work_2} alt="" />
                            <div className="layer">
                                <h3>Music App</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Repellendus, inventore.
                                </p>
                                <a href="#">
                                    {/* <i className="fa-solid fa-link"></i> */}
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img src={work_3} alt="" />
                            <div className="layer">
                                <h3>eCommerce Web App</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Repellendus, inventore.
                                </p>
                                <a href="#">
                                    {/* <i className="fa-solid fa-link"></i> */}
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn">
                        See More
                    </a>
                </div>
            </div>

            {/* --------------Contact Section----------- */}

            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="subtitle">Contact Me</h1>
                            <p>
                                <i className="fa-solid fa-paper-plane"></i>
                                contact#gmail.com
                            </p>
                            <p>
                                <i className="fa-solid fa-phone-square"></i>
                                <span id="code">+91&nbsp;</span>6979969559
                            </p>
                            <div className="social-icons">
                                <a href="#">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </div>
                            <a href={cv} className="btn btnDownload" download>
                                Download CV
                            </a>
                        </div>
                        <div className="contact-right" id="form">
                            <form id="frm" name="submit-to-google-sheet">
                                <input
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    placeholder="Your Fullname"
                                    required
                                />
                                <input
                                    type="email"
                                    name="Email"
                                    id="Email"
                                    placeholder="Your Email"
                                    required
                                />
                                <textarea
                                    name="Message"
                                    id="Message"
                                    rows="6"
                                    placeholder="Your Message"
                                ></textarea>
                                <input
                                    type="submit"
                                    className="btn btnDownload"
                                    id="cus"
                                    value="Submit"
                                    onClick={submitForm}
                                />
                            </form>
                            <div id="dis">
                                <span id="wait-msg"></span>
                                <span id="msg"></span>
                                <span className="spinner" id="spinner"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>
                        Copyright © Ajinkya.&nbsp; Made with&nbsp;
                        <i
                            className="fa-solid fa-heart fa-bounce"
                            id="dHeart"
                        ></i>
                        &nbsp;by Ajinkya Salunke
                    </p>
                </div>
            </div>
        </div>
    );
}
