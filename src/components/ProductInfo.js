
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./data";
import Footer from "./Footer";
// import { useNavigate, useParams } from "react-router-dom";
// import { addProduct } from "../redux/cartRedux";
// import { useDispatch } from "react-redux/es/hooks/useDispatch";
// import { API_URL } from "../auth.service/auth.service";
// import InfoNav from "./InfoNav";



export default function ProductDetail() {


const [pro,setPro] = useState({})
const {id} = useParams()
console.log(pro);
  
const getProinfo = async () => {
  try {
    const {data} = await axios.get(`https://62556e3352d8738c6921d09a.mockapi.io/user/${id}`)
    setPro(data)
    console.log(data)
  } catch (error) {
    console.log(error.message);
  }
}

useEffect(()=>{
getProinfo()
},[id])


  return (
    <div className="container-fluid " style={{marginTop:"100px"}}>
     
      
      
        <div className="row mt-4">
          
          <div className="col-lg-5 col-md-12 col-12 mb-2 ">
            {/* Carousel for img,img1,img2 */}
            <div
              id="carouselExampleControls"
              className="carousel slide  mx-5 "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={pro.img}
                    className="d-block imgfun rounded-5 img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={pro.img1}
                    className="d-block imgfun  rounded-5 img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={pro.img2}
                    className="d-block imgfun rounded-5 img-fluid"
                    alt="..."
                  />
                </div>
                

              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
              <div className="d-flex mt-3 gap-3">
              <button className="  w-75 text-light fw-bold btncolour2 mx-auto shadow-lg rounded"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ADD TO CART</button>
              <button className="   w-75 btncolour text-light fw-bolder mx-auto shadow-lg rounded"><i class="fa fa-bolt" aria-hidden="true"></i> BUY NOW</button>
              </div>
              
            </div>
            
          </div>

          

          {/* end carousel*/}






          {/* product description */}
          <div className="col-lg-5 col-md-12 col-12 mb-2">
            <h5 className="text-secondary">{pro.miniName}</h5>
            <h4>{pro.name}</h4>
            <p className="fw-bold colour2">Special price</p>
            <div className="d-flex gap-3">
                <h1>₹ <span className="fw-bold">{pro.price}</span></h1>
                <s className="text-secondary fw-bold">₹ {pro.mrp}</s>
                <p className="colour2 fw-bold">{pro.offer} Off </p>
            </div>

            <div className="d-flex gap-3">
            <p className="text-light colour fw-bold rounded-5" style={{paddingLeft:"5px",width:"4rem"}} >4.4
              
              <i class="fa fa-star text-light ms-2" aria-hidden="true"></i>{" "}
               
            </p>
            <p className="fw-bold text-secondary">863 Rating & 76 Reviews</p>
            <img className="img-fluid " style={{width:"6rem",height:"25px"}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" />
            </div>
            
            
            <div className="">
              <p className="fw-bold">Available offers</p> 
              <p><i class="fa fa-tag colour2" aria-hidden="true"></i> Special PriceGet at flat ₹409 <small className="text-primary fw-bold ">KnowMore</small></p>
              <p><i class="fa fa-tag colour2" aria-hidden="true"></i> Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* <small className="text-primary fw-bold ">T&C</small></p>
              <p><i class="fa fa-tag colour2" aria-hidden="true"></i> Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account <small className="text-primary fw-bold ">T&C</small> </p>  
              <p><i class="fa fa-tag colour2" aria-hidden="true"></i> Bank Offer10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and above<small className="text-primary fw-bold ">T&C</small></p> 
              
            </div>
            
                <hr />
    <p className="fw-bold text-secondary">Size</p>
    {/* size selector */}
    <select
                className="form-select-md text-center border border-2 rounded border-primary"
                aria-label=".form-select-sm example"
               
              >
                <option selected>--Select Size--</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="XL">XL</option>
                <option value="2XL">2 XL</option>
                <option value="3XL">3 XL</option>
                <option value="4XL">4 XL</option>
                <option value="5XL">5 XL</option>
              </select>



              <button
              className="mt-2 btn btn-outline-primary border-0 bg-transparent btn-lg"
              aria-hidden="true"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <small className="text-primary ">📏Size Chart</small>
            </button>


<hr />

<div className="d-flex gap-5">
<p className="text-secondary fw-bold">Seller</p>

</div>

<div>
<p className="text-primary fw-bold">Imperial Clothing</p>
<p className="text-light bg-primary fw-bold rounded-5" style={{paddingLeft:"5px",width:"60px"}} > 4.4
              
  <i class="fa fa-star text-light ms-2" aria-hidden="true"></i>{" "}
               
    </p>
  <li className="mb-3">10 Days Return Policy</li>
  <p className="text-primary fw-bold"> See other seller</p>
</div>
<hr />


            <p className="d-flex">
  
  <h3 class=" fw-bold cur"  data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
   Product Details
  </h3>
  
  
</p>

<hr />
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    <div className="">

        
    <table class="table table-borderless ">
  <thead>
    <tr>
      {/* <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td>Type</td>
      <td>Polo Neck</td>
      
    </tr>
    <tr>
      {/* <th scope="row">2</th> */}
      <td>Sleeve</td>
      <td>Half Sleeve</td>
     
    </tr>

    <tr>
      {/* <th scope="row">2</th> */}
      <td>Fit</td>
      <td>Regular</td>
     
    </tr>

    <tr>
      {/* <th scope="row">2</th> */}
      <td>Fabric</td>
      <td>Cotton Blend</td>
     
    </tr>

    <tr>
      {/* <th scope="row">2</th> */}
      <td>Sales Package</td>
      <td>2</td>
     
    </tr>

    <tr>
        <td>Ideal For</td>
        <td>Men</td>
    </tr>

    <tr>
        <td>Pattern</td>
        <td>Solid</td>
    </tr>
    
    <tr>
        <td>Suitable For</td>
        <td>Western Wear</td>
    </tr>

    <tr>
        <td>Sleeve Type</td>
        <td>Narrow</td>
    </tr>

    <tr>
        <td>Reversible</td>
        <td>No</td>
    </tr>

    <tr>
        <td>Machine Care</td>
        <td>Regular Machine Wash</td>
    </tr>
    
  </tbody>
</table>
<p className="text-start">Stay on top of the style league with this collection of 
    stylish basic t-shirts which have been made from combed cotton. 
    The regular fit design ensures that it will flatter most body types 
    with utmost ease. This kind of t-shirts are perfect or daily or casual wear.
     The t-shirt can be paired up with jackets and cardigans for a chic and cool look.</p>






    </div>
  </div>
</div>



<div className="d-flex justify-content-between mt-5">
  <h3>Rating & Reviews</h3>
  <p className="text-light colour fw-bold rounded-5" style={{paddingLeft:"8px",width:"4rem"}} > 4.4
              
  <i class="fa fa-star text-light ms-2" aria-hidden="true"></i>{" "}
               
    </p>
</div>

<br />
<div className="">
  <h6>What ours customers felt </h6>
  <i class="fa fa-2x fa-smile-o colour2" aria-hidden="true"></i>
  <div className="d-flex gap-3 rounded">
  <small className="shadow w-25 p-2 text-center fw-bold">Fabric</small>
  <small className="shadow w-25 p-2 text-center fw-bold">Style</small>
  <small className="shadow w-25 p-2 text-center fw-bold">True to Specs</small>
  <small className="shadow w-25 p-2 text-center fw-bold">Stitching Quality</small>
  </div>
  
  <div className="d-flex gap-3 rounded mt-3">
  <i class="fa fa-2x fa-frown-o text-warning " aria-hidden="true"></i>
 <small className="shadow w-25 p-2 text-center fw-bold">Color</small>
  </div>
 
  
</div>



<div className="d-flex gap-3 mt-3">
  <img width="55rem" className="shadow-lg border border-2" src="https://m.media-amazon.com/images/I/61OVuGDVHfL._UL1440_.jpg" alt="" />
  <img width="55rem" className="shadow-lg border border-2"  src="https://m.media-amazon.com/images/I/61uIfqZA1RL._UL1440_.jpg" alt="" />
  <img src="" alt="" />
</div>

<hr />
{/* Qus and Ans */}


<h3 className="mt-5">Questions and Answers</h3>
<p className="mt-3 fw-bold">Q: <span>Is it for summer or winter season</span></p>
<p>A: <span>Summer</span></p>
<i class="fa fa-check-circle text-secondary mb-3" aria-hidden="true"></i> <small className="text-secondary fw-bold">Certfied Buyer</small>
<div className="d-flex gap-3">
<p><i class="fa fa-thumbs-o-up cur text-secondary" aria-hidden="true"></i></p>
<p><i class="fa fa-thumbs-o-down cur text-secondary" aria-hidden="true"></i></p>
</div>

<hr />


<p className="mt-3 fw-bold">Q: <span>It is fit for 6feet person</span></p>
<p>A: <span>No and also Material is not good</span></p>
<i class="fa fa-check-circle text-secondary mb-3" aria-hidden="true"></i> <small className="text-secondary fw-bold">Certfied Buyer</small>
<div className="d-flex gap-3">
<p><i class="fa fa-thumbs-o-up cur text-secondary" aria-hidden="true"></i></p>
<p><i class="fa  fa-thumbs-o-down cur text-secondary" aria-hidden="true"></i></p>
</div>

<hr />









            
            
            {/* model trigger */}
            {/* <button
              className="mt-2 btn btn-outline-primary border-0 bg-transparent btn-lg"
              aria-hidden="true"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <span className="text-secondary">📏Size Guide</span>
            </button> */}

            {/*  model start */}

            <div
              className="modal fade"
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog ">
                <div className="modal-content ">
                  <div className="modal-header ">
                    <h5 className="modal-title " id="exampleModalLabel">
                      Size Guide
                    </h5>
                    <button
                      type="button"
                      className="btn-close bg-danger"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-center">
                    <img
                      src="https://i.pinimg.com/originals/54/b9/a9/54b9a9cb8685b54ffc43dc6a1681c7a7.jpg"
                      className="w-75"
                      alt=""
                    />
                    <p className="text-start mt-2">
                   <h3 className="mt-3">Measuring T Shirt Size</h3> 
Not sure about your t shirt size? Follow these simple steps to <br /> figure it out:


 <p> <span className="fw-bold">Shoulder - </span>  Measure the shoulder at the back, from edge to edge with arms relaxed on both sides</p> 
 <p><span className="fw-bold">Chest -  </span>Measure around the body under the arms at the fullest part of the chest with your arms relaxed at both sides.</p> 
 <p><span className="fw-bold">Sleeve -  </span> Measure from the shoulder seam through the outer arm to the cuff/hem </p>  
<p><span className="fw-bold">Neck -  </span>  Measured horizontally across the neck Length - Measure from the highest point of the shoulder seam to the bottom hem of the garment's</p>  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}