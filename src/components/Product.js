import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import { useEffect } from 'react';

function Product() {

  

const navigate = useNavigate()

const [list,setList] = useState({})




  const getAll = async () =>{
    try {
      const {data} = await axios.get(`https://62556e3352d8738c6921d09a.mockapi.io/user`)
      console.log(data)
      setList(data)
    } catch (error) {
      console.log(error.message);
    }
      
  }

useEffect(()=>{
getAll();
},[])



  return (
    <>
    
      <div className="container" style={{marginTop:"120px"}}>
        <div className="row mb-2">
          {list.map && list.filter((s)=>s.name.toLowerCase()).map((g,i)=>{
            const {name,id,price,mrp,miniName,offer,img} = g
            return(
              <>
              <div className="col mb-3">

              <div class="card hands shadow-lg" style={{width: "18rem"}} key={i} onClick={()=>navigate(`/info/${id}`)}>
  <img src={img} class="card-img-top pro" alt="..."/>
  <div class="card-body">
    <div className='d-flex  justify-content-between'>
    <h6 className='text-secondary'>{miniName} <img style={{width:"4rem"}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" /></h6>
    
    </div>
    
    <h5 class="card-title">{name} </h5>
    <p class="card-text"></p>
    <div className='d-flex gap-3'>
    <p class="fw-bold">₹ {price}</p>
    <s className='fw-bold text-secondary'>₹{mrp}</s>
    <small className='colour2 fw-bold'>{offer} Off %</small>
    
    </div>
    <div className='d-flex justify-content-between'>
    <small>Free Delivery</small>
    <i class="fa fa-heart text-secondary" aria-hidden="true"></i>
    </div>
    
  </div>
</div>


              </div>
              </>
            )
          })}
        </div>
      </div>



    </>
  )
}

export default Product