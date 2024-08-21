import './inicio.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import d from "../../components/img/icons/logar.png"
import Slider from "react-slick"

export default function Inicio() {

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
    <div className="page">
      <div className="container_page">
        <div className='container3'>
          <div className='frases_inicio'>
            <h1 className='titulo_inicio'>Tudo o que você<br /> precisa para a escola</h1>
            <p className='subtitulo_inicio'>Explore our curated selection of high-quality school supplies for<br /> all your educational needs.</p>
            <button className='btn_inicio'>COMPRE AGORA</button>
          </div>

          <div className="slider_inicio">
            <Slider {...setting}>
              <div className="carousel_inicio">
                <img src={d} alt="" className='img_inicio' />
              </div>

              <div className="carousel_inicio">
                <img src={d} alt="" className='img_inicio' />
              </div>

              <div className="carousel_inicio">
                <img src={d} alt="" className='img_inicio' />
              </div>
            </Slider>
          </div>
        </div>


        <div className="container4">
          <h1 className="carde_titulo">Popular Products</h1>
          <div className="carde_grid">
            <div className="carde_inicio">
              <img src="" alt="" className="carde_img" />
              <div className="carde_info">
                <h2 className="carde_nome">Roupas</h2>
                <p className="carde_descricao">Camisa</p>
                <p className="carde_preco">12</p>
                <button className="carde_add"></button>
              </div>
            </div>
          </div>

          <div className="carde_grid">
            <div className="carde_inicio">
              <img src="" alt="" className="carde_img" />
              <div className="carde_info">
                <h2 className="carde_nome">Roupas</h2>
                <p className="carde_descricao">Camisa</p>
                <p className="carde_preco">12</p>
                <button className="carde_add"></button>
              </div>
            </div>
          </div>

          <div className="carde_grid">
            <div className="carde_inicio">
              <img src="" alt="" className="carde_img" />
              <div className="carde_info">
                <h2 className="carde_nome">Roupas</h2>
                <p className="carde_descricao">Camisa</p>
                <p className="carde_preco">12</p>
                <button className="carde_add"></button>
              </div>
            </div>
          </div>

          <div className="carde_grid">
            <div className="carde_inicio">
              <img src="" alt="" className="carde_img" />
              <div className="carde_info">
                <h2 className="carde_nome">Roupas</h2>
                <p className="carde_descricao">Camisa</p>
                <p className="carde_preco">12</p>
                <button className="carde_add"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}