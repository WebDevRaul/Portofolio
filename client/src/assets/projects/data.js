import React from 'react';

// Components
import LogoWrapper from '../../components/common/LogoWrapper';

// Picture
import proteinTracker from './proteinTracker.jpg';
import liveCurrency from './liveCurrency.jpg';
import questionMark from './questionMark.jpg';

// Logos
import Logo from '../skills/Logo';

const em = '0.8em';
const mongoDB = '2.2em';
const nodeJs = '1.5em';

const data = [
    {
      'id': '0',
      'index': 0,
      'picture': proteinTracker,
      "title": 'Macro Calculator',
      "summary": "Keeps track of your calories, fat, protein, and carbs every meal, every day.",
      "link": 'https://test.com/',
      "linkName": 'Protein-Tracker',
      "skills": [
        <LogoWrapper key='ReactJs'  svg={<Logo.ReactJs width={em} height={em} />}/>,
        <LogoWrapper key='Javascript'  svg={<Logo.Javascript width={em} height={em} />}/>,
        <LogoWrapper key='Redux'  svg={<Logo.Redux width={em} height={em} />}/>,
        <LogoWrapper key='MongoDB' svg={<Logo.MongoDB width={mongoDB} height={mongoDB} />}/>,
        <LogoWrapper key='NodeJs'  svg={<Logo.NodeJs width={nodeJs} height={nodeJs} />}/>,
        <LogoWrapper key='Bootstrap' svg={<Logo.Bootstrap width={em} height={em} />}/>,
        <LogoWrapper key='Css' svg={<Logo.Css width={em} height={em} />}/>,
      ]
    },
    {
      'id': '1',
      'index': 1,
      'picture': liveCurrency,
      "title": 'Exchange Rate',
      "summary": "Daily exchange rates & currency conversion calculator.",
      "link": 'https://test.com/',
      "linkName": 'Live-Currency',
      "skills": [
        <LogoWrapper key='ReactJs' svg={<Logo.ReactJs width={em} height={em} />}/>,
        <LogoWrapper key='Javascript' svg={<Logo.Javascript width={em} height={em} />}/>,
        <LogoWrapper key='Redux' svg={<Logo.Redux width={em} height={em} />}/>,
        <LogoWrapper key='NodeJs' svg={<Logo.NodeJs width={nodeJs} height={nodeJs} />}/>,
        <LogoWrapper key='Bootstrap' svg={<Logo.Bootstrap width={em} height={em} />}/>,
        <LogoWrapper key='Css' svg={<Logo.Css width={em} height={em} />}/>,
      ]
    },
    {
      'id': '2',
      'index': 2,
      'picture': questionMark,
      "title": 'In progress',
      "summary": "In progress",
      "link": '',
      "linkName": 'No Link',
      "skills": [
        <LogoWrapper key='ReactJs' svg={<Logo.ReactJs width={em} height={em} />}/>,
        <LogoWrapper key='Javascript' svg={<Logo.Javascript width={em} height={em} />}/>,
        <LogoWrapper key='Redux' svg={<Logo.Redux width={em} height={em} />}/>,
        <LogoWrapper key='NodeJs' svg={<Logo.NodeJs width={nodeJs} height={nodeJs} />}/>,
        <LogoWrapper key='Bootstrap' svg={<Logo.Bootstrap width={em} height={em} />}/>,
        <LogoWrapper key='Css' svg={<Logo.Css width={em} height={em} />}/>,
      ]
    },
    {
      'id': '3',
      'index': 3,
      'picture': questionMark,
      "title": 'In progress',
      "summary": "In progress",
      "link": '',
      "linkName": 'No Link',
      "skills": [
        <LogoWrapper key='ReactJs'  svg={<Logo.ReactJs width={em} height={em} />}/>,
        <LogoWrapper key='Javascript'  svg={<Logo.Javascript width={em} height={em} />}/>,
        <LogoWrapper key='Redux'  svg={<Logo.Redux width={em} height={em} />}/>,
        <LogoWrapper key='MongoDB' svg={<Logo.MongoDB width={mongoDB} height={mongoDB} />}/>,
        <LogoWrapper key='NodeJs'  svg={<Logo.NodeJs width={nodeJs} height={nodeJs} />}/>,
        <LogoWrapper key='Bootstrap' svg={<Logo.Bootstrap width={em} height={em} />}/>,
        <LogoWrapper key='Css' svg={<Logo.Css width={em} height={em} />}/>,
      ]
    },
    {
      'id': '4',
      'index': 4,
      'picture': questionMark,
      "title": 'In progress',
      "summary": "In progress",
      "link": '',
      "linkName": 'No Link',
      "skills": [
        <LogoWrapper key='ReactJs'  svg={<Logo.ReactJs width={em} height={em} />}/>,
        <LogoWrapper key='Javascript'  svg={<Logo.Javascript width={em} height={em} />}/>,
        <LogoWrapper key='Redux'  svg={<Logo.Redux width={em} height={em} />}/>,
        <LogoWrapper key='MongoDB' svg={<Logo.MongoDB width={mongoDB} height={mongoDB} />}/>,
        <LogoWrapper key='NodeJs'  svg={<Logo.NodeJs width={nodeJs} height={nodeJs} />}/>,
        <LogoWrapper key='Bootstrap' svg={<Logo.Bootstrap width={em} height={em} />}/>,
        <LogoWrapper key='Css' svg={<Logo.Css width={em} height={em} />}/>,
      ]
    }
  ]

export default data;