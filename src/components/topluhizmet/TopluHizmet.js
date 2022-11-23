import Taslak from "../taslakhizmet/Taslak.js";
import "./TopluHizmet.css";
import m1 from "./hizmetFotolar/1.webp";
import m2 from "./hizmetFotolar/2.webp";
import m3 from "./hizmetFotolar/3.webp";
import m4 from "./hizmetFotolar/4.webp";
import m5 from "./hizmetFotolar/5.webp";
import m6 from "./hizmetFotolar/6.webp";
import React, { Component } from "react";
import Send from "./Send.js";

export default class TopluHizmet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      kampanyaAd: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.setState({
      kampanyaAd: encodeURI(
        `https://wa.me/+905302479585?text=${e.target.value}`
      ),
    });
  }

  render() {
    return (
      <div
        class="col-12"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginLeft: "-2rem",
        }}
      >
         <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Menü 2: Ekonomik Paket - 110₺"
            taslakphoto={m5}
            taslaktext="Kiloluk Paket - 1000gr Çiğ Köfte, 8 Adet Lavaş, Tam Göbek, Sos"
            taslaklink="/"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Menü 1: Aile Boyu - 95₺"
            taslakphoto={m2}
            taslaktext="Aile Boyu - 800gr Çiğ Köfte, 6 Adet Lavaş, 3 Çeyrek Göbek, Sos, Limon"
            taslaklink="/"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Menü 3: Tam Porsiyon - 30₺"
            taslakphoto={m3}
            taslaktext="Tam Porsiyon - 250 gr Çiğ Köfte, 2 Adet Lavaş, Çeyrek Göbek, Sos, Limon"
            taslaklink="/"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Menü 4: Ekstra Porsiyon - 40₺"
            taslakphoto={m4}
            taslaktext="Ekstra Porsiyon - 300 gr Çiğ Köfte, 2 Adet Lavaş, Çeyrek Göbek, Sos, Limon"
            taslaklink="/"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Menü 5: Dürüm - 20₺"
            taslakphoto={m1}
            taslaktext="Dürüm - 90 gr Çiğ Köfte, 1 Adet Lavaş, Yeşillik, Ayran"
            taslaklink="/"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Menü 6: Maxi Dürüm - 25₺ "
            taslakphoto={m6}
            taslaktext="140 gr Çiğ Köfte, 2 Adet Lavaş, Bol Yeşillik, Ayran"
            taslaklink="/"
          />
          <Send />
        </div>
      </div>
    );
  }
}
