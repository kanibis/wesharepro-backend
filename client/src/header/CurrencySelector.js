import React, { useState } from 'react'
import {currencies} from './currency-json/Common-Currency.js'


export default function CurrencySelector() {
    const [currency, setCurrency] = useState(currencies[0].code)
    const [showDropdown, setShowDropdown] = useState(false)

    const handleClick = (e) => {
        setShowDropdown(!showDropdown)
    }

    
    // document.querySelector('body').addEventListener('click',function(e) {
    //     console.log(e.target.id)
    //     if (e.target.id != 'base-currency' || e.target.id != 'currency-selector-dropdown') {
    //         setShowDropdown(false)
    //     } else {
    //         setShowDropdown(false)
    //     }
    // })

  return (
    <div>
        <div className='currency-selector-container'>
            <button className='currency-dropdown-item' id='base-currency' onClick={handleClick}>
                <span>{currencies[0].code}</span> <span>({currencies[0].symbol})</span> &nbsp;&nbsp;
                <i className="fa-solid fa-chevron-down" style={{fontSize: '10px', color: 'black'}}></i>
            </button>
            {showDropdown ? 
            (
                <div className="currency-selector-dropdown" id='currency-selector-dropdown'>
                <div className="currency-dropdown-container">
                    <p style={{textAlign: 'center', fontSize: '24px', fontWeight: 'bold', borderBottom: '1px solid gray', paddingBottom: '15px'}}>Currency</p>
                    {currencies.map((curr, index) => 
                    (
                        <button key={curr.name} value={curr.symbol} className='currency-dropdown-item'>
                          <span>{curr.code}</span>
                          <span>({curr.symbol})</span>
                        </button>
                    )
                )}
                </div>
            </div>
            ) : ('')
            }
            
        </div>
    </div>
  )
}
