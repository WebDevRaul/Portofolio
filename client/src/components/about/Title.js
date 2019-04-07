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
          <div className='subtitle-div text-uppercase mb-3'>
            {/* <span className=''>Allow me to introduce myself</span> */}
            <div className='subtitle-text'>
              <span>A</span>
              <span>l</span>
              <span>l</span>
              <span>o</span>
              <span>w</span>
              <span className='space'></span>
              <span>m</span>
              <span>e</span>
              <span className='space'></span>
              <span>t</span>
              <span>o</span>
              <span className='space'></span>
              <span>i</span>
              <span>n</span>
              <span>t</span>
              <span>r</span>
              <span>o</span>
              <span>d</span>
              <span>u</span>
              <span>c</span>
              <span>e</span>
              <span className='space'></span>
              <span>m</span>
              <span>y</span>
              <span>s</span>
              <span>e</span>
              <span>l</span>
              <span>f</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
