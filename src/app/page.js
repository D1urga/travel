import React from "react";
import styles from "./page.module.css";

import {
  FaBinoculars,
  FaCity,
  FaHotel,
  FaTaxi,
  FaUtensils,
} from "react-icons/fa";
import TripCard from "./components/tripcard.js";
import Cardtwo from "./components/cardtwo";
import Cardthree from "./components/cardthree";

export default function Home() {
  const list = [
    <TripCard />,
    <TripCard />,
    <TripCard />,
    <TripCard />,
    <TripCard />,
    <TripCard />,
    <TripCard />,
    <TripCard />,
    <TripCard />,
  ];
  const list2 = [<Cardtwo />, <Cardtwo />, <Cardtwo />, <Cardtwo />];
  const list3 = [
    <Cardthree
      title="Contact Us"
      name="Address"
      detail=" Sector 44, noida, UP"
    />,
    <Cardthree
      title="Call Now"
      name="Mobile No     : 098175-01500"
      detail=" Mobile No     : 088945-50050"
    />,
    <Cardthree
      title="Email"
      name="Contact"
      detail="theldtourandtravels@gmail.com"
    />,
  ];
  return (
    <div className={styles.main}>
      <div className={styles.topbar}>
        <div className={styles.title}>
          <img src="/tour1.jpeg" className={styles.logo}></img>
        </div>
        <ul className={styles.list}>
          <li>
            <p>+91 8859342576</p>
          </li>
        </ul>
      </div>
      <div className={styles.body}>
        <div className={styles.div1}>
          <h2 className={styles.h21}>
            SHIMLA-MANALI BEST DEALS - CALL: 8859342576
          </h2>
          <div className={styles.icons}>
            <FaCity className={styles.icon} />
            <FaBinoculars className={styles.icon} />
            <FaUtensils className={styles.icon} />
            <FaTaxi className={styles.icon} />
          </div>
          <h2 className={styles.h22}>25% Off Winter Special - Enquire Now</h2>
          <h1 className={styles.h23}>BEST DEALS</h1>
        </div>
        <div className={styles.div2}>
          <h2 className={styles.h31}>Fill The Details</h2>
          <input className={styles.input} placeholder="Full Name"></input>
          <input className={styles.input} placeholder="Mobile Number"></input>
          <input className={styles.input} placeholder="Email Id"></input>
          <button className={styles.btn}>Call back request</button>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Mysterious Himachal Offers Best Deals for Winter Packages</p>
      </div>
      <div className={styles.grid}>
        {list.map((data, index) => (
          <div key={index}>{list[index]}</div>
        ))}
      </div>
      <div className={styles.bottom}>
        <p>Experienced & Customer Oriented</p>
      </div>
      <div className={styles.grid2}>
        {list.map((data, index) => (
          <div key={index}>{list2[index]}</div>
        ))}
      </div>
      <div className={styles.bottom}>
        <p>Contact Us</p>
      </div>
      <div className={styles.grid3}>
        {list.map((data, index) => (
          <div key={index}>{list3[index]}</div>
        ))}
      </div>
      <div className={styles.footer}>
        <div>
          <p>Have Queries ? Call for any assistance on</p>
          <p>+91 8859342576</p>
          <p>
            (Contact for Shimla Manali Packages, Manali Volvo Packages,
            Dharmashala Dalhousie Tours, Honeymoon Packages, Family Trips.)
          </p>
        </div>
        <img src="/tour1.jpeg" className={styles.logo1}></img>
      </div>
    </div>
  );
}
