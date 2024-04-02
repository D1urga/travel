import React from "react";
import styles from "./styles/cardtwo.module.css";
import {
  FaAcquisitionsIncorporated,
  FaCheck,
  FaCheckDouble,
  FaDollarSign,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";

export default function Cardtwo() {
  return (
    <div className={styles.main}>
      <FaShieldAlt
        style={{
          fontSize: "90px",
          color: "rgb(207, 19, 19)",
          margin: "40px 0",
        }}
      />
      {/* <FaCheckDouble />
      <FaUser />
      <FaDollarSign /> */}
      <h2
        style={{
          margin: "10px 0",
        }}
      >
        EXPERIENCED & TRUSTWORTHY
      </h2>
      <p
        style={{
          fontSize: "14px",
          fontWeight: "540",
          margin: "10px 0",
        }}
      >
        We are Customer oriented Govt. Approved Agency
        Regd.No.:11-589/13-DTO-SML-1769 .
      </p>
    </div>
  );
}
