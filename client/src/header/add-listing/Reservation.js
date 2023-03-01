import React from 'react'
import { useState } from 'react'
import './Reservation.css'

export default function Reservation() {

const [count, setCount] = useState(1)
const [countMin, setCountMin] = useState(0)
const [countMax, setCountMax] = useState(0)

const handleCountAdd = () => {
    setCount(count => count + 1)
}

const handleCountMinus = () => {
    if (count > 1) {
        setCount(count => count - 1)
    } 
}

const handleCountMinAdd = () => {
    setCountMin(countMin => countMin + 1)
}

const handleCountMinMinus = () => {
    if (countMin > 0) {
        setCountMin(countMin => countMin - 1)
    } 
}

const handleCountMaxAdd = () => {
    setCountMax(countMax => countMax + 1)
}

const handleCountMaxMinus = () => {
    if (countMax > 0) {
        setCountMax(countMax => countMax - 1)
    } 
}

let time = [
    {id:'1', value: '08:00'},
    {id:'2', value: '09:00'},
    {id:'3', value: '10:00'},
    {id:'4', value: '11:00'},
    {id:'5', value: '12:00'},
    {id:'6', value: '13:00'},
    {id:'7', value: '14:00'},
    {id:'8', value: '15:00'},
    {id:'9', value: '16:00'},
    {id:'10', value: '17:00'},
    {id:'11', value: '18:00'},
    {id:'12', value: '19:00'},
    {id:'13', value: '20:00'},
    {id:'14', value: '21:00'},
    {id:'15', value: '22:00'},
    {id:'16', value: '23:00'},
    {id:'17', value: '00:00'},
    {id:'18', value: '01:00'},
    {id:'19', value: '02:00'},
    {id:'20', value: '03:00'},
    {id:'21', value: '04:00'},
    {id:'22', value: '05:00'},
    {id:'23', value: '06:00'},
    {id:'24', value: '07:00'},
]

  return (
    <div className='reservation-section'> 
        <div className='reservation-form'>
            <div className='reservation-heading'>
                <h2>Reservation</h2>
            </div>
            <div className='reservation-form-content-container'>
                <div className='reservation-form-content'>
                    <div className='reservation-form-content-heading'>
                        Allow instant booking
                    </div>      
                    <div className='checkbox-container'>
                        <input type='checkbox'/> <span>Yes</span>
                    </div> 
                </div> 
                <div className="reservation-form-content">
                    <div className='reservation-form-content-heading'>Number of Guests</div>
                    <div className='input-container'>
                        <input type='number' value={count} className='input-content'/>
                        <div className='counter-container'>
                            <span onClick={handleCountMinus} style={{cursor: 'pointer'}}>
                                <i className="fa-solid fa-minus" style={{marginRight: '10px', marginLeft: '10px'}}></i>
                            </span>
                            <span onClick={handleCountAdd} style={{cursor: 'pointer'}}>
                                <i className="fa-solid fa-plus"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='reservation-form-content'>
                    <div className='reservation-form-content-heading'>
                        Price per each additional guests
                    </div>
                    <div className='price-container'>
                        <input type='number' className='input-content'/>
                    </div> 
                </div> 
                <div className="reservation-form-content">
                    <div className='reservation-hours-container'>
                        <div className='minimum-reservation-hours-content'>
                            <div className='reservation-form-content-heading'>Minimum number of hours per reservation</div>
                            <div className='input-container'>
                                <input type='number' value={countMin} className='input-content'/>
                                <div className='counter-container'>
                                    <span onClick={handleCountMinMinus} style={{cursor: 'pointer'}}>
                                        <i className="fa-solid fa-minus" style={{marginRight: '10px', marginLeft: '10px'}}></i>
                                    </span>
                                    <span onClick={handleCountMinAdd} style={{cursor: 'pointer'}}>
                                        <i className="fa-solid fa-plus"></i>
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                        <div className='maximum-reservation-hours-content'>
                            <div className='reservation-form-content-heading'>Maximum number of hours per reservation</div>
                            <div className='input-container'>
                                <input type='number' value={countMax} className='input-content'/>
                                <div className='counter-container'>
                                    <span onClick={handleCountMaxMinus} style={{cursor: 'pointer'}}>
                                        <i className="fa-solid fa-minus" style={{marginRight: '10px', marginLeft: '10px'}}></i>
                                    </span>
                                    <span onClick={handleCountMaxAdd} style={{cursor: 'pointer'}}>
                                        <i className="fa-solid fa-plus"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reservation-form-content'>
                    <div className='reservation-form-content-heading'>
                        Add availability
                    </div>
                    <div className='availability-container'>
                            <div className='availability-start-time'>
                                <div className='availability-time-heading'>
                                    Start Time
                                </div>
                                <select className='availability-time'>
                                    {time.map((obj) => 
                                        (
                                            <option value={obj.value}>{obj.value}</option>
                                        )
                                    )}
                                </select>
                            </div>
                            <div className='availability-end-time'>
                                <div className='availability-time-heading'>
                                    End Time
                                </div>
                                <select className='availability-time'>
                                    {time.map((obj) => 
                                        (
                                            <option value={obj.value}>{obj.value}</option>
                                        )
                                    )}
                                </select>
                            </div>
                    </div>
                </div>
                <div className='reservation-form-content'>
                    <div className='reservation-form-content-heading'>
                        Appointment Duration
                    </div>
                    <div className='appointment-duration-content'>
                        <select className='appointment-duration'>
                            <option>10 min</option>
                            <option>15 min</option>
                            <option>20 min</option>
                            <option>30 min</option>
                            <option>40 min</option>
                            <option>45 min</option>
                            <option>50 min</option>
                            <option>60 min</option>
                        </select>
                    </div>
                </div>
                <div className='reservation-form-content'>
                    <div className='reservation-form-content-heading'>
                        Time between appointment
                    </div>
                    <div className='time-between-appointment-content'>
                        <select className='time-between-appointment'>
                            <option>None</option>
                            <option>5 min</option>
                            <option>10 min</option>
                            <option>15 min</option>
                        </select>
                    </div>
                </div>
                <div className='reservation-form-content'>
                    <div className='reservation-form-content-heading'>
                        Recurring period
                    </div>      
                    <div className='checkbox-container'>
                        <input type='checkbox'/> <span>Yes</span>
                    </div> 
                </div> 
                <div className='reservation-form-content'>
                    <div className='availability-container'>
                            <div className='availability-start-time'>
                                <div className='availability-time-heading'>
                                    Start Date
                                </div>
                                <input type='date' className='input-content'/>
                            </div>
                            <div className='availability-end-time'>
                                <div className='availability-time-heading'>
                                    End Date
                                </div>
                                <input type='date' className='input-content'/>
                            </div>
                    </div>
                </div>
                <div className="reservation-form-content">
                    <div className='custom-price-container'>
                        <div className='custom-price-container-content'>
                            <div className='reservation-form-content-heading'>Custom Price</div>
                            <div className='input-container'>
                                <input type='number' className='input-content'/>                                
                            </div>
                        </div>
                        <div className='custom-weekend-price-container-content'>
                            <div className='reservation-form-content-heading'>Custom Weekend Price</div>
                            <div className='input-container'>
                                <input type='number' className='input-content'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
