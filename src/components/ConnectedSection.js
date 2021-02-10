import React from "react";
import style from "../style/connectedSection.module.css";

export default function ConnectedSection() {
  return (
    <div className={style.connected_us}
    >
        <div class="row">
          <div class="col-lg-6">
            <img
              src="/images/connectUs.png"
              alt="click here"
            />
          </div>
          <div
            class="col-lg-6"
          >
            <h2 className={style.Heading}>Always Connected</h2>
            <h3 className={style.text}>
              Get Notifications
            </h3>
            <div className={style.notification_box}>
              <div className={`${style.notification} align-self-start`}>
                <p>10 jan 2020 3:10 PM</p>
                <h3>Dropped for Swinmming Classes</h3>
              </div>
              <div className={`${style.notification} align-self-end`}>
                <p>10 jan 2020 3:10 PM</p>
                <h3>Dropped for Yoga Classes</h3>
              </div>
              <div className={`${style.notification} align-self-start`}>
                <p>10 jan 2020 3:10 PM</p>
                <h3>Bus onboarded for home</h3>
                <h6>Reacning Home in next 15 mins</h6>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
