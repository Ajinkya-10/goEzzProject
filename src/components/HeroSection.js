import React from "react";
import style from "../style/heroSection.module.css";

export default function HeroSection() {
  return (
    <header className={style.HeroSection}>
      <div className={style.customcontainer}>
        <div class="row">
          <div class="col-lg-6">
            <div className={style.information}>
              <h1 className={style.Heading}>Children's Ride</h1>
              <h1 className={style.Heading}>
                with <span>Safety</span>,<span>Trust </span>
                and <span>Peace of Mind</span>
              </h1>
              <p className={`${style.para} mb-0`}>Door To Door</p>
              <p className={style.para}>Ride Share For Children</p>
              <a href="#">
                <img
                  className={style.busImage}
                  src="/images/schoolBus.jpg"
                  alt="click here"
                />
              </a>
              <a href="#" className={style.videoLink}>
                Click to explore our services
              </a>
            </div>
          </div>
          <div class="col-lg-6 mt-3 mt-lg-0">
            <img
              class="children-image d-lg-none w-100"
              src="/images/childrens.png"
              alt="click here"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
