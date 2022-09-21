import "./Navbar.css";
import React, { Component } from "react";

import { Menubar } from 'primereact/menubar';

import BusinessIcon from '@material-ui/icons/Business';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import ContactlessIcon from '@material-ui/icons/Contactless';
import CategoryIcon from '@material-ui/icons/Category';

import Logo4 from "./2-2.png";
import tatLogo from "./tatLogo.png";


export default class Navbar extends Component {
  componentDidMount () {
    const script = document.createElement("script");

  
      const hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click", function () {
      this.classList.toggle("close");
    });
  

    document.body.appendChild(script);
}
  render() {
    
    return (
    
         <header>
          <nav class="navbar">
            <div class="branding">
              <a href="/">
                <img  className="BlueLivaLogo" title="Adıyaman Blue Liva Güzellik Merkezi" src={tatLogo}></img>
              </a>
                
            </div>
            <label for="input-hamburger" class="hamburger "></label>
            <input type="checkbox" id="input-hamburger" hidden></input>
        <ul class="menu">
          <li><a href="/" class="menu-link" style={{fontSize:"medium"}}><HomeIcon style={{fontSize:"medium"}}/>&nbsp;Ana Sayfa</a></li>
          <li><a href="/hakkimizda" class="menu-link" style={{fontSize:"medium"}}><BusinessIcon style={{fontSize:"medium"}}/>&nbsp;Hakkımızda</a></li>
       
          <li><a href="/cihazlarimiz" class="menu-link" style={{fontSize:"medium"}}><CategoryIcon style={{fontSize:"medium"}}/>&nbsp;Cihazlarımız</a></li>
        
          <li><a href="/iletisim" class="menu-link" style={{fontSize:"medium"}}><ContactMailIcon style={{fontSize:"medium"}}/>&nbsp;İletişim</a></li>
        </ul>



          </nav>
        </header>

          
   
      
     
    );
  }
}