import React from 'react'
import './Owl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';

import o1 from "../owlcarousel/owlIcons/1.png";
import o2 from "../owlcarousel/owlIcons/2.png";
import o3 from "../owlcarousel/owlIcons/3.png";





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
                    <img src={o1} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Ayran</p>
               </div>
                
            </div>
            


            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o2} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Kola</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o3} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Şalgam</p>
               </div> 
            </div>

            

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o1} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Ayran</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o2} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Kola</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o3} className="owlCarouselImage" alt="Vezirköprü Tat Çiğ Köfte" title="Vezirköprü Tat Çiğ Köfte"></img>
                   <p className="owlCarouselContent">Şalgam</p>
               </div> 
            </div>

           
        </OwlCarousel>

       </div> 
      
    )
}


