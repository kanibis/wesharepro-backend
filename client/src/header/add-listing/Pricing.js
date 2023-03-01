import React, { useState } from 'react'
import './Pricing.css'

export default function Pricing() {

    var click_add = []
    var cnt = 1;
    const [addon, setAddon] = useState([])

    const handleClick = () => {
        cnt = cnt + 1
        click_add = click_add.concat(cnt)
        click_add = [...click_add]
        console.log(click_add)
        setAddon([...click_add]) 
    }

  return (
    <div className='pricing-section'>
        
        <div className='pricing-form'>
            <div className='pricing-heading'>
                <h2>Pricing</h2>
            </div>
            <div className='pricing-form-content'>
                <div className='title-heading'>
                    Base Price
                </div>
                <form>
                    <input type='text' className='title-details' required/>
                </form>
                {/* <div className='title-heading'>
                   Addons
                </div>
                {addon.map((obj, index) => (
                    <p key={index}>Hello</p>
                ))}
                
                <div>
                    <button onClick={handleClick}>Addon</button>
                </div> */}
            </div>
        </div>
    </div>
  )
}