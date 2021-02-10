import React from "react";
import style from "../style/providerSection.module.css";

export default function ProviderSection() {
  return (
    <div className={style.providerSection}>
      <div class="row">
        <div class="col-md-6 mb-3 mb-md-0 d-flex align-items-start justify-content-center flex-column">
          <h2 className={style.Heading}>School & Enrichment</h2>
          <h2 className={style.Heading}>
            Providers -<span className={style.highlight}>Our Support</span>
          </h2>
          <p className={style.para} style={{ marginBottom: "1.3em" }}>
            Submit you ride request now. We provide huge discounts for multiple
            rides.
          </p>
          <a href="#" className={`btn ${style.btn}`}>
            Get Started
          </a>
        </div>
        <div class="col-md-6 text-center">
          <img src="/images/enrichment.jpg" alt="click here" />
        </div>
      </div>
    </div>
  );
}
