import React from 'react'

export default function Title() {
  return (
    <div className='title text-center'>
      <div className='row mb-5 mt-5 no-gutters'>
        <div className='col'>
          <div className='title-div m-auto div-animation'>
            <i className='border-animation'></i>
              <h3 className='d-flex'>
                <span className='title-text p-2 title-animation'>About Me</span>
              </h3>
            <i className='border-animation'></i>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='subtitle text-uppercase mb-3'>
            <span className=''>Allow me to introduce myself</span>
          </div>
        </div>
      </div>
    </div>
  )
}
