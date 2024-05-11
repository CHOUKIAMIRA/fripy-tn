/* eslint-disable no-unused-vars */
import React from 'react'
import orders from '../../assets/icons/icon1.png'
import orders1 from '../../assets/icons/icon2.png'
import orders2 from '../../assets/icons/icon3.png'
import orders3 from '../../assets/icons/icon4.png'
import orders4 from '../../assets/icons/icon5.png'

const Hero = () => {
  return <>
    
            <div >
              <img src={orders}  alt="Fast Orders" />
              <div>
                <p >Fast Orders</p>
              </div>
            </div>
         
          <div >
          <img src={orders1}  alt="Fast Orders" />
          <div>
            <p >Fast Orders</p>
          </div>
        </div>
        <div >
              <img src={orders2}  alt="Fast Orders" />
              <div>
                <p >Fast Orders</p>
              </div>
            </div>
         
            <div >
              <img src={orders3}  alt="Fast Orders" />
              <div>
                <p >Fast Orders</p>
              </div>
            </div>

            <div >
            <img src={orders4}  alt="Fast Orders" />
              <div>
                <p >Fast Orders</p>
              </div>
            </div>

          
  </>;
}

export default Hero