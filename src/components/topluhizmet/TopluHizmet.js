import Taslak from "../taslakhizmet/Taslak.js";
import "./TopluHizmet.css";
import m1 from "./hizmetFotolar/1.png";
import m2 from "./hizmetFotolar/2.png";
import m3 from "./hizmetFotolar/3.png";
import m4 from "./hizmetFotolar/4.png";
import m5 from "./hizmetFotolar/5.png";
import m6 from "./hizmetFotolar/6.png";
import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
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
            taslaktitle="Aile Menüsü - 1"
            taslakphoto={m2}
            taslaktext="Vezirköprü Tat Çiğ Köfte olarak en taze ve lezzetli ürünlerimizi sizlerle buluşturuyoruz"
            taslaklink="/medikal-cilt-bakimi"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Aile Menüsü - 2"
            taslakphoto={m5}
            taslaktext="Vezirköprü Tat Çiğ Köfte olarak en taze ve lezzetli ürünlerimizi sizlerle buluşturuyoruz"
            taslaklink="/robotix-lazer-epilasyon"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Aile Menüsü - 3"
            taslakphoto={m3}
            taslaktext="Vezirköprü Tat Çiğ Köfte olarak en taze ve lezzetli ürünlerimizi sizlerle buluşturuyoruz"
            taslaklink="/hydrafacial-cilt-bakimi"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Aile Menüsü - 4"
            taslakphoto={m4}
            taslaktext="Vezirköprü Tat Çiğ Köfte olarak en taze ve lezzetli ürünlerimizi sizlerle buluşturuyoruz"
            taslaklink="/g5-kavitasyon"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Aile Menüsü - 5"
            taslakphoto={m1}
            taslaktext="Vezirköprü Tat Çiğ Köfte olarak en taze ve lezzetli ürünlerimizi sizlerle buluşturuyoruz"
            taslaklink="/kirpik-lifting"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Aile Menüsü - 6 "
            taslakphoto={m6}
            taslaktext="Vezirköprü Tat Çiğ Köfte olarak en taze ve lezzetli ürünlerimizi sizlerle buluşturuyoruz"
            taslaklink="/kas-laminasyonu"
          />
          <Send />
        </div>
      </div>
    );
  }
}
