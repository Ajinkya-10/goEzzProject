import React from "react";
import style from "../style/downloadLinks.module.css";

export default function DownloadLinksSection() {
  return (
    <div className={style.download_links}>
      <h4
        
        className={style.load_heading}
      >
        Download our mobile app
      </h4>
      <div className={style.load_inner}>
        <a href="#">
          <img
            className={style.load_link}
            src="/images/appleStore.png"
            alt="click here"
          />
        </a>
        <a href="#">
          <img
            className={`${style.load_link} pr-0`}
            src="/images/googlePlay.png"
            alt="click here"
          />
        </a>
      </div>
    </div>
  );
}
