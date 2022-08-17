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
        tiltAngleYInitial={-15}
        perspective={800}
        trackOnWindow={true}
        reset={false}
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
            <div className={styles["link"]}>
              <a href={cv} target={"_blank"}>
                VIEW CV
              </a>
            </div>
            <div className={styles["link"]}>
              <a href="https://github.com/maslomeister" target={"_blank"}>
                GITHUB
              </a>
            </div>
            <div className={styles["link"]}>
              <a
                href="https://www.linkedin.com/in/maslomeister/"
                target={"_blank"}
              >
                LINKEDIN
              </a>
            </div>
            <div className={styles["link"]}>
              <a href="https://t.me/maslomeister" target={"_blank"}>
                TELEGRAM
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
