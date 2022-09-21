import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import YouTubeIcon from '@material-ui/icons/YouTube';
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MainLogo2 from "../header/tatLogo.png";



import React, { Component } from "react";

export default class Foooter extends Component {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div id="footer">
        <div class="row p-4" style={{ backgroundColor: "white", height:"auto" }}>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <a href="/" title="Vezirköprü Tat Çiğ Köfte" alt="Vezirköprü Tat Çiğ Köfte">
              <img
                src={MainLogo2}
                alt="logo"
                style={{ width: "24rem", height: "18rem",display:"block",align:"center",margin:"auto" }}
              ></img>
            </a>
            <p
              className="mt-4"
              style={{
                fontSize: "14px",
                fontFamily:"sans-serif",
                textAlign: "justify",
                textIndent: "1px",
              }}
            >
              {" "}
              Vezirköprü Çiğ Köfte olarak etli çiğ köfte tadında etsiz çiğ köftemiz bulunmaktadır. Her gün taze olarak gelen ürünlerimizle siz değerli müşterilerimize hizmet vermekteyiz. Tatlı ve kurabiye çeşitlerimiz, dondurma ve süt mısır vb ürünlerimiz de mevcuttur.
            </p>
          </div>


          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "12px",marginBottom:"2rem"  }}>
            <b style={{ color: "#FD0F0F", fontSize: "18px" }}>Çalışma Takvimi</b>
            <hr/>
            <table class="table table-striped" >
                    
                    <tbody>
                        <tr style={{height:"2px"}}>
                            <td>Pazartesi</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Salı</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Çarşamba</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Perşembe</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Cuma</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Cumartesi</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Pazar</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                      
                    </tbody>
                    
                    </table>
                   
                        <p style={{color:"red",fontSize:"13px"}}></p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <p style={{ color: "#FD0F0F", fontWeight: "bold", fontSize: "18px" }}>
              Vezirköprü Tat Çiğ Köfte
            </p>
            <hr/>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left" }}
            >
              <FacebookIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon className="icon" style={{fontSize:"24px",color:"purple"}}/>
            </a>
            <a
              href="https://wa.me/+905302479585"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon className="icon" style={{fontSize:"24px",color:"lightgreen"}}/>
            </a>
            <a
              href="tel: +905302479585"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon className="icon" style={{fontSize:"24px"}} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px",color:"red" }}
            >
              <YouTubeIcon className="icon" style={{fontSize:"24px"}} />
            </a>
            <br />
            <br/>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a href="mailto:vezirkopru.tat.cig.kofte@gmail.com">
                <EmailIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              vezirkopru.tat.cig.kofte@gmail.com  
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a
                href="tel: +905302479585"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SettingsPhoneIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              0530 247 95 85  <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              
              <a 
                href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12017.808613488854!2d35.4520107!3d41.1464841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd866292ca5dfda!2zVmV6aXJrw7ZwcsO8IFRhdCDDh2nEnyBLw7ZmdGU!5e0!3m2!1str!2str!4v1663776959479!5m2!1str!2str"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomeIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              Nalbantlı Mahallesi TOKİ Konutları <br/> Vezirköprü / Samsun{" "}

             
            </p>
          </div>





          <div className="col-12">
            
            <hr/> 
                    <div className="patent" >
                        
                            <p style={{fontSize:"12px",paddingLeft:"1rem",float:"left"}}> ©2021 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <a className="sebertech" href="tel: +905449125561"
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={{fontSize:"12px",paddingRight:"1rem",float:"right",textAlign:"right",color:"black"}}> ®Se<b>B</b>er Tech</a>
                    </div>
          </div>


          <div className="roof-location">
              <a href="https://goo.gl/maps/7ryRSpGz7PPH1rZW9" className="location_float" target="_blank" rel="noopener noreferrer">
                  <LocationOnIcon className="location-icon"/>
              </a>
          </div>

          <div className="roof-phone">
              <a href="tel: +905302479585" className="phone_float" target="_blank" rel="noopener noreferrer">
                  <PhoneIcon className="phone-icon"/>  
              </a>
          </div>

          <div className="roof-whatsapp">
              <a href="https://wa.me/+905302479585" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="whatsapp-icon"/>
              </a>
          </div>

        </div>

        
      </div>
    );
  }
}
