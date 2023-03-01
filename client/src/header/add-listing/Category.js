import React from 'react'
import './Category.css'

export default function Category() {
  return (
    <div className='category-section'>
        <div className='category-form'>
            <div className='category-heading'>
              <h2>Category</h2>
            </div>
            <div className='category-form-content'>
                <div className='groups-content'>
                    <div className='groups'>
                        <div className='group-heading'>
                            Great For
                        </div>
                        <div className='checkbox'>
                            <div className='checkbox-content'>
                                <input className='checkbox-selector' type='checkbox' />
                                <div className='people'>Everyone</div>
                            </div>
                            <div className='checkbox-content'>
                                <input className='checkbox-selector' type='checkbox' />
                                <div className='people'>Families</div>
                            </div>
                            <div className='checkbox-content'>
                                <input className='checkbox-selector' type='checkbox' />
                                <div className='people'>Groups</div>
                            </div>
                        </div>
                    </div>
                    <div className='group-size'>
                        <div className='group-heading'>
                            Group Size
                        </div>
                        <div className='checkbox'>
                            <div className='checkbox-content'>
                                <input className='checkbox-selector' type='checkbox' />
                                <div className='number'>1-3 guests</div>
                            </div>
                            <div className='checkbox-content'>
                                <input className='checkbox-selector' type='checkbox' />
                                <div className='number'>4-10 guests</div>
                            </div>
                            <div className='checkbox-content'>
                                <input className='checkbox-selector' type='checkbox' />
                                <div className='number'>11-30 guests</div>
                            </div>
                            <div className='checkbox-content'>
                                <input className='checkbox-selector' type='checkbox' />
                                <div className='number'>30+ guests</div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className='group-regions'>
                    <div className='group-heading'>
                        Regions
                    </div>
                    <div className='checkbox'>
                        <div className='checkbox-content'>
                            <input className='checkbox-selector' type='checkbox' />
                            <div className='regions'>Amsterdam</div>
                        </div>
                        <div className='checkbox-content'>
                            <input className='checkbox-selector' type='checkbox' />
                            <div className='regions'>Paris</div>
                        </div>
                        <div className='checkbox-content'>
                            <input className='checkbox-selector' type='checkbox' />
                            <div className='regions'>London</div>
                        </div>
                        <div className='checkbox-content'>
                            <input className='checkbox-selector' type='checkbox' />
                            <div className='regions'>Zurich</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
