import React from 'react'
import './PlaceOrder.css'

const PlaceOrder = () => {
  return (
    <div className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type='Email' placeholder='Email Address' />
        <input type='text' placeholder='Street' />
        <div className='multi-fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='Division' />
          <div className='multi-fields'>
            <input type='text' placeholder='Zip Code' />
            <input type='text' placeholder='Country' />
          </div>
          <input type='text' placeholder='Phone Number' />
        </div>
      </div>
      <div className='place-order-right'></div>
    </div>
  )
}

export default PlaceOrder