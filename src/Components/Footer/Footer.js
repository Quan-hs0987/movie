import React from "react";
import "./Footer.css";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="box">
                        <ul className="flex">
                            <li>Terms of Use</li>
                            <li>Privacy - Policy</li>
                            <li>Blog</li>
                            <li>FAQ</li>
                            <li>Watch List</li>
                        </ul>
                        <p>
                            These Terms of Use govern how you use our services.
                            As used in these Terms of Use, the terms “Netflix
                            services,” “our services,” or “services” mean
                            personalized services provided by Netflix to explore
                            Explore and enjoy content on Netflix, including all
                            features and functionality, recommendations and
                            reviews, our websites and user interfaces, and all
                            content and software associated with the service.
                            our service. "You" in these Terms of Use refers to
                            the member who created the Netflix account and whose
                            payment method was charged.
                        </p>
                    </div>
                    <div className="box">
                        <h3>Follow Us</h3>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="box">
                        <h3>Streamit App</h3>
                        <div className="img flexSB">
                            <img src="https://img.icons8.com/fluency/48/000000/google-play.png" />
                            <span>Google Play</span>
                            <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" />
                            <span>App Store</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
