import React from "react";
import styles from "./styles/cardthree.module.css";
import {
  FaAcquisitionsIncorporated,
  FaCheck,
  FaCheckDouble,
  FaDollarSign,
  FaShieldAlt,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";

export default function Cardthree({ title, name, detail }) {
  return (
    <div className={styles.main}>
      <FaUserCircle
        style={{
          fontSize: "90px",
          color: "rgb(40, 40, 40)",
          margin: "30px 0",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgb(200 ,200 ,200)",
          margin: "0 20px",
        }}
      ></div>
      {/* <FaCheckDouble />
      <FaUser />
      <FaDollarSign /> */}
      <h2
        style={{
          margin: "10px 0",
          color: "rgb(207, 19, 19)",
        }}
      >
        {title}
      </h2>
      <h3>{name}</h3>
      <p
        style={{
          fontSize: "17px",
          fontWeight: "540",
          margin: "10px 0",
          color: "blue",
        }}
      >
        {detail}
      </p>
    </div>
  );
}
