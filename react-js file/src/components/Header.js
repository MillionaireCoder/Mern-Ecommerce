import React ,{useEffect,useState, useRef}from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch, BsArrowRepeat, BsHeart, BsBag, BsX  } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import menu from "../images/menu.svg"
import{createcart,getcart,daletecart,deletecartitem, resetState} from '../features/product cart/cartSlice'
import { getCategories } from "../features/pcategory/pcategorySlice";
import { setQueryParams,getProducts } from "../features/product/productSlice";
import { logout } from "../features/auth/authSlice";
import { getQuantitys } from "../features/Quantity/quantitySlice";
import CompareProductCard from '../components/CompareProductCard';
import { deletefromwishlist, getwishlist} from "../features/Wishlist/wishSlice";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
// import menu from "../images/menu.svg"


import { Button, Space, Tooltip, Dropdown } from "antd";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState("");
  const [searchText, setSearchText] = useState("");


  const [show, setShow]= useState(false)
  const [showTv, setShowTv]= useState(false)
  const [showmen, setShowmen]= useState(false)
  const [showwomen, setShowwomen]= useState(false)
  const [showbaby, setShowbaby]= useState(false)
  const [showsport, setShowsport]= useState(false)
  const [showDiv, setShowDiv] = useState(true);
  
  const mobile = [
    "MI",
    "Realme",
    "Samsung",
    "Infinix",
    "Oppo",
    "Apple",
    "Vivo",
    "Honor",
    "Asus",
    "Pocco X2",
    "Realme Narzo",
    "iPhone SE",
    "Motorola",
  ];

  const Mobile_Accessories = [
    "Mobile Cases",
    "Headphones & Headsets",
    "Power Banks",
    "Screenguards",
    "Memory Cards",
    "Smart Headphones",
    "Mobile Cables",
    "Mobile Chargers",
    "Mobile Holders",
  ];

  const Smart = ["Smart Watches", "Smart Glasses (VR)", "Smart Bands"];

  const Health = ["Bp Monitors", "Weighing Scale"];

  const Computer = [
    "External Hard Disks",
    "Pendrives",
    "Laptop Skins & Decals",
    "Laptop Bags",
    "Mouse",
  ];

  const Speaker = [
    "Home Audio Speakers",
    "Home Theatres",
    "Soundbars",
    "Bluetooth Speakers",
    "DTH Set Top Box",
  ];

  const Camera = [
    "DSLR & Mirrorless",
    "Compact & Bridge Cameras",
    "Sports & Action",
  ];

  const Featured = [
    "Google Assistant Store",
    "Laptops on Buyback Guarantee",
    "Flipkart SmartBuy",
    "Li-Polymer Power Banks",
    "Sony PS4 Pro & Slim",
    "Apple Products",
    "Microsoft Store",
    "Lenovo Phab Series",
    "JBL Speakers",
    "Smartphones On Buyback Guarantee",
    "Philips",
    "Dr. Morepen",
    "Complete Mobile Protection",
    "Mobiles No Cost EMI",
    "Huawei Watch Gt 2e Smart Watch",
  ];

  const Top_Brands = [
    "Mi",
    "Vu",
    "Thomson",
    "Samsung",
    "iFFALCON by TCL",
    "Nokia",
    "LG",
    "realme",
    "Motorola",
  ];

  const Screen_Size = [
    "24 & below",
    "28 - 32",
    "39 - 43",
    "48 - 55",
    "60 & above",
  ];

  const Washing_Machine = [
    "Fully Automatic Front Load",
    "Semi Automatic Top Load",
    "Fully Automatic Top Load",
  ];
  const Air_Conditioners = ["Inverter AC", "Split ACs", "Window ACs"];
  const Shop_by_brand = ["LG", "Hitachi", "Carrier"];
  const Refrigerators = [
    "Single Door",
    "Double Door",
    "Triple door",
    "Side by Side",
    "Convertible",
  ];
  const Kitchen_Appliances = [
    "Microwave Ovens",
    "Oven Toaster Grills (OTG)",
    "Juicer/Mixer/Grinder",
    "Electric Kettle",
    "Induction Cooktops",
    "Chimneys",
    "Hand Blenders",
    "Sandwich Makers",
    "Pop Up Toasters",
    "Electric Cookers",
    "Wet Grinders",
    "Food Processors",
    "Coffee Makers",
    "Dishwashers",
  ];
  const Small_Home_Appliances = [
    "Irons",
    "Water Purifiers",
    "Fans",
    "Air Coolers",
    "Inverters",
    "Vacuum Cleaners",
    "Sewing Machines",
    "Voltage Stabilizers",
    "Water Geysers",
    "Immersion Rods",
  ];
  const Tv_Top_Brands = [
    "Livpure",
    "Philips",
    "Bajaj",
    "IFB",
    "Eureka Forbes",
    "Kaff ",
  ];
  const Buying_Guides = [
    "Televisions",
    "Washing Machines",
    "Refrigerators",
    "Air Conditioners",
    "Water Purifiers",
    "Air Purifiers",
    "Chimneys",
    "Water Geysers",
  ];
  const New_Launches = [
    "Coocaa Smart TVs",
    "Nokia (55) 4K Android TV",
    "Mi (32) 4A Pro Android TV",
    "MarQ (43) FHD Smart TV",
    "LG Refrigerators",
    "Thomson (40) 4K Smart TV",
    "Whirlpool Refrigerators",
    "Kodak (22) | (32) LED TVs",
  ];

  const Footwear = [
    "Sports Shoes",
    "Casual Shoes",
    "Formal Shoes",
    "Sandals & Floaters",
    "Flip- Flops",
    "Loafers",
    "Boots",
    "Running Shoes",
    "Sneakers",
  ];

  const Men_Grooming = [
    "Deodorants",
    "Perfumes",
    "Beard Care & Grooming",
    "Shaving & Aftershave",
  ];

  const Top_Wear = ["T-Shirts", "Formal Shirts", "Casual Shirts"];

  const Bottom_Wear = [
    "Jeans",
    "Casual Trousers",
    "Formal Trousers",
    "Track pants",
    "Shorts",
    "Cargos",
    "Three Fourths",
  ];

  const Winter_Wear = ["Sweatshirts", "Jackets", "Sweater", "Tracksuits"];
  const Ethnic_Wear = [
    "Kurta",
    "Ethnic Sets",
    "Sherwanis",
    "Ethnic Pyjama",
    "Dhoti",
    "Lungi",
  ];
  const Innerwear = [
    "Briefs & Trunks",
    "Vests",
    "Boxers",
    "Pyjamas and Lounge Pants",
    "Thermals",
    "Night Suits",
    "Raincoats Windcheaters",
  ];

  const Watches = ["Fastrack", "Casio", "Titan", "Fossil", "Sonata"];

  const Accessories = [
    "Backpacks",
    "Wallets",
    "Belts",
    "Sunglasses",
    "Luggage Travel",
    "Frames",
    "Jewellery",
  ];

  const Personal_Care = ["Trimmers", "Shavers", "Grooming Kits"];
  const Men_featured = [
    "Watches Store",
    "Footwear Club",
    "Bags & Wallet",
    "T-Shirt Store",
    "Adidas",
    "Beardo",
    "Reebok",
    "Skechers",
    "Nike",
  ];

  const Women_Western = [
    "Topwear",
    "Dresses",
    "Jeans",
    "Shorts",
    "Skirts",
    "Jeggings & Tights",
    "Trousers & Capris",
  ];

  const Lingerie = [
    "Bras",
    "Panties",
    "Lingerie Sets",
    "Night Dresses & Nighties",
    "Shapewear",
    "Camisoles & Slips",
  ];

  const Women_Ething_Wear = [
    "Sarees",
    "Kurtas & Kurtis",
    "Dress Material",
    "Lehenga Choli",
    "Blouse",
    "Kurta Sets & Salwar Suits",
    "Gowns",
    "Dupattas",
  ];

  const Women_Ethnic_Bottom = [
    "Leggings & Churidars",
    "Palazzos",
    "Shararas",
    "Salwars & Patiala",
    "Dhoti Pants",
    "Ethnic Trousers",
    "Saree Shapewear & Petticoats",
  ];

  const Sandals = ["Flats", "Heels", "Wedges"];

  const Women_Shoes = ["Sports Shoes", "Casuel Shoes", "Boots"];
  const Women_Peersonal_Care = [
    "Hair Straightners",
    "Hair Dryers",
    "Epilators",
  ];
  const Beauty = [
    "Make Up",
    "Skin Care",
    "Hair Care",
    "Bath & Spa",
    "Deodorants & Perfumes",
  ];
  const Jewellery = [
    "Artificial Jewellery",
    "Silver Jewellery",
    "Precious Jewellery",
    "Coins and Bars",
  ];
  const Women_Asseccories = [
    "Handbags",
    "Shoulder Bags",
    "Totes",
    "Sling bags",
    "Clutches",
    "Wallets & Belts",
    "Luggage & Travel",
    "Sunglasses",
    "Frames",
  ];
  const Women_Featured = [
    "Forever 21",
    "Accessorize",
    "W",
    "Pantaloons",
    "Chemistry",
    "Lakme",
    "Nivea",
    "Catwalk",
    "Titan-Raga",
    "Fastrack",
    "Divastri",
    "Rare Roots",
    "Anmi",
    "Coins & Bars",
    "Crocs",
  ];

  const Trending_Today = [
    "Ruffles & Frills",
    "Pastel Kurtas & Kurtis",
    "Designer Net Sarees",
  ];

  const Boys_Clothing = [
    "T-Shirts",
    "Ethnic Wear",
    "Shorts",
    "Shirts",
    "Innerwear",
  ];

  const Girls_Clothing = [
    "Dresses & Skirts",
    "Ethnic Wear",
    "T-shirts & Tops",
    "Innerwear",
  ];

  const Baby_Boys_Clothing = ["Combos Sets", "T-Shirts", "Innerwear"];

  const Baby_Girls_Clothing = ["Combos Sets", "Dresses & Gowns", "Innerwear"];

  const Boys_Footwear = ["Sandals", "Sport Shoes"];

  const Girls_Footwear = ["Flats & Bellies", "Sport Shoes"];
  const Character_Shoes = ["Kids' Watches", "Kids' Sunglasses"];
  const Boys_Winter_Wear = ["Boys' Sweatshirts", "Boys' Jacket"];
  const Girls_Winter_Wear = [
    "Girls' Sweatshirts",
    "Girls' Jackets",
    "Infant Winter Wear",
    "Thermals",
  ];
  const Toys = [
    "Remote Control Toys",
    "Educational Toys",
    "Soft Toys",
    "Cars & Die-cast Vehicles",
    "Outdoor Toys",
    "Action Figures",
    "Board Games",
    "Musical Toys",
    "Dolls & Doll Houses",
    "Puzzles",
    "S.T.E.M Toys",
    "Helicopter & Drones",
    "Toy Guns",
  ];

  const School_Supplies = ["School Bags", "School Combo Sets", "Lunch Box"];

  const Baby_Care = [
    "Diapers",
    "Wipes",
    "Diapering & Potty Training",
    "Baby Bath, Hair & Skin Care",
    "Baby Grooming",
    "Baby Bathing Accessories",
    "Baby Gift Sets & Combo",
    "Baby Oral Care",
    "Nursing & Breast Feeding",
    "Baby Food",
    "Baby Feeding Bottle & Accessories",
    "Baby Feeding Utensils & Accessories",
    "Baby Bedding",
    "Baby Gear",
    "Baby Medical & Health Care",
    "Baby Proofing & Safety",
    "Baby Cleaners & Detergents",
  ];

  const Featured_brands = [
    "Miss & Chief",
    "Barbie",
    "Disney",
    "United Colors of Benetton",
    "The Children's Place",
    "US Polo",
    "Flying Machine",
    "Crocs",
    "Puma",
    "Funskool",
    "Lego",
    "Luvlap",
    "Mamy Poko",
  ];

  const Sports = [
    "Cricket",
    "Badminton",
    "Cycling",
    "Football",
    "Skating",
    "Camping & Hiking",
    "Swimming",
  ];

  const Exercise_Fitness = [
    "Cardio Equipment",
    "Home Gyms",
    "Support",
    "Dumbbells",
    "Ab Exercisers",
    "Shakers & Sippers",
    "Yoga Mat",
    "Gym Gloves",
  ];

  const Food_Essentials = [
    "Nuts & Dry Fruits",
    "Tea, Coffee and Beverages",
    "Chocolates",
    "Snacks Corner",
    "Gifting Combos",
    "Sweets Store",
    "Jams, Spreads and Honey",
    "Breakfast Items",
  ];

  const Health_Nutrition = [
    "All Supplements",
    "Protein Supplements",
    "Vitamin Supplements",
    "Health Drinks",
    "Ayurvedic Supplements",
  ];

  const Books = [
    "Entrance Exams",
    "Academics",
    "Literature & Fiction",
    "Non Fiction",
    "Young Readers",
    "Self-Help",
    "E-Learning",
    "Preorders",
    "Indian Languages",
  ];

  const Stationery = [
    "Pens",
    "Diaries",
    "Card Holders",
    "Desk Organizers",
    "Calculators",
    "Key Chains",
  ];

  const Auto_Accessories = [
    "Helmets & Riding Gears",
    "Car Audio/Video",
    "Car Mobile Accessories",
    "Car & Bike Care",
    "Vehicle Lubricants",
  ];

  const Industrial_Scientific_tools = [
    "Industrial Measurement Devices",
    "Industrial Testing Devices",
    "Lab & Scientific Products",
    "Packaging & Shipping Products",
    "Safety Products",
    "Medical Supplies",
    "Pregnancy and Fertility Kits",
    "Hot Water Bag",
  ];

  const Music = ["Musical Instruments", "Music", " Movies & Tv shows"];
  const Gaming = [
    "Gaming Consoles",
    "Gaming Accessories",
    "PS4 Games",
    "Smart Glasses (VR)",
  ];

  const Medical_Supplies = ["Pregnancy and Fertility Kits", "Hot Water Bag"];

  
  const query=useSelector(state=>state?.product.query)
  useEffect(() => {
   
    dispatch(getCategories());
    
    dispatch(getQuantitys());
   
  }, [])
  const auth=useSelector((state)=>state.auth.user)
  const compare = useSelector(state => state.compare.Items);
  const wish = useSelector((state) =>  state.wishlist.wishlist);
  
  const items = useSelector((state) => state.cart.cart);
  const category = useSelector((state) => state.pCategory.pCategories);

  
  const handleSearchClick = () => {
   
    const inputValue = document.getElementById("search-input").value;
    if(inputValue.trim()!==''){
      navigate('/app/product');
      dispatch(setQueryParams({ param: "search", value: inputValue }));
      document.getElementById("search-input").value="";
    }
   
  };

  const handleItemClick = (data,item) => {
    setSelectedItem(item);
    dispatch(setQueryParams({ param: data, value:item }));
    navigate("/app/product")
  };
  const handleKeyDown=(event)=>{
    if(event.keyCode===13){
      navigate('/app/product');
      handleSearchClick();
    } 
  };
  // Call getProducts whenever the query parameter changes
  useEffect(() => {
    dispatch(getProducts(query));
    dispatch(getQuantitys());
  }, [dispatch,query]);
  

  

  const handleLogOutClick = (e) => {
  localStorage.removeItem('user')
   window.location.reload()
  navigate('/login')
    
    
  };
  const handleLoginClick = () => {
  
    navigate('/login')
      
      
    };
    const handleClearClick = () => {
      setSearchText("");
      setTimeout(()=>{
        dispatch(getProducts())
      },10)
    };

    /// for mouse overing
  let timeout;

  const handleMouseEnter = () => {
    setShow(true);
    setShowTv(false);
    setShowmen(false);
    setShowwomen(false);
    setShowbaby(false);
    setShowsport(false);
    clearTimeout(timeout);
  };

 
  const handleMouseEnters = () => {
    setShow(false);
    setShowTv(true);
    setShowmen(false);
    setShowwomen(false);
    setShowbaby(false);
    setShowsport(false);
    clearTimeout(timeout);
  };

 

  const handleMouseEnterss = () => {
    setShow(false);
    setShowTv(false);
    setShowmen(true);
    setShowwomen(false);
    setShowbaby(false);
    setShowsport(false);
    clearTimeout(timeout);
  };

  
  const handleMouseEntersss = () => {
    setShow(false);
    setShowTv(false);
    setShowmen(false);
    setShowwomen(true);
    setShowbaby(false);
    setShowsport(false);
    clearTimeout(timeout);
  };

  

  const handleMouseEnterssss = () => {
    setShow(false);
    setShowTv(false);
    setShowmen(false);
    setShowwomen(false);
    setShowbaby(true);
    setShowsport(false);
    clearTimeout(timeout);
  };

 

  const handleMouseEntersssss = () => {
    setShow(false);
    setShowTv(false);
    setShowmen(false);
    setShowwomen(false);
    setShowbaby(false);
    setShowsport(true);
    clearTimeout(timeout);
  };
  const divRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShow(false);
    setShowTv(false);
    setShowmen(false);
    setShowwomen(false);
    setShowbaby(false);
    setShowsport(false);

      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [divRef.current]);

  return (
    <>
      <header className="header-upper p-2 " style={{ backgroundColor: "#38b4e1" }}>
        <div className="container-xxl">
          <div className="row d-flex align-items-center p-1 justify-content-between">
            <div className="col-md-2 col-sm-4 d-flex flex-md-row justify-content-center align-items-center">
              <div>
                <div className="text-dark" style={{ fontWeigh: "500" }}>
                  Buy Sell Anything
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-8 mb-1">
              <div className="input-group">
              <input
          type="text"
          className="form-control "
          placeholder="Search Product Here..."
          aria-label="Search Product Here..."
          aria-describedby="basic-addon2"
          id="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {searchText.length > 0 && (
          <span
            className="input-group-text bg-white text-dark border "
            onClick={handleClearClick}
          >
            <BsX className="fs-5" />
          </span>
        )}
              <span
  className="input-group-text p-1 bg-dark text-white"
  id="basic-addon2"
  onClick={handleSearchClick}
>
  <BsSearch className="fs-5" />
</span>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="row d-flex align-items-center justify-content-end">
                <div className="col-6 col-md-3 mb-4 mt-4 mt-md-0 mb-md-0 d-flex justify-content-center px-0">
                  <Link
                    to="/app/compare-products"
                    className="header-link d-flex flex-row justify-content-between"
                    style={{ width: "7.1rem" }}
                  >
                    <BsArrowRepeat
                      className="fs-4"
                      style={{
                        transition: "transform 0.7s ease-in-out",
                        ":hover": {
                          transform: "rotate(360deg)",
                          transition: "all 0.3s ease-in-out 0s",
                        },
                      }}
                    />
                    <p
                      className="mb-0"
                      style={{ fontSize: "1.2rem", fontSize: "700" }}
                    >
                      Compare({compare?.length?compare.length:0})
                    </p>
                  </Link>
                </div>
                <div className="col-6 col-md-3 mb-4 mt-4 mt-md-0 mb-md-0 d-flex justify-content-center px-0">
                  <div
                    className="header-link d-flex flex-row justify-content-between"
                    style={{ width: "7rem" }}
                    onClick={() => {
                      navigate("/app/wishlist ");
                    
                    }}
                  >
                    <BsHeart
                      className="fs-4"
                      style={{
                        // fontSize:"1.4rem",
                        cursor: "pointer",
                        transition: "transform 0.7s ease-in-out",
                        ":hover": {
                          transform: "rotate(360deg)",
                          transition: "all 0.3s ease-in-out 0s",
                        },
                      }}
                    />
                    <p className="mb-0" style={{ cursor: "pointer" }}>
                      {" "}
                      Wishlist ({wish?.length?wish.length:0})
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-3 px-0 d-flex justify-content-center">
                  <Link
                    className="d-flex align-items-center justify-content-center text-white"
                    to="/app/cart"
                  >
                    <BsBag
                      className="text-dark fs-4"
                      style={{
                        transition: "transform 0.7s ease-in-out",
                        cursor: "pointer",
                        ":hover": {
                          transform: "rotate(360deg)",
                          transition: "all 0.3s ease-in-out 0s",
                        },
                      }}
                    />

                    <div
                      className="d-flex flex-column "
                      style={{ width: "5rem", marginLeft: "0.4rem" }}
                    >
                      <p className="mb-0" style={{ color: "black" }}>
                        Cart ({items.data ? items.data.length : 0})
                      </p>
                      <span className="badge bg-dark text-white"></span>
                    </div>
                  </Link>
                </div>
                <div className="col-6 col-md-3  d-flex justify-content-center ">
                  <div className="header-link ">
                    <div
                      className="d-flex align-items-center justify-content-center text-white"
                     
                    >
                      <FaUserCircle
                        className=" fs-3"
                        style={{
                          transition: "transform 0.7s ease-in-out",
                          cursor: "pointer",
                          color: "#192a50",
                          ":hover": {
                            transform: "rotate(360deg)",
                            transition: "all 0.3s ease-in-out 0s",
                          },
                        }}
                      />
                      <div className="dropdown ">
                        <button
                          className="btn dropdown-toggle userButton"
                          type="button"
                          id="dropdownMenuButton2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                         {auth?.firstname?auth?.firstname:"Login"} 
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="dropdownMenuButton2"
                        >
                         
                          <li className="dropdown-item"  onClick={handleLogOutClick} >
                           
                          {auth?"Logout":""} 
                            
                          </li>
                          <li>
                            <a className="dropdown-item" href="/login">
                            {auth?"":"Sign Up"} 
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#83d3ec" }}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="col-4 d-flex align-items-center me-auto justify-content-center navbar-nav  mb-2 mb-lg-0 p-0" >
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="menu-links text-dark p-2"
                 to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="menu-links text-dark p-2"
                  to="/app/product"
                >
                  Store
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  activeClassName="active"
                  className="menu-links text-dark p-2"
                  to="/app/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="menu-links text-dark p-2"
                  to="/app/contact"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="menu-links text-dark p-2"
                  to="/app/about"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            <ul className="col-7 d-flex align-items-center justify-content-center navbar-nav  mb-2 mb-lg-0 p-0 " ref={divRef}>
              <li className="nav-item " onClick={handleMouseEnter}
        >
                <NavLink
                to="/app/product" 
                  activeClassName="active"
                  className="menu-links text-dark p-2"
                
                >
                  Electronics
                  
                  
                {show && <div className="electronicList " >
                  <ul
                    className="row    "
                    style={{
                      position: "absolute",
                      listStyle: "none",
                      textDecoration: "none",
                      left: 0,
                      top: "100%",
                      width:"100%",
                      color: "black",
                      textAlign: "left",
                      zIndex: "2",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    <li className="col bg-white p-2 text-dark">
                      <NavLink>
                        Mobile
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "2rem",
                            paddingLeft: "0",
                          }}
                        >
                          {mobile.map((item, i) => {
                            return (
                              <li>
                                 <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>
                    <li className="col bg-white p-2 text-dark">
                      <NavLink>
                        Mobile Asseccories
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Mobile_Accessories.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Smart Wearable Tech
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Smart.map((item, i) => {
                            return (
                              <li>
                                  <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Health Care Appliances
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "2rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Health.map((item, i) => {
                            return (
                              <li>
                                   <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Laptops
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          <li>

                            <NavLink  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Gaming Laptops" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Gaming Laptops</NavLink>
                          </li>
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Desktop" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }} >Desktop PCs</NavLink>
                      <NavLink className="mt-3" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Gaming & Asseccories" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Gaming & Asseccories</NavLink>
                      <NavLink className="mt-3">
                        Computer Asseccories
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Computer.map((item, i) => {
                            return (
                              <li>
                                  <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Computer Peripherals
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          <li>
                            <NavLink onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Printers" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Printers & Ink Cartridges</NavLink>
                          </li>
                          <li>
                            <NavLink onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Monitors" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Monitors</NavLink>
                          </li>
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Tablets
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          <li>
                            <NavLink onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Apple" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Apple & ipads</NavLink>
                          </li>
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>Television</NavLink>
                      <NavLink className="mt-3">
                        Speakers
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                            
                          }}
                        >
                          {Speaker.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Smart Home Automotion
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "2rem",
                            paddingLeft: "0",
                          }}
                        >
                          <li>
                            <NavLink  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Google Nest" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Google Nest</NavLink>
                          </li>
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Camera
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "2rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Camera.map((item, i) => {
                            return (
                              <li>
                                 <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Camera Asseccories
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "2rem",
                            paddingLeft: "0",
                          }}
                        >
                          <li>
                            <NavLink onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Lens" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Lens</NavLink>
                          </li>
                          <li>
                            <NavLink onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Tripods" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Tripods</NavLink>
                          </li>
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Network Components
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "2rem",
                            paddingLeft: "0",
                          }}
                        >
                          <li>
                            <NavLink onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Routers" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Routers</NavLink>
                          </li>
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col bg-white p-2 text-dark">
                      <NavLink>
                        Featured
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "2rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Featured.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>
                  </ul>
                  </div>}
                  
                </NavLink>
              </li>



               <li className="nav-item "  onClick={handleMouseEnters}
       >
                 <NavLink
                  activeClassName="active"
                  className="menu-links text-dark p-2"
                  to="/app/product" 
                >
                   Accessories
               
               {showTv &&   <div className="electronicList ">
                  <ul
                    className="row "
                    style={{
                      position: "absolute",
                      listStyle: "none",
                      textDecoration: "none",
                      left: 0,
                      top: "100%",
                      color: "black",
                      textAlign: "left",
                      zIndex: "2",
                      width: "100%",
                    }}
                  >
                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>Television</NavLink>
                      <NavLink className="mt-2" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "New Launches" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>New Launches</NavLink>
                      <NavLink className="mt-2" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Smart & Ultra HD" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Smart & Ultra HD</NavLink>
                      <NavLink className="mt-3">
                        Top Brands
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Top_Brands.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Shob by Screen Size
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Screen_Size.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Washing Machine
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Washing_Machine.map((item, i) => {
                            return (
                              <li>
                            <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Air Conditioners
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Air_Conditioners.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Shop By brand
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Shop_by_brand.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Refrigerators
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Refrigerators.map((item, i) => {
                            return (
                              <li>
                                 <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Kitchen Appliances
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Kitchen_Appliances.map((item, i) => {
                            return (
                              <li>
                           <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Healthy Living Appliances
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Small Home Appliances
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Small_Home_Appliances.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Top Brands
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Tv_Top_Brands.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Buying Guides
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Buying_Guides.map((item, i) => {
                            return (
                              <li>
                              <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        New Launches
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {New_Launches.map((item, i) => {
                            return (
                              <li>
                              <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>
                  </ul>
                  </div>}
                </NavLink>
              </li>

             <li className="nav-item " onClick={handleMouseEnterss}
        >
                <NavLink
                  activeClassName="active"
                  className="menu-links text-dark p-2"
                  to="/app/product" 
                >
                  Men
                  {showmen &&
                  <div className="electronicList">
                  <ul
                    className="row "
                    style={{
                      position: "absolute",
                      listStyle: "none",
                      textDecoration: "none",
                      left: 0,
                      top: "100%",
                      color: "black",
                      textAlign: "left",
                      zIndex: "2",
                      width: "100%",
                    }}
                  >
                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Footwear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Footwear.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Men's Grooming
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Men_Grooming.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Clothing" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Clothing</NavLink>
                      <NavLink className="mt-3">
                        Top Wear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Top_Wear.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Bottom Wear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Bottom_Wear.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Blazers" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>
                        Suits, Blazers & Waistcoats
                      </NavLink>
                      <NavLink className="mt-3" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Caps" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>
                        Ties, Socks, Caps & More
                      </NavLink>
                      <NavLink className="mt-3" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Fabrics" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Fabrics</NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Winter Wear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Winter_Wear.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Ethnic Wear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Ethnic_Wear.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Innerwear & Loungewear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Innerwear.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Watches
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Watches.map((item, i) => {
                            return (
                              <li>
                              <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Accessories
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Accessories.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Sports" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Sports & Fitness Store</NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Smart Watches" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Smart Watches</NavLink>
                      <NavLink className="mt-3"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Smart Bands" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Smart Bands</NavLink>
                      <NavLink className="mt-3">
                        Personal Care Appliances
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Personal_Care.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Featured
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Men_featured.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>
                  </ul>
                  </div>}
                </NavLink>
              </li>

              <li className="nav-item "onClick={handleMouseEntersss}
        >
                <NavLink
                  activeClassName="active"
                  className="menu-links text-dark p-2"
                  to="/app/product" 
                >
                  Women
                  {showwomen && <div className="electronicList">
                  <ul
                    className="row "
                    style={{
                      position: "absolute",
                      listStyle: "none",
                      textDecoration: "none",
                      left: 0,
                      top: "100%",
                      color: "black",
                      textAlign: "left",
                      zIndex: "2",
                      width: "100%",
                    }}
                  >
                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Clothing" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Clothing</NavLink>
                      <NavLink className="mt-3">
                        Women Western & Maternity Wear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Women_Western.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Lingerie & Sleepwear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Lingerie.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Swim & Beachwear" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Swim & Beachwear</NavLink>
                      <NavLink className="mt-3" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Party Dresses" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Party Dresses</NavLink>
                      <NavLink className="mt-3" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Sports Wear" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Sports Wear</NavLink>
                      <NavLink className="mt-3" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Winter Wear" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Winter Wear</NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Winter Wear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Winter_Wear.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Ethnic Wear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Ethnic_Wear.map((item, i) => {
                            return (
                              <li>
                                <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Innerwear & Loungewear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Innerwear.map((item, i) => {
                            return (
                              <li>
                             <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Footwear" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Footwear</NavLink>
                      <NavLink className="mt-3">
                        Sandals
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Sandals.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Shoes
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Women_Shoes.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Ballerinas" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Ballerinas</NavLink>
                      <NavLink className="mt-2" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Slippers" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>
                        Slippers & Flip- Flop's
                      </NavLink>
                      <NavLink className="mt-2" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Watches" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Watches </NavLink>
                      <NavLink className="mt-2" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Smart Watches" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Smart Watches</NavLink>
                      <NavLink className="mt-2">
                        Personal Care Appliances
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Women_Peersonal_Care.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Beauty & Grooming
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Beauty.map((item, i) => {
                            return (
                              <li>
                                 <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Jewellery
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Jewellery.map((item, i) => {
                            return (
                              <li>
                              <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Accessories
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Women_Asseccories.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Featured
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Women_Featured.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Trending Today
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Trending_Today.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>
                  </ul>
                  </div>}
                </NavLink>
              </li>

              <li className="nav-item " onClick={handleMouseEnterssss}
       >
                <NavLink
                  activeClassName="active"
                  className="menu-links text-dark p-2"
                  to="/app/product" 
                >
                 Baby & Kids
                 {showbaby && <div className="electronicList">
                  <ul
                    className="row "
                    style={{
                      position: "absolute",
                      listStyle: "none",
                      textDecoration: "none",
                      left: 0,
                      top: "100%",
                      color: "black",
                      textAlign: "left",
                      zIndex: "2",
                      width: "100%",
                    }}
                  >
                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Clothing" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Kid's Clothing</NavLink>
                      <NavLink className="mt-3">
                        Boy's Clothing
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Boys_Clothing.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Girl's Clothing
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Girls_Clothing.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Baby Boy's Clothing
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Baby_Boys_Clothing.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                        Baby Girl's Clothing
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Baby_Girls_Clothing.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value:"Footwear" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Kid's Footwear</NavLink>
                      <NavLink className="mt-3">
                        Boy's Footwear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Boys_Footwear.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Girl's Footwear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Girls_Footwear.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value:"Infant Footwear" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Infant Footwear</NavLink>
                      <NavLink className="mt-2">
                        Character Shoes
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Character_Shoes.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: "Winter Wear" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Kids' Winter Wear</NavLink>
                      <NavLink className="mt-2">
                        Boys' Winter Wear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Boys_Winter_Wear.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Girls' Winter Wear
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Girls_Winter_Wear.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Toys
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Toys.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        School Supplies
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {School_Supplies.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Baby Care
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Baby_Care.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Featured Brands
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Featured_brands.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>
                  </ul>
                  </div>}
                </NavLink>
              </li>

              <li className="nav-item "onClick={handleMouseEntersssss}
        >
                <NavLink
                  activeClassName="active"
                  className="menu-links text-dark p-2"
                  to="/app/product" 
                >
                  Sports, Books & More
                  {showsport && <div className="electronicList">
                  <ul
                    className="row "
                    style={{
                      position: "absolute",
                      listStyle: "none",
                      textDecoration: "none",
                      left: 0,
                      top: "100%",
                      color: "black",
                      textAlign: "left",
                      zIndex: "2",
                      width: "100%",
                    }}
                  >
                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink >
                        Sports
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Sports.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                      Exercise Fitness
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Exercise_Fitness.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink >
                      Food Essentials
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Food_Essentials.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                      Health & Nutrition
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Health_Nutrition.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                       Books
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Books.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-2">
                        Stationery
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Stationery.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                        Auto Accessories
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Auto_Accessories.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                      Industrial & Scientific tools
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Industrial_Scientific_tools.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                      Medical Supplies
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Medical_Supplies.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                    </li>

                    <li className="col d-flex flex-column bg-white p-2 text-dark">
                      <NavLink>
                      Music
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Music.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3">
                      Gaming
                        <ul
                          style={{
                            listStyle: "none",
                            textDecoration: "none",
                            left: 0,
                            fontWeight: "100",
                            lineHeight: "1.6rem",
                            paddingLeft: "0",
                          }}
                        >
                          {Gaming.map((item, i) => {
                            return (
                              <li>
                               <NavLink to="/app/product"  onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value: item }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>{item}</NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavLink>
                      <NavLink className="mt-3" onClick={()=>{
 
 dispatch(setQueryParams({ param: "search", value:"Grocery" }));

 setTimeout(() => {
  setShow(false);
setShowTv(false);
setShowmen(false);
setShowwomen(false);
setShowbaby(false);
setShowsport(false);
}, 100);

                  }}>Grocery (Only in Select Cities)</NavLink>
                    </li>
                  </ul>
                  </div>}
                </NavLink>
              </li>
              
                
                
              <NavLink
              activeClassName="active"
              className="col menu-links text-dark "
              to="/app/Userorders"
              style={{ fontWeight:"bold" }}
            >
              My Orders
            </NavLink>
            
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
