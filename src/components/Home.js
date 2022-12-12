

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary fixed-top">
  <div class="container-fluid ">
    <img className='img-fluid me-5' style={{width:"120px"}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <input type="text" className='form-control w-50' placeholder='search for product,brand and more' name="" id="" />
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-4">

        <li class="nav-item">
          
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active text-light fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu">
          <li><Link class="dropdown-item" to="#"><i class="fa fa-user text-primary" aria-hidden="true"></i> My Profile</Link></li>
             <li><hr class="dropdown-divider"/></li>
             <li><Link class="dropdown-item" to="#"><i class="fa fa-plus-circle text-primary" aria-hidden="true"></i> SuperCoin Zone</Link></li>
             <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="#"><i class="fa fa-archive text-primary" aria-hidden="true"></i> Orders</Link></li>
            <li><hr class="dropdown-divider"/></li>
             <li><Link class="dropdown-item" to="#"><i class="fa fa-heart text-primary" aria-hidden="true"></i> Wishlist</Link></li>
             <li><hr class="dropdown-divider"/></li>
             <li><Link class="dropdown-item" to="#"><i class="fa fa-ticket text-primary" aria-hidden="true"></i> Coupons</Link></li>
             <li><hr class="dropdown-divider"/></li>
             <li><Link class="dropdown-item" to="#"><i className="fa fa-gift text-primary" aria-hidden="true"></i> Gift Cards</Link></li>
             <li><hr class="dropdown-divider"/></li>
             <li><Link class="dropdown-item" to="#"><i class="fa fa-bell text-primary" aria-hidden="true"></i> Notification</Link></li>
          </ul>
        </li>
        <li class="nav-item ">
          <a class="nav-link active text-light fw-bold" href="#">Become a Seller</a>
        </li>

        <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle active text-light fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu ">
          <li><Link class="dropdown-item" to="#"><i class="fa fa-bell text-primary" aria-hidden="true"></i> Notification Preference</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="#"><i class="fa fa-question-circle text-primary" aria-hidden="true"></i> 24 X 7 Customer Care</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="#"><i class="fa fa-line-chart text-primary" aria-hidden="true"></i> Advertise</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="#"><i className="fa fa fa-download text-primary" aria-hidden="true"></i> Download App</Link></li>
          </ul>
        </li>

        
        <li class="nav-item">
          <a class="nav-link active fw-bold text-light"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar