import React from "react";
import Tilt from "react-parallax-tilt";

import photo from "@/assets/images/photo.png";
import cv from "@/assets/cv.pdf";
import styles from "./card.module.css";

export function Card() {
  return (
    <div className={styles["card-container"]}>
      <Tilt
        className={styles["card"]}
        gyroscope={true}
        tiltAngleXInitial={-5}
        tiltAngleYInitial={-20}
        glareEnable={true}
        glarePosition="all"
        glareBorderRadius="12"
        perspective={1000}
        glareMaxOpacity={0.4}
        trackOnWindow={true}
        glareColor="#f5c3fd"
      >
        <div className={styles["card-inner"]}>
          <div className={styles["info-container"]}>
            <div className={styles["info-photo"]}>
              <img src={photo} />
            </div>
            <div className={styles["info-desc"]}>
              <p>Nikita Maslov</p>
              <p>Frontend Developer</p>
            </div>
          </div>
          <div className={styles["links"]}>
            <a href={cv} target={"_blank"}>
              VIEW CV
            </a>
            <a href="https://github.com/maslomeister" target={"_blank"}>
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/maslomeister/"
              target={"_blank"}
            >
              LINKEDIN
            </a>
            <a href="https://t.me/maslomeister" target={"_blank"}>
              TELEGRAM
            </a>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
