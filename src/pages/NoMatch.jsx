/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NoMatch.module.css";

const NoMatch = () => {
  return (
    <div className={`container-fluid ${styles.noMatchCont}`}>
      <div
        className={`d-flex flex-column justify-content-center align-items-center ${styles.mainDev}`}
      >
        <h1>This Page is coming so soon, Be Patient</h1>

        <Link to="/" className={styles.noMatchLink}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;
