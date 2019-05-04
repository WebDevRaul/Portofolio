import React from 'react';

// Components
import DataCircle from '../../components/common/DataCircle';

// Picture
import proteinTracker from './proteinTracker.jpg';
import liveCurrency from './liveCurrency.jpg';

// Logos
import Logo from '../skills/Logo';

const em = '1.3em';
const specialEm = '2.5em';

const data = [
    {
      'id': '0',
      'index': 0,
      'picture': proteinTracker,
      "title": 'Protein Tracker',
      "summary": "text summary",
      "link": 'https://test.com/',
      "linkName": 'Protein-Tracker',
      "skills": [
        <DataCircle  svg={<Logo.ReactJs width={em} height={em} />}/>,
        <DataCircle  svg={<Logo.Javascript width={em} height={em} />}/>,
        <DataCircle  svg={<Logo.Redux width={em} height={em} />}/>,
        <DataCircle svg={<Logo.MongoDB width={specialEm} height={specialEm} />}/>,
        <DataCircle  svg={<Logo.NodeJs width={specialEm} height={specialEm} />}/>,
        <DataCircle  svg={<Logo.Bootstrap width={em} height={em} />}/>,
        <DataCircle  svg={<Logo.Css width={em} height={em} />}/>,
      ]
    },
    {
      'id': '1',
      'index': 1,
      'picture': liveCurrency,
      "title": 'Live Currency',
      "summary": "text summary",
      "link": 'https://test.com/',
      "linkName": 'Live-Currency',
      "skills": [
        <DataCircle  svg={<Logo.ReactJs width={em} height={em} />}/>,
        <DataCircle  svg={<Logo.Javascript width={em} height={em} />}/>,
        <DataCircle  svg={<Logo.Redux width={em} height={em} />}/>,
        <DataCircle  svg={<Logo.NodeJs width={specialEm} height={specialEm} />}/>,
        <DataCircle  svg={<Logo.Bootstrap width={em} height={em} />}/>,
        <DataCircle  svg={<Logo.Css width={em} height={em} />}/>,
      ]
    },
    {
      'id': '2',
      'index': 2,
      'picture': proteinTracker
    },
    {
      'id': '3',
      'index': 3,
      'picture': liveCurrency
    },
    {
      'id': '4',
      'index': 4,
      'picture': proteinTracker
    }
  ]

export default data;