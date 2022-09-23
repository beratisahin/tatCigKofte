import React from 'react'
import useDocumentTitle from "../../useDocumentTitle.js";
import u1 from "../topluhizmet/hizmetFotolar/1.png";
import u2 from "../topluhizmet/hizmetFotolar/2.png";
import u3 from "../topluhizmet/hizmetFotolar/3.png";
import u4 from "../topluhizmet/hizmetFotolar/4.png";
import u5 from "../topluhizmet/hizmetFotolar/5.png";
import u6 from "../topluhizmet/hizmetFotolar/6.png";
import u7 from "../topluhizmet/hizmetFotolar/7.png";
import u8 from "../topluhizmet/hizmetFotolar/8.png";


export default function Urunler() {
    useDocumentTitle("Ürünlerimiz - Vezirköprü Tat Çiğ Köfte");
  return (
    <div className="col-12">
      <div
        className="card m-4"
        style={{
          align: "center",
          backgroundColor: "#f8f7fb",
          borderRadius: "5px",
        }}
      >
        <div className="card-body col-12" style={{ padding: "3rem" }}>
          
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                     <img src={u1} className="card-photo" loading="lazy" alt="Çiğ Köfte" title="Vezirköprü Çiğ Köfte" style={{width:"100%", height:"20rem",padding:"1%",borderRadius:"1rem"}}></img>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                     <img src={u2} className="card-photo" loading="lazy" alt="Çiğ Köfte" title="Vezirköprü Çiğ Köfte" style={{width:"100%", height:"20rem",padding:"1%",borderRadius:"1rem"}}></img>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                     <img src={u3} className="card-photo" loading="lazy" alt="Çiğ Köfte" title="Vezirköprü Çiğ Köfte" style={{width:"100%", height:"20rem",padding:"1%",borderRadius:"1rem"}}></img>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                     <img src={u4} className="card-photo" loading="lazy" alt="Çiğ Köfte" title="Vezirköprü Çiğ Köfte" style={{width:"100%", height:"20rem",padding:"1%",borderRadius:"1rem"}}></img>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                     <img src={u5} className="card-photo" loading="lazy" alt="Çiğ Köfte" title="Vezirköprü Çiğ Köfte" style={{width:"100%", height:"20rem",padding:"1%",borderRadius:"1rem"}}></img>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                     <img src={u6} className="card-photo" loading="lazy" alt="Çiğ Köfte" title="Vezirköprü Çiğ Köfte" style={{width:"100%", height:"20rem",padding:"1%",borderRadius:"1rem"}}></img>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                     <img src={u7} className="card-photo" loading="lazy" alt="Çiğ Köfte" title="Vezirköprü Çiğ Köfte" style={{width:"100%", height:"20rem",padding:"1%",borderRadius:"1rem"}}></img>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                     <img src={u8} className="card-photo" loading="lazy" alt="Çiğ Köfte" title="Vezirköprü Çiğ Köfte" style={{width:"100%", height:"20rem",padding:"1%",borderRadius:"1rem"}}></img>
            </div>

        </div>
      </div>
    </div>
  )
}
