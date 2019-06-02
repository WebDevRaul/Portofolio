import React, { Component } from 'react';
import classnames from 'classnames';

// Devices
import Devices from '../../assets/svg/Devices';

export default class Responsive extends Component {
  constructor() {
    super();
    this.state = {
      txt: '',
			word: '',
			wordIndex: 0,
      isDeleting: false,
      arr: ['Development','Design', 'Support','Review'],
      wait: 1000
    };
  };

  componentDidMount() {
    this.tick();
  };

  tick = () => {
    const { txt, fullTxt, wordIndex, isDeleting, arr, wait } = this.state;
    
    // Timer for func
    let timer = 300 - Math.random() * 100;
    // Current index of word
    let i = wordIndex % arr.length;
    // Current word
    let word = arr[i];
    
    // Check if deleting
    if (isDeleting) {
      // remove
      this.setState({ txt: word.substring(0, txt.length - 1) })
    } 
    else {
      // add
      this.setState({ txt: word.substring(0, txt.length + 1) })
    }

    // Start deleting state 
    if (!isDeleting && txt === word) {
      this.setState({ isDeleting: true })
    } 
    // Start again
    else if (isDeleting && txt === '') {
      this.setState({ isDeleting: false, wordIndex: wordIndex + 1 })
    }

    this.setState({ fullTxt: word });

    // Set Timer faster when deleting
    if (isDeleting) { 
      timer /= 2; 
    }
    // Set Timer to wait before deleting
    if (!isDeleting && txt === fullTxt) {
      timer = wait;
    } 
    // Set Timer to normal
    else if (isDeleting && txt === '') {
      timer = 500;
    }
    // recall function
    setTimeout(() => this.tick(), timer); 
  };

  render() {
    const mac = '13em';
    const ipad = '7em';
    const phone = '5em';
    const { txt } = this.state;
    return (
      <div className='responsive'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col-12 col-sm-6 d-flex'>
              <div className='responsive-list m-auto'>
                <ul className='fa-ul m-0'>
                  <li>
                    <span className="fa-li" ><i className="fas fa-asterisk"></i></span>
                    <h1 className='type-writer d-flex'>Website
                      <span className='d-flex ml-2'>{txt}
                        <small className='m-auto'>|</small>
                      </span>
                    </h1>
                    </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-6 d-block'>
              <div className='d-flex'>
                <div className='m-auto'>
                  <div className='responive-devices'>
                    <div className='responsive-mac'>
                      <Devices.Mac width={mac} height={mac} />
                      <span>&#123; Responsive &#125;</span>
                    </div>
                    <div className='responsive-ipad-div'>
                      <div className='responsive-ipad'>
                        <Devices.Ipad width={ipad} height={ipad} />
                        <span>Responsive</span>
                      </div>
                    </div>
                    <div className='responsive-phone-div'>
                      <div className='responsive-phone'>
                        <Devices.Phone width={phone} height={phone} />
                        <span>Responsive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className='text-center mt-3'>
                <small><i>Responsive design that looks great on any device.</i></small>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  };
};