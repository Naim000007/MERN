import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContex'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
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

          <input type='text' placeholder='Phone Number' />
        </div>
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p> ${getTotalCartAmount()} </p>
              {/* <hr /> */}
            </div>
            <div className='cart-total-details'>
              <p>Delivery</p>
              {
                getTotalCartAmount() === 0 ? <p>$0</p> : <p>$2</p>
              }
            </div>
            <div className='cart-total-details'>
              <b>Total</b>
              {
                getTotalCartAmount() === 0 ? <b>$0</b> : <b>${getTotalCartAmount() + 2}</b>
              }

              {/* <hr /> */}
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder