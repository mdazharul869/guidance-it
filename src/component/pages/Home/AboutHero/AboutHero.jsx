/* eslint-disable no-unused-vars */
import React from 'react'

const AboutHero = () => {
  return (
    <>
              {/* <!-- 
        - #ABOUT
      --> */}

      <section className="about">
        <div className="containera">

          <div className="about-banner">

            <img src="https://raw.githubusercontent.com/mdazharul869/all-img/main/about-banner.png" alt="Eduland students" className="about-img"/>

            <img src="https://raw.githubusercontent.com/mdazharul869/all-img/e3aa5e470e5476b760e4042f0c965a50e7a22221/about-vector.svg" alt="Vector line art" className="vector-line"/>

            <button className="play-btn">
              <ion-icon name="play"></ion-icon>
            </button>

          </div>

          <div className="about-content">

            <h2 className="h2 about-title">We Help to Create Possibility & Success in Your Career!</h2>

            <p className="section-text">
              Continually administrate process-centric human capital rather than bleeding-edge methodologies.
              Distinctively supply
              accurate methods of empowerment before.
            </p>

            <button className="btn btn-primary">Get Started Today</button>

          </div>

        </div>
      </section>

    </>
  )
}

export default AboutHero