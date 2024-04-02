import React from "react";
import styles from "./styles/tripcard.module.css";
import {
  FaBinoculars,
  FaBuilding,
  FaBus,
  FaTaxi,
  FaUtensils,
} from "react-icons/fa";

export default function TripCard() {
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <p>4 DAYS & 3 NIGHTS @ RS.5,500</p>
        <p style={{ color: "blue" }}>Manali Packages By Volvo</p>
        <img
          src="https://mysterioushimachal.com/shimla-manali/images/destination/1.jpg"
          className={styles.pic}
        ></img>
        <p>SIGHTSEEING</p>

        <div className={styles.div1}>
          {" "}
          <p>KULLU-MANALI</p>
          <p>SOLANG VALLEY</p>
        </div>
        <div className={styles.div1}>
          {" "}
          <p>ROHTANG PASS</p>
          <p>MANIKARAN</p>
        </div>
        <p
          style={{
            borderTop: "1px solid grey",
            width: "100%",
            marginTop: "10px",
          }}
        >
          {" "}
        </p>
        <div className={styles.icons}>
          <div>
            <FaBus />
            <p>X</p>
          </div>
          <div>
            <FaTaxi />
            <p>cab</p>
          </div>
          <div>
            <FaBinoculars />
            <p>Sights</p>
          </div>
          <div>
            <FaBuilding />
            <p>Hotels</p>
          </div>
          <div>
            <FaUtensils />
            <p>Meals</p>
          </div>
        </div>
        <h3>Package Inclusion</h3>
        <p>Delhi-Manali-Delhi Ac Volvo Bus Tickets.</p>
        <p>Meals+Car+Volvo+Hotel.</p>
        <button className={styles.btn}>SEND ENQUIRY</button>
      </div>
    </div>
  );
}
