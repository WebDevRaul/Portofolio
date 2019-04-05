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
  const rem = '3rem';
  return (
    <div className='skills text-center'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex p-2'>
            <Circle svg={<Html width={rem} height={rem} />} text='Html 5' />
            <Circle svg={<Css width={rem} height={rem} />} text='Css 3' />
            <Circle svg={<Javascript width={rem} height={rem} />} text='Javascript' />
            <Circle svg={<JQuery width={rem} height={rem} />} text='JQuery' />
            <Circle svg={<ReactJs width={rem} height={rem} />} text='ReactJs' />
            <Circle svg={<Redux width={rem} height={rem} />} text='Redux' />
            <Circle svg={<MongoDB height={rem} width='5.5rem' />} text='MongoDB' />
            <Circle svg={<NodeJs height={rem} width='5.5rem' />} text='NodeJs' />
            <Circle svg={<PostgreSQL height={rem} width={rem} />} text='PostgreSQL' />
          </div>
        </div>
      </div>
    </div>
  )
}
