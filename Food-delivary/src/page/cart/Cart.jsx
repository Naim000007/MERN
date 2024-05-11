import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context/StoreContex'
import { assets } from '../../assets/assets'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className='cart-items-title cart-items-item' key={item._id}>
                    <img src={item.image} alt=""></img>
                    <p>{item.name}</p>
                    <p>${cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    {/* <img onClick={() => removeFromCart(item._id)} src={assets.re} alt="" /> */}
                    <p className='cross' onClick={() => removeFromCart(item._id)}>X</p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })
        }
      </div>
      <div className='cart-bottom'>
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
          <button>Checkout</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have promocode enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Enter promocode' />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart