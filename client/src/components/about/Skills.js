import React from 'react';

// Common
import Circle from '../common/Circle';

// Css
import '../../css/about.css';

// Img
import Redux from '../../assets/Redux';
import MongoDB from '../../assets/MongoDB';
import NodeJs from '../../assets/NodeJs';

export default function Skills() {
  return (
    <div className='skills text-center'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex p-2'>
            <Circle icon='fab fa-html5 fa-3x' text='Html 5' />
            <Circle icon='fab fa-css3-alt fa-3x' text='Css 3' />
            <Circle icon='fab fa-js-square fa-3x' text='JavaScript' />
            <Circle icon='fab fa-react fa-3x' text='React' />
            <Circle icon='fas fa-database fa-3x' text='PostgreSQL' />
            <Circle svg={<Redux width='50px' />} text='Redux' />
            <Circle svg={<MongoDB height='3em' width='5.51em' />} text='MongoDB' />
            <Circle svg={<NodeJs height='3em' width='5.51em' />} text='NodeJs' />
          </div>
        </div>
      </div>
    </div>
  )
}
