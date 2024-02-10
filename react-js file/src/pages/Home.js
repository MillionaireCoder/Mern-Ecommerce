import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { TbTruckDelivery } from "react-icons/tb";
import { FiGift } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiDiscount1 } from "react-icons/ci";
import { BsFillCreditCardFill } from "react-icons/bs";
import BlogCards from "../components/BlogCards";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import FamousProduct from "../components/FamousProduct";
import mainbanner1 from "../images/main banner.png";
import mainbanner from "../images/main-banner-1.png";
import mainbanner2 from "../images/main-banner-2.png";
import mainbanner4 from "../images/main-banner-3.png";
import mainbanner5 from "../images/main-banner-4.png";
import mainbanner6 from "../images/main-banner-5.png";
import mainbanner7 from "../images/main-banner-6.png";





// import catbanner1 from "../images/catbanner-01.jpg";
import catbanner1 from "../images/Blue And White Modern Electronic Sale Facebook Ad (405 × 265 px) (404 × 264 px) (1).png";

import catbanner2 from "../images/Blue.png";
import catbanner3 from "../images/catbanner-03.png";
import catbanner4 from "../images/catbanner-04.png";

import tab1 from "../images/1.png"
import tab2 from "../images/2.png"

import tab4 from "../images/3.png"
import tab5 from "../images/4.png"
import tab6 from "../images/5.png"
import tab7 from "../images/6.png"
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import famous1 from "../images/famous-1.png";
import famous2 from "../images/famous-2.png";
import famous3 from "../images/famous-3.png";
import famous4 from "../images/famous-4.png";
import famous5 from "../images/famous-5.png";
import famous6 from "../images/famous-6.png";
import famous7 from "../images/famous-7.png";
import brand8 from "../images/brand-08.png";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getProducts } from "../features/product/productSlice";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { setQueryParams} from "../features/product/productSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Banner from "./Banner/Banner";

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
const Home = () => {
  const [open, setOpen] = useState(false);
  const [productId, setproductId] = useState("");
  const navigate=useNavigate();
  const showModal = (e) => {
    setOpen(true);
    setproductId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productState = useSelector((state) => state.product.products);

// console.log(productState);

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2000,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  const setting = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2000,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  const set = {
    // show navigation dots
    infinite: true, // loop the slides
    speed: 500, // transition speed in milliseconds
    slidesToShow: 3, // number of slides to show at once
    slidesToScroll: 1 // number of slides to scroll per click
  };
  const sett = {
   
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div style={{overflowX:"hidden"}}>
      <Container class1="home-wrapper-1 py-3">
        <div className="row ">
          <div className="col-12 col-md-6 col-sm-12 mb-2 position-relative">
        
          <Slider {...settings} autoplay={true}>
    <div>
<Link to="/app/product" className="position-relative">
        <img
          src={mainbanner1}
          className="img-fluid position-relative"
          alt="main-banner"
        />
       
        
        </Link>
    </div>
  
   <div>
     <Link to="/app/product" className="position-relative">
        <img
          src={mainbanner}
          className="img-fluid position-relative"
          alt="main-banner"
        />
       
        
      </Link>
   </div>
   <div>
     <Link to="/app/product" className="position-relative">
        <img
          src={mainbanner4}
          className="img-fluid position-relative"
          alt="main-banner"
        />
       
        
      </Link>
   </div>
   <div>
     <Link to="/app/product" className="position-relative">
        <img
          src={mainbanner5}
          className="img-fluid position-relative"
          alt="main-banner"
        />
       
        
      </Link>
   </div>
   <div>
     <Link to="/app/product" className="position-relative">
        <img
          src={mainbanner6}
          className="img-fluid position-relative"
          alt="main-banner"
        />
       
        
      </Link>
   </div>

<div>
     <Link to="/app/product" className="position-relative">
        <img
          src={mainbanner7}
          className="img-fluid position-relative"
          alt="main-banner"
        />
       
        
      </Link>
   </div>
   
 

   <div>
    
   

     <Link to="/app/product" className="position-relative">
        <img
          src={mainbanner2}
          className="img-fluid position-relative"
          alt="main-banner"
        />
       
        
      </Link>
 </div>
  
  </Slider>


          </div>

          <div className="col-12 col-md-6 ">
            <div className="row d-flex flex-md-row">
              <div className="col-md-6 mb-2">
                <div className="small-banner position-relative ">
                  <Link to="/app/product" onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Electronics" }));


                  }}   >
                    
                    <img
                      src={catbanner1}
                      className="img-fluid "
                      alt="main-banner"
                    />
                  </Link>
                  <div className="small-banner-content position-absolute">
                    {/* <h4>Best Sale</h4>
                    <h5>Laptops </h5>
                    <p>
                      From ₹120000 <br /> or ₹2000/mo.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="small-banner position-relative ">
                  <Link to="/app/product" onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Watch" }));


                  }}>
                    
                    <img
                      src={catbanner2}
                      className="img-fluid "
                      alt="main-banner"
                    />
                  </Link>
                  <div className="small-banner-content position-absolute text-white">
                    {/* <h4>15% off</h4>
                    <h5>SmartPhone </h5>
                    <p>
                      shop the latest brand <br /> styles and color.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex flex-md-row">
              <div className="col-md-6 ">
                <div className="small-banner position-relative ">
                  <Link to="/app/product"onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Stationary" }));


                  }}>
                    
                    <img
                      src={catbanner3}
                      className="img-fluid "
                      alt="main-banner"
                    />
                  </Link>
                  
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="small-banner position-relative ">
                  <Link to="/app/product" onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Headphones" }));


                  }}>
                    
                    <img
                      src={catbanner4}
                      className="img-fluid "
                      alt="main-banner"
                    />
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="home-wrapper-2 py-3 hovering ">
        <div className="container-xxl">
          <div className="row d-flex alilgn-items-center justify-content-between">
          <div className="col-4 col-md-1  d-flex flex-column align-items-center mb-2 p-0">
            <img src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/34/shop34_cat6.jpg" style={{  borderRadius:'1800px',cursor: "pointer" }} onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Gaming" }));
navigate("/app/product")

                  }}/>
              <h6 className="text-center">Gaming</h6>
              <p className="mb-0 text-center">7 Products</p>
            </div>
            <div className="col-4 col-md-1  d-flex flex-column align-items-center mb-2 p-0">
            <img src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/34/shop34_cat7.jpg" style={{ borderRadius:'1800px',cursor: "pointer"}}onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Headphones" }));
navigate("/app/product")

                  }}/>
              <h6 className="text-center">Headphones</h6>
              <p className="mb-0 text-center">10 Products</p>
            </div>
            <div className="col-4 col-md-1  d-flex flex-column align-items-center mb-2">
            
              <img src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/34/shop34_cat3.jpg" style={{ borderRadius:'1800px',cursor: "pointer"}} onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Sports" }));
navigate("/app/product")

                  }}/>
              <h6 className="text-center">Sports </h6>
              <p className="mb-0 text-center">2 Products</p>
             
            </div>
            <div className="col-4 col-md-1  d-flex flex-column align-items-center mb-2 p-0">
            <img src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/34/shop34_cat4.jpg" style={{ borderRadius:'1800px',cursor: "pointer"}} onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Toys" }));
navigate("/app/product")

                  }}/>
              <h6 className="text-center">Toys</h6>
              <p className="mb-0 text-center">2 Products</p>
            </div>
            <div className="col-4 col-md-1  d-flex flex-column align-items-center mb-2 p-0">
            <img src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/34/shop34_cat8.jpg" style={{ borderRadius:'1800px',cursor: "pointer"}}onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Mobile" }));
navigate("/app/product")

                  }}/>
              <h6 className="text-center">Mobile</h6>
              <p className="mb-0 text-center">3 Products</p>
            </div>
            <div className="col-4 col-md-1 d-flex flex-column align-items-center mb-2 p-0">
            <img src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/34/shop34_cat2.jpg" style={{ borderRadius:'1800px',cursor: "pointer"}}onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Furniture" }));
navigate("/app/product")

                  }}/>
              <h6 className="text-center">Furniture</h6>
              <p className="mb-0 text-center">7 Products</p>
            </div>
             <div className="col-4 col-md-1  d-flex flex-column align-items-center mb-2 p-0">
            <img src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/34/shop34_cat1.jpg" style={{ borderRadius:'1800px',cursor: "pointer"}}onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Clothes" }));
navigate("/app/product")

                  }}/>
              <h6 className="text-center">Clothes</h6>
              <p className="mb-0 text-center">1 Products</p>
            </div>
             <div className="col-4 col-md-1  d-flex flex-column align-items-center mb-2 p-0">
            <img src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/34/shop34_cat5.jpg" style={{ borderRadius:'1800px',cursor: "pointer"}}onClick={()=>{
 dispatch(setQueryParams({ param: "search", value: "Camera" }));
navigate("/app/product")

                  }}/>
              <h6 className="text-center">Camera</h6>
              <p className="mb-0 text-center">7 Products</p>
            </div>
          </div>
        </div>
      </section>
<Banner/>
    

      <section >
        <div className="container-xxl">
          <h3>Featured Collection</h3>

        
            <div className="row d-flex ">
            <Slider {...sett}>
            {productState && Array.isArray(productState) && productState.map((item, i) => {
  if (item.tags === "special") {
    return    < ProductCard key={i} grid={item}  width=
    {"18rem"} />
  }
  
})}
</Slider>
            </div>
         
        </div>
      </section>

      
      <Marquee  speed={50}>
    <div style={{marginLeft:"15px"}}><FamousProduct image={famous1}  /></div>
    <div style={{marginLeft:"15px"}}><FamousProduct image={famous2}  /></div>
    <div style={{marginLeft:"15px"}}><FamousProduct image={famous3} /></div>
    <div style={{marginLeft:"15px"}}><FamousProduct image={famous4}  /></div>
    <div style={{marginLeft:"15px"}}><FamousProduct image={famous5}  /></div>
    <div style={{marginLeft:"15px"}}><FamousProduct image={famous6} /></div>
    <div style={{marginLeft:"15px"}}><FamousProduct image={famous7}  /></div>
  </Marquee>


      <section className="special-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row d-flex align-items center justify-content-center">
            <div className="col-12">
              <h3>Special Products</h3>
            </div>
            <div className="row special-product-card">
              <div className="col-md-4 col-sm-6 g-2">
                <SpecialProduct  image={tab1} brand="MI" content=" MI Note 8 Pro with extra features.." price="18000" stroke="20000"   onClick={() => {
      dispatch(setQueryParams({ param: "search", value: "Mi mobile" }));
    }} 
 />
              </div>
              <div className="col-md-4 col-sm-6 g-2">
                <SpecialProduct  image={tab2} brand="IVOOMI" content=" Computers with Advanced technology Made in india ..." price="15000" stroke="18000"  onClick={() => {
      dispatch(setQueryParams({ param: "search", value: "computer" }));}} />
              </div>
              <div className="col-md-4 col-sm-6 g-2">
                <SpecialProduct image={tab4}brand="Grocery"content="  Everything Availability to make Food"  price="5000" stroke="5500"   onClick={() => {
      dispatch(setQueryParams({ param: "search", value: "Grocery" }));}}/>
              </div>
              <div className="col-md-4 col-sm-6 g-2">
                <SpecialProduct image={tab5}brand="Apple"content="  Apple the new concept of thinking" price="45000" stroke="55000"  onClick={() => {
      dispatch(setQueryParams({ param: "search", value: "Apple" }));}}  />
              </div>
              <div className="col-md-4 col-sm-6 g-2">
                <SpecialProduct image={tab6}brand="Lg"content=" the all new freshness features" price="28000" stroke="22000"  onClick={() => {
      dispatch(setQueryParams({ param: "search", value: "Kitchen" }));}}/>
              </div>
              <div className="col-md-4 col-sm-6 g-2">
                <SpecialProduct image={tab7}brand="Voltas"content="the perfect product for summers" price="32000" stroke="37000" onClick={() => {
      dispatch(setQueryParams({ param: "search", value: "Ac" }));}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row d-flex align-items center justify-content-center">
            <div className="col-12">
              <h3>Our Popular Products</h3>
            </div>
            <div className="row">
            <Slider {...sett}>
            {productState && Array.isArray(productState) && productState.map((item, i) => {
  if (item.tags === "popular") {
    return <ProductCard key={i} grid={item}  width=
    {"18rem"} />;
  }
  
})}
</Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-3 my-3">
        <div className="container-xxl">
          <div className="row d-flex alilgn-items-center justify-content-between">
            <div className="col-6 col-md-2 col-sm-5 d-flex flex-column align-items-center mb-2">
              <TbTruckDelivery className="fs-1  service-icon" />
              <h6 className="text-center">Free Shipping</h6>
              <p className="mb-0 text-center">From ALl Orders Over ₹150</p>
            </div>
            <div className="col-6 col-md-2 col-sm-5 d-flex flex-column align-items-center mb-2">
              <FiGift className="fs-1 " />
              <h6>Daily Surprise Offers</h6>
              <p className="mb-0">Save upto 25% off</p>
            </div>
            <div className="col-6 col-md-2 col-sm-5 d-flex flex-column align-items-center mb-2">
              <Link to="/app/contact" style={{color:"black"}}>
              <TfiHeadphoneAlt className="fs-1" />
              <h6>Support 24/7</h6>
              <p className="mb-0">Shop with an expert</p>
              </Link>
            </div>
            <div className="col-6 col-md-2 col-sm-5 d-flex flex-column align-items-center mb-2">
              <CiDiscount1 className="fs-1" />
              <h6>Affordable Prices </h6>
              <p className="mb-0">Get Factory Default Price</p>
            </div>
            <div className="col-6 col-md-2 col-sm-5 d-flex flex-column align-items-center mb-2">
              <BsFillCreditCardFill className="fs-1" />
              <h6>Secure Payments </h6>
              <p className="mb-0">100% Protected Payment</p>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper bg-white p-3">
                <Marquee className="d-flex" speed={50}>
                  <div className="mx-4 w-25">
                    <img src={brand1} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand2} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand3} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand7} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand8} alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row d-flex align-items center justify-content-center">
            <div className="col-12">
              <h3>Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-sm-6 col-md-3">
              
              <BlogCards />
            </div>
            <div className="col-sm-6 col-md-3">
              <BlogCards />
            </div>
            <div className="col-sm-6 col-md-3">
              <BlogCards />
            </div>
            <div className="col-sm-6 col-md-3">
              <BlogCards />
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
