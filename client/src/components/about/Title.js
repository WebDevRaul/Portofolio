import React from 'react'

export default function Title() {
  return (
    <div className='title text-center'>
      <div className='row mb-5 mt-5 no-gutters'>
        <div className='col'>
          <div className='title-div'>
            <span className='span-div d-flex'>
              <span className='top-border d-flex m-auto'>About me</span>
              <span className='d-flex auto'>About me</span>
              <span className='bottom-border d-flex m-auto'>About me</span>
            </span>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='text-uppercase'>
            <p>Allow me to introduce myslef</p>
          </div>
        </div>
      </div>
    </div>
  )
}
