import React from "react";
import style from "../style/footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.customcontainer}>
        <div className={`row ${style.footer_inner}`}>
          <div className={`col-md-6 ${style.service_set}`}>
            <h3 className={style.heading}>
              Why
              <span style={{ textTransform: "initial" }}> goEzz Services?</span>
            </h3>
            <p className={`${style.service_para} mx-auto mx-md-0`}>
              At goEzz we make safety and trust our top-most priority and we
              understand these come with great responsibility. Our driving
              partners are experienced and trusted accredited transportation
              carriers.
            </p>
            <a
              className={style.pages_link}
              href="https://twitter.com/?lang=en"
              target="_blank"
            >
              <i class="fab fa-twitter-square"></i>
            </a>
            <a
              className={style.pages_link}
              href="https://www.invisionapp.com"
              target="_blank"
            >
              <i class="fab fa-invision"></i>
            </a>
            <a
              className={style.pages_link}
              href="https://www.facebook.com"
              target="_blank"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
          <div className={`col-md-3 ${style.using}`}>
            <h3 className={style.heading}>
              Useful
              <span> Links</span>
            </h3>
            <div className={style.used_para}>
              <span className={style.inner_para}>Parent Registration</span>
              <span className={style.inner_para}>Schools and Enrichment</span>
              <span className={style.inner_para}>Member Login</span>
              <span className={style.inner_para}>FAQs</span>
              <span className={style.inner_para}>Contact</span>
            </div>
          </div>
          <div className={`col-md-3 ${style.data} pr-0 pl-0`}>
            <img
              
              className={style.logo}
              src="/images/mainLogo.svg"
              alt="click here"
            />
            <p className={`${style.data_para}`}>
              1203 114th Ave SE, Bellevue WA 98004, USA
            </p>
            <p className={style.phone_number}>
              <span  className={style.text}>
                Phone:
              </span>{" "}
              +1 425-351-1767
            </p>
            <p className={`${style.email} d-flex justify-content-center justify-content-md-start`}>
              <span className={style.text}>
                Email:
              </span>{" "}
              vandana.wadhwani@nishaan.info
            </p>
          </div>
        </div>
        <div className={style.main_footer}>
          <p
            className={style.footer_para}
          >
            Copyright &copy; 2020 goEzz Services, Inc. All rights reserved.
          </p>
          <div className={style.links}>
            <a
              className={style.inner_text}
              href="#"
            >
              Privacy Policy
              <span className={style.braket}>|</span>
            </a>
            <a
              className={style.inner_text}
              href="#"
            >
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
