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
import JQuery from '../../assets/JQuery';
import Html from '../../assets/Html';
import Css from '../../assets/Css';
import Javascript from '../../assets/Javascript';

export default function Skills() {
  return (
    <div className='skills text-center'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex p-2'>
            <Circle svg={<Html width='45px' height='45px' />} text='Html 5' />
            <Circle svg={<Css width='45px' height='45px' />} text='Css 3' />
            <Circle svg={<Javascript width='45px' height='45px' />} text='Javascript' />
            <Circle svg={<JQuery width='50px' height='50px' />} text='JQuery' />
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
