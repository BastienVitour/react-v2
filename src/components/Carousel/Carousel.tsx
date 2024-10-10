import CarouselProps from "./carouselProps";
import "./carousel.scss";
import { useEffect, useRef, useState } from "react";

export default function Carousel({ ...props }: CarouselProps) {

    const carouselItems = useRef(null);
    const carouselPagination = useRef(null);
    const [active, setActive] = useState<number>(0);

    const handleSlideChange = (direction: number) => {
        const items: HTMLCollection = carouselItems.current?.children;
        if(direction < 0) {
            if(active !== 0) {
                setActive(active - 1);
            }
            else {
                setActive(items.length - 1);
            }
        }
        else {
            if(active !== items.length-1) {
                setActive(active + 1);
            }
            else {
                setActive(0)
            }
        }
    }

    useEffect(() => {        
        const items: HTMLCollection = carouselItems.current?.children;

        const autoplayInterval = setInterval(() => {
            if(props.autoplay !== undefined && props.autoplay) {
                
                setActive((prevActive: number) => {
                    if(prevActive !== items.length -1) {
                        return prevActive + 1;
                    }
                    else {                    
                        return 0;
                    }
                })
            }
        }, props.autoplayTimer ? props.autoplayTimer : 3000);

        return () => clearInterval(autoplayInterval);
    }, [props.autoplay, props.autoplayTimer, props.children])

    return(

        <div 
            className={`carousel-main ` + (props.class ? props.class : "")}
            style={Object.assign({"width": props.width ? props.width : "max-content"}, props.style ? props.style : {})}
        >
            
            <div className="carousel-items" ref={carouselItems}>
                {
                    props.children.map((element, index) => {
                        return(
                            <div key={index} className={`carousel-item ${index === active && "active"}`}>{element}</div>
                        );
                    })
                }
            </div>

            <button onClick={() => handleSlideChange(-1)} className="arrow-container arrow-container-prev">
                <div className="carousel-previous"></div>
            </button>
            <button onClick={() => handleSlideChange(1)} className="arrow-container arrow-container-next">
                <div className="carousel-next"></div>
            </button>

            {
                props.pagination !== undefined && props.pagination && 
                <div ref={carouselPagination} className="carousel-pagination">
                    {
                        Array.from(props.children).map((_, index) => {
                            return(
                                <div 
                                    key={index}
                                    onClick={() => setActive(index)}
                                    className={`carousel-page ${index === active && "active"}`}
                                ></div>
                            );
                        })
                    }
                </div>
            }
        </div>

    );

}