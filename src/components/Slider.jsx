import React,{useState} from "react";
import "./Slider.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
export const Slider = ({data}) =>{
    const [slide, setSlide] = useState(0)

    const nextSlide =()=>{
        setSlide(slide === data.length -1 ? 0 : slide+1);
    };

    const preSlide =()=> {
        setSlide(slide === 0 ? data.length-1 : slide -1
            
    );
    };
    return(
        <div className="carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={preSlide} />
        {data.map((item, idx)=>{ 
            return(
                <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={ slide === idx ? "slide": "slide slide-hidden"} />
            )
        })}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
        <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
        </div>
    )
}