import React from "react";
import style from "../style/parentSection.module.css";

export default function ParentSection() {
  return (
    <div className={style.parentSection}>
      <div class="row flex-wrap-reverse">
        <div class="col-md-6">
          <img src="/images/parents.png" alt="click here" />
        </div>
        <div class="col-md-6 mb-3 mb-md-0 mt-0 mt-md-5">
          <div>
            <h2 className={style.Heading}>Parents & Guardians</h2>
            <h2 className={style.text}>Our Commitment</h2>
            <p className={style.para} style={{ marginBottom: "1.3em" }}>
              Submit your request now. We will match your route and send you
              ride details.
            </p>
            <a href="#" className={`${style.btn} btn`}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
