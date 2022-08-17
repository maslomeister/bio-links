import { useState } from "react";

import { Card } from "../card/card";

import styles from "./app.module.css";

function App() {
  return (
    <div className="App">
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={styles.content}>
        <Card />
      </div>
    </div>
  );
}

export default App;
