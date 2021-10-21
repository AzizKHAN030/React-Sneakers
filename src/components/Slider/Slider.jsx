import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

export default function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Slider {...settings} className="mainSlider">
      <div className="mainSliderInner mainSliderInner1">
        <img src="./img/slider1.jpg" alt="" />
      </div>
      <div className="mainSliderInner mainSliderInner2">
        {" "}
        <img src="./img/slider2.jpg" alt="" />
      </div>
      <div className="mainSliderInner mainSliderInner3">
        {" "}
        <img src="./img/slider3.jpg" alt="" />
      </div>
    </Slider>
  );
}
