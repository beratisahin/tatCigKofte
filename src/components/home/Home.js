import React from "react";
import ReactPlayer from "react-player";
import "./Home.css";
import Icecek from "../icecek/Icecekler";
import Kampanya from "../kampanya/Kampanya.js";
import useDocumentTitle from "../../useDocumentTitle.js";

import TopluHizmet from "../topluhizmet/TopluHizmet.js";

function Home() {
  useDocumentTitle("Vezirköprü Tat Çiğ Köfte");
  return (
    <div>
      <div className="row">
        <h2
          className="doktorlarTitle"
          style={{
            textAlign: "center",
            fontSize: "large",
            marginTop: "1rem",
            color: "#FD0F0F",
            fontFamily: "sans-serif",
          }}
        >
          Saat 18:00 - 24:00 arası Paket Servisimiz Bulunmaktadır
        </h2>
        <Kampanya />
      </div>
      <p className="harita_baslik">Menülerimiz</p>
      <div className="row">
        <TopluHizmet />
      </div>

      <hr />

      <div className="row">
        <h2 className="harita_baslik">
          İçeceklerimiz
        </h2>
        <Icecek />
      </div>
     
      <br />
      <div className="row m-2">
        <div
          className="col-lg-12  col-12 harita"
          style={{ marginTop: "2.5rem" }}
        >
          <p className="harita_baslik">Lokasyonumuz</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12017.808613488854!2d35.4520107!3d41.1464841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd866292ca5dfda!2zVmV6aXJrw7ZwcsO8IFRhdCDDh2nEnyBLw7ZmdGU!5e0!3m2!1str!2str!4v1663776959479!5m2!1str!2str"
            className="googleharita"
            style={{
              width: "100%",
              height: "45rem",
              frameBorder: "0",
              allowFullScreen: "",
              referrerpolicy: "no-referrer-when-downgrade",
              ariaHidden: "false",
              tabIndex: "0",
              border: "2px #FD0F0F solid",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
            }}
          >
            {" "}
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
