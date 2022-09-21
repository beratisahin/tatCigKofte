import React from 'react'
import './Klinik.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import k1 from "./kampanyalar/1.png";
import k2 from "./kampanyalar/2.png";
import k3 from "./kampanyalar/3.png";


import KampComp from "./KlinikComp.js";





//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    autoplayHoverPause:false,
    dots:2,
    autoplay: true,
    loop:true,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    },
  };


export default function Klinik() {
    return (
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",zIndex: "1000"}}>
            <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
               <KampComp
                    kampanyaResim={k1}
                    kampanyaAd="https://wa.me/+905302479585?text=Merhaba%2C%20Komple%20V%C3%BCcut%20(T%C3%BCm%20Bacak%20-%20Genital%20B%C3%B6lge%20-%20Kol%20-%20Koltukalt%C4%B1)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k2}
                    kampanyaAd="https://wa.me/+905302479585?text=Merhaba%2C%20T%C3%BCm%20V%C3%BCcut%20(T%C3%BCm%20Bacak%20-%20Genital%20B%C3%B6lge%20-%20Koltukalt%C4%B1)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k3}
                    kampanyaAd="https://wa.me/+905302479585?text=Merhaba%2C%20Tepeden%20T%C4%B1rna%C4%9Fa%20(Y%C3%BCz%20B%C3%B6lgesi%20-%20Genital%20B%C3%B6lge%20-%20Koltukalt%C4%B1-%20T%C3%BCm%20Bacak-%20Bel%2BS%C4%B1rt%2BPopo%20-%20G%C3%B6bek%2BG%C3%B6%C4%9F%C3%BCs%2BOmuz)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
            </OwlCarousel>
        </div>    
    )
}

