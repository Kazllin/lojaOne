import './inicio.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Inicio(){

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1
  };

  return(
    <div className="page">
      <div className="container_page">
        <div className='container3'>
          <div className='frases_inicio'>
          <h1 className='titulo_inicio'>Tudo o que você<br/> precisa para a escola</h1>
          <p className='subtitulo_inicio'>Explore our curated selection of high-quality school supplies for<br/> all your educational needs.</p>
            <button className='btn_inicio'>COMPRE AGORA</button>
        </div>

        <div className="slider_inicio">
          <Slider {...setting}>
            <div className="carousel_inicio">
              <img src="" alt="" />
            </div>

            <div className="carousel_inicio">
              <img src="" alt="" className='img_inicio' />
            </div>

            <div className="carousel_inicio">
              <img src="" alt="" />
            </div>
          </Slider>
        </div>
          </div>

        
        <div className='container4'>
          
          </div>
      </div>
    </div>
  )
}