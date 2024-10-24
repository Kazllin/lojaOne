import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import d from "../../components/img/icons/logar.png"
import Slider from "react-slick"

export default function Rolon() {

  const setting = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 300,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container_page">
      <div className="rolon">
        <p>nada com nada</p>
      </div>
    </div>

  )
}