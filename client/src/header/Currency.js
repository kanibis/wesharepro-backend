import React, { useState } from 'react'
import {currencies} from './currency-json/Common-Currency.js'

export default function Currency() {
  const [currency, setCurrency] = useState(currencies[0].code) // USD

  function selectCurrency(e) {
    const val = e.target.value;
    // setCurrency(prevState => ({ ...prevState, [name]:val }));
  };


  return (
    <div className='currency-container'>
        <a href='#'>
          <select
                value={currency}
                onChange={selectCurrency}
                className='currency-selector'
            >
                <option disabled style={{textAlign: 'center', fontSize: '20px'}}>Currency</option>
                {currencies.map((curr) => 
                    (
                        <option key={curr.name} value={curr.symbol}>
                          {curr.code} ({curr.symbol})
                        </option>
                    )
                )}
            </select>
        </a>
        
    </div>
  )
}
