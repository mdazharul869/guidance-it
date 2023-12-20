/* eslint-disable no-unused-vars */
import React from 'react'

const MostPopularCourse = () => {
  return (
<>
{/* <!-- 
        - #DEPARTMENTS
      --> */}

      <section className="departments">
        <div className="containera">

          <img src="https://raw.githubusercontent.com/mdazharul869/all-img/3b736b80e9314e46493db54dc0ec7308224ea597/departmets-vector.svg" alt="Vector line art" className="vector-line"/>

          <h2 className="h2 departments-title">Our Most of Popular Course</h2>

          <ul className="departments-list">

            <li>
              <div className="departments-card">

                <a href="#" className="card-banner">
                  <figure>
                    <img src="https://raw.githubusercontent.com/mdazharul869/all-img/main/depertment-1.png" />
                  </figure>
                </a>

                <a href="#">
                  <h3 className="h3 card-title">Digital Marketing</h3>
                </a>

                <p className="card-text">
                  Assertively parallel task synergistic deliverables after high-quality.
                </p>

                <a href="#" className="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div className="departments-card">

                <a href="#" className="card-banner">
                  <figure>
                    <img src="https://raw.githubusercontent.com/mdazharul869/all-img/main/depertment-2.png" alt="Civil Engineering" />
                  </figure>
                </a>

                <a href="#">
                  <h3 className="h3 card-title">Web Devolopment</h3>
                </a>

                <p className="card-text">
                  Assertively parallel task synergistic deliverables after high-quality.
                </p>

                <a href="#" className="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div className="departments-card">

                <a href="#" className="card-banner">
                  <figure>
                    <img src="https://raw.githubusercontent.com/mdazharul869/all-img/main/depertment-3.png" />
                  </figure>
                </a>

                <a href="#">
                  <h3 className="h3 card-title">Marketing</h3>
                </a>

                <p className="card-text">
                  Assertively parallel task synergistic deliverables after high-quality.
                </p>

                <a href="#" className="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>

          </ul>

          <button className="btn btn-primary">View All Course</button>

        </div>
      </section>

</>
  )
}

export default MostPopularCourse
