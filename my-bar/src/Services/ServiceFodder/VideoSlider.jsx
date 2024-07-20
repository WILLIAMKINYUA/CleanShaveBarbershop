import{React} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VideoSliders } from "../../VideoSliders";
const ImageSlider = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
return (
  <div className='servicePartTwo'>
       <Slider  className='slider'{...settings}>
      {VideoSliders.map(
        (service)=>(
      <div style={{ textAlign: "center" }}className='parttwo'key={service.id}>
      <video src={service.video} alt='Not Found'autoPlay="off" loop muted className='cardImage'/>
      
      </div>
      ))
      }</Slider>

          </div> 
)
}

    
    export default ImageSlider