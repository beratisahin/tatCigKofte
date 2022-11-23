import React from 'react'
import './Icecekler.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

import i1 from "../icecek/icecekler/1.webp";
import i2 from "../icecek/icecekler/2.webp";
import i3 from "../icecek/icecekler/3.webp";
import i4 from "../icecek/icecekler/4.webp";
import i5 from "../icecek/icecekler/5.webp";
import i6 from "../icecek/icecekler/6.webp";
import i7 from "../icecek/icecekler/7.webp";
import i8 from "../icecek/icecekler/8.webp";
import i9 from "../icecek/icecekler/9.webp";
import i10 from "../icecek/icecekler/10.webp";







//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    dots:2,
    loop:true,
    autoplay: true,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2,
        },
        400: {
            items: 2,
        },
        600: {
            items: 4,
        },
        700: {
            items: 5,
        },
        1000: {
            items: 6,
        }
    },
  };




export default function Owl() {
    
    
    return (
        
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
        <OwlCarousel className="owl-theme owl-roof" {...options}>

            
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={i1} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Ayran - 4₺</p>
               </div>
                
            </div>
            


            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={i2} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Şalgam - 8₺</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={i3} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Kola - 10₺</p>
               </div> 
            </div>

            

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={i4} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Fanta  - 10₺</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={i5} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Meyveli Soda - 6₺</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={i6} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Meyveli Soda - 6₺</p>
               </div> 
            </div>
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={i7} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Meyveli Soda - 6₺</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={i8} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Sade Soda - 5₺</p>
               </div> 
            </div>
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={i9} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Meyveli Soda - 6₺</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={i10} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Niğde Gazozu - 6₺</p>
               </div> 
            </div>
         

           
        </OwlCarousel>

       </div> 
      
    )
}


