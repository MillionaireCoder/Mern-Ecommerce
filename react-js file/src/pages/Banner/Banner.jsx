import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import gadgetSale from '../Banner/images/Categories/long width (1).png';
import kitchenSale from '../Banner/images/Categories/long width (2).png';
import poco from '../Banner/images/Categories/long width (3).png';
import realme from '../Banner/images/Categories/long width (4).png';
import fashionSale from '../Banner/images/Categories/long width (5).png';
import oppo from '../Banner/images/Categories/slide b (1).png'
import realme1 from '../Banner/images/Categories/slide b (2).png';
import fashionSale2 from '../Banner/images/Categories/slide b (3).png';
import oppo3 from '../Banner/images/Categories/slide b (4).png'
export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  )
}

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  )
}

const Banner = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  const banners = [gadgetSale, kitchenSale, poco, fashionSale, realme, oppo, fashionSale2, realme1, oppo3];

  return (
    <>
      <section className="h-66 sm:h-72 w-full rounded-sm shadow relative overflow-hidden">
        <Slider {...settings}>
          {banners.map((el, i) => (
            <img draggable="false" className="h-77 sm:h-72 w-full object-cover" src={el} alt="banner" key={i} />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
