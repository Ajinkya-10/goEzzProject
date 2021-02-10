import React from "react";
import style from "../style/contactSection.module.css";

export default function ContactSection() {
  return (
    <div className={style.contact_us}>
      <div className={style.contact_inner}>
        <h2 className={style.Heading}>Talk To <span>Us</span></h2>
        <p className={style.search}>Looking for more information ? </p>
        <p className={style.contact_para}>
          Contact Us and we will follow up with you as soon as possible. Have a
          simple question?
          <a className={style.contact_link} href="#">
            Check our FAQs
          </a>
        </p>
        <a className={`btn ${style.btn}`} href="#">
          Contact goEzz
        </a>
      </div>
    </div>
  );
}
