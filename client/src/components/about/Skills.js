import React from 'react';

// Common
import Circle from '../common/Circle';

// Css
import '../../css/about.css';

// Img
import Redux from '../../assets/Redux';
import MongoDB from '../../assets/MongoDB';
import NodeJs from '../../assets/NodeJs';
import PostgreSQL from '../../assets/PostgreSQL';
import ReactJs from '../../assets/ReactJs';

export default function Skills() {
  return (
    <div className='skills text-center'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex p-2'>
            <Circle icon='fab fa-html5 fa-3x' text='Html 5' />
            <Circle icon='fab fa-css3-alt fa-3x' text='Css 3' />
            <Circle icon='fab fa-js-square fa-3x' text='JavaScript' />
            <Circle svg={<ReactJs width='50px' height='50px' />} text='ReactJs' />
            <Circle svg={<Redux width='50px' />} text='Redux' />
            <Circle svg={<MongoDB height='3em' width='5.51em' />} text='MongoDB' />
            <Circle svg={<NodeJs height='3em' width='5.51em' />} text='NodeJs' />
            <Circle svg={<PostgreSQL height='45px' width='45px' />} text='PostgreSQL' />
          </div>
        </div>
      </div>
    </div>
  )
}
