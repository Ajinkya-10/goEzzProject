import React from "react";
import style from "../style/securitySection.module.css";

export default function SecuritySection() {
  return (
    <div className={style.secureSection}>
      <div class="row">
        <div class="col-md-7 mb-4 mb-md-0">
          <h1 className={style.Heading}>Safety & Security</h1>
          <h2 className={style.text}>and TRUST</h2>
          <ul className={style.list}>
            <li className={style.listItem}>
              Ride attendance check-in and check-out with chain of custody to
              ensure child security
            </li>
            <li className={style.listItem}>
              live ride tracking and monitoring
            </li>
            <li className={style.listItem}>
              Alerts notification for all parties
            </li>
            <li className={style.listItem}>
              Provision for last minute change of schedule
            </li>
          </ul>
          <div className={style.downloads}>
            <h4 className={style.subHeading}>Dowload our official app from</h4>
            <div className={style.loadInner}>
              <a href="#">
                <img
                  class="download-link"
                  src="/images/appleStore.png"
                  alt="click here"
                />
              </a>
              <a href="#">
                <img
                  class="download-link pr-0"
                  src="/images/googlePlay.png"
                  alt="click here"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-5 text-center">
          <img
            src="/images/secure.png"
            alt="click here"
            style={{ width: "22.3125em" }}
          />
        </div>
      </div>
    </div>
  );
}
