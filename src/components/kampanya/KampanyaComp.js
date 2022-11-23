import React, { Component } from "react";
import "./Kampanya.css";

export default class KlinikComp extends Component {
  render() {
    //Destructing
    const { kampanyaResim} = this.props;
    return (
      <div className="item owl-slider">
        <div className="owlCarouselTempKlinik">
          <img
            src={kampanyaResim}
            className="owlCarouselImageKlinik"
            alt="Vezirköprü Çiğköfte"
            title="Vezirköprü Çiğköfte"
          ></img>
        </div>
      </div>
    );
  }
}
