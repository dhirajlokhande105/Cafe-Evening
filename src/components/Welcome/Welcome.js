import React from 'react'
import welcomebanner from "../../images/welcome-image.jpg"
import './index.css'

export default function Welcome() {
    return (
        <section className="welcome-container">
            <div className="heading">
                <h3 className="welcome-title">Welcome to</h3>
                <h1 className="welcome-heading">The Cafe Evening</h1>
            </div>

            <div className="about-content">
                <div className="about-desc">
                    <p className="welcome-description">Discover a culinary oasis in the heart of Pune at The Cafe Evening. Indulge in artfully brewed coffees, delectable pastries, and savory delights – a menu crafted with passion and the freshest ingredients.
                    </p>
                    <p className="welcome-description">
                        Our cozy-chic ambiance invites you to unwind, creating the perfect backdrop for intimate moments or lively gatherings. Whether it's a casual coffee date or a celebratory toast, The Cafe Evening is your destination for memorable experiences.
                    </p>
                    <p className="welcome-description">
                        Our cozy-chic ambiance invites you to unwind, creating the perfect backdrop for intimate moments or lively gatherings. Whether it's a casual coffee date or a celebratory toast, The Cafe Evening is your destination for memorable experiences.
                    </p>
                    <button className="button">About Us</button>
                </div>
                <div className="banner-container">
                    <img src={welcomebanner} className="welcome-banner" />


                </div>
            </div>
        </section>
    )
}
