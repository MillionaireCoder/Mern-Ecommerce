import React,{useState, useEffect} from "react";
import ReactStars from  "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
import { BsHeart , BsHeartFill, BsWatch} from "react-icons/bs";
import { useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import { createcart} from '../features/product cart/cartSlice'
import view from "../images/view.svg";
import CompareProduct from "../pages/CompareProduct";
import { createwishlist } from "../features/Wishlist/wishSlice";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../features/compare/compareSlice";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DisabledContext from "antd/es/config-provider/DisabledContext";
export default function ProductCard(props) {
  const navigate=useNavigate;
  const {width}=props;
  const { grid } = props;
  const [isLiked, setIsLiked] = useState(false);
   const dispatch=useDispatch()
   const product=useSelector((state=>state.product))
   
   const auth=useSelector((state)=>state.auth.user)
  
   const [count, setCount] = useState(1);
   const [coloname, setColorname] = useState("no color");
  const handleClick = () => {
 
   
    setIsLiked(!isLiked);
 
  };
  const{ _id,brand,stock,category,color,description,Discount,images,price,quantity,ratings,slug,sold,tags,title,totalrating,}=grid
  const discountedPrice = price - (price * Discount) / 100; 
   let location = useLocation();
if(stock==="Out Of Stock"){
   
}

    const [mySet1, setMySet1] = useState(new Set());
    const handleAddToSet = (grid) => {
      
      setMySet1(new Set([...mySet1, grid]));
    };
  const handleAddToCart = () => {
       if(auth===null){
      toast.info("please login....")
      setTimeout(()=>{
 
 navigate("/login")},1000)
   }else{
    toast.success("Item added successfully!");
    dispatch(createcart({_id,count,coloname}));
 
   }

   

  };
  
  const [total, setTotal] = useState(totalrating);
  const [src, setSrc] = useState(images[0]?.url);

  useEffect(() => {
    if (images[1]) {
      setSrc(images[1]?.url);
    } else if (images[2]) {
      setSrc(images[2]?.url);
    } else {
      setSrc(images[0]?.url);
    }
  }, [images]);


function handleMouseOver() {
  if (images[1]) {
    setSrc(images[1]?.url);
  }
  else if(images[2]){ // changed the if condition to else if
    setSrc(images[2]?.url);
  }
  else {
    setSrc(images[0]?.url);
  }
}

function handleMouseOut() {
  setSrc(images[0]?.url);
}

return (
  <>
 <div className={` ${location.pathname === "/product" ? `gr-${grid} product-card` : "col-12 col-md-3 col-sm-6 product-card"} ${stock==="Out Of Stock" ? "disable" : "" } `}>
    <div className="card position-relative card-style ms-4 ps-5" style={{ width:"21rem", height:"20rem", border:"none" }}>
        <div className="row d-flex">
{/* <span style={{color:"red", direction:"rtl", paddingRight:"15px" }}>{Discount?Discount:""}%</span> */}
        <div className="col-6 col-sm-12 ">
          <button className="border-0 bg-transparent" onClick={() => {
            if(auth===null){
              toast.info("please login....")
              setTimeout(()=>{
                navigate("/login")
              },1000)
            }else{
              handleClick();
              toast.success("Item added successfully!");
              dispatch(createwishlist({prodId:grid._id}));
            }
          }}>
            {isLiked ? (
              <BsHeartFill className="heart-icon position-absolute  " style={{color:"red"}}  />
            ) : (
              <BsHeart className="heart-icon position-absolute" />
            )}
          </button> 
           
          <Link to="/app/products"state={grid}  >
          {stock === "Out Of Stock" && (
            <h5 style={{ color: "red", paddingLeft:"25px" }}>Out of stock</h5>
        )}
            <img
              src={src}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className="card-img-top img-fluid product-image ps-4 pt-2"
              alt="product"
              style={{
                width: "150px",
                height: "140px",
              }}
            />
          </Link>
        </div> 
        <div className="col-7 col-sm-12 ">
          <div className="card-body px-4 ">
       
            <pre style={{ display: 'flex', alignItems: 'center', color:"red" ,fontWeight:"bold"}}>
              <span>{brand?brand:""} </span> 

              {Discount > 0 && (
  
   <span><strike style={{color:"red",fontWeight:"bold"}}>₹{price?price:""}</strike><sup>{Discount}% OFF</sup></span>
 

)}

             
            </pre> 
            <span className="price" style={{fontWeight:"bold"}}> &nbsp;₹ {Discount>0?price-(price*Discount)/100:price}</span>
            <h6 className="card-title ">
              {title?.split(' ').slice(0, 4).join(' ')} {title?.split(' ').length > 5 ? '...' : ''}
            </h6>
            <ReactStars
              count={5}
              size={30}
              value={total}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
        </div>  
      </div>
      <div className="action-bar position-absolute">
        <div className="d-flex flex-column">
          <button className="border-0 bg-transparent" onClick={() =>{ 
            if(auth===null){
              toast.info("please login....")
              setTimeout(()=>{
                navigate("/login")
              },1000)}
            handleAddToSet
            (grid)
            dispatch(addItems(grid))
            toast.success("Item Add to Compare")
          }}>
            <img src={prodcompare} alt="addcart" />
            {false ? <CompareProduct mySet={mySet1}/> : ""}
          </button>
          <button className="border-0 bg-transparent" >
            <img src={addcart} alt="addcart"  onClick={handleAddToCart}       />
          </button>
        </div>
      </div>
    </div>
  </div>
  
</>

  );
}
