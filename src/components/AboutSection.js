import React from "react";
import style from "../style/aboutSection.module.css";

export default function AboutSection() {
  return (
    <div className={style.about_goezz}>
        <h2 className={style.Heading}>
          Why <span className={style.highlight}>goEzz</span>
        </h2>
        <p className={style.aboutPara}>
          goEzz brings affordable rides for children through established,
          experienced and accredited transportation providers.
        </p>
    </div>
  );
}
