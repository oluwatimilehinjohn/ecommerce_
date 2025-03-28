import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        An eCommerce site is an online platform that allows businesses and individuals to buy and sell goods or services over the internet. It provides a virtual storefront where customers can browse products, add items to their cart, and complete transactions securely using various payment methods.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
