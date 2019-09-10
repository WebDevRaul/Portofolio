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
      "link": 'https://my-macro-calculator.herokuapp.com/',
      "linkName": 'Link',
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
      "title": 'Live Currency',
      "summary": "Daily exchange rates & currency conversion calculator.",
      "link": 'https://live-currency-and-convertor.herokuapp.com/',
      "linkName": 'Link',
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
      "title": 'PostgreSQL - CRUD',
      "summary": "Register-Login & Create,Read,Update & delete data",
      "link": 'https://postgresql-crud.herokuapp.com/',
      "linkName": 'Link',
      "skills": [
        <LogoWrapper key='ReactJs'  svg={<Logo.ReactJs width={em} height={em} />}/>,
        <LogoWrapper key='Javascript'  svg={<Logo.Javascript width={em} height={em} />}/>,
        <LogoWrapper key='Redux'  svg={<Logo.Redux width={em} height={em} />}/>,
        <LogoWrapper key='MongoDB' svg={<Logo.PostgreSQL height={em} width={em} />}/>,
        <LogoWrapper key='NodeJs'  svg={<Logo.NodeJs width={nodeJs} height={nodeJs} />}/>,
        <LogoWrapper key='Bootstrap' svg={<Logo.Bootstrap width={em} height={em} />}/>,
        <LogoWrapper key='Css' svg={<Logo.Css width={em} height={em} />}/>
      ]
    },
    {
      'id': '3',
      'index': 3,
      'picture': questionMark,
      "title": 'Pagination',
      "summary": "A few examples of pagination",
      "link": 'https://pagination-react.herokuapp.com/',
      "linkName": 'Link',
      "skills": [
        <LogoWrapper key='ReactJs'  svg={<Logo.ReactJs width={em} height={em} />}/>,
        <LogoWrapper key='Javascript'  svg={<Logo.Javascript width={em} height={em} />}/>,
        <LogoWrapper key='Redux'  svg={<Logo.Redux width={em} height={em} />}/>,
        <LogoWrapper key='Bootstrap' svg={<Logo.Bootstrap width={em} height={em} />}/>,
        <LogoWrapper key='Sass' svg={<Logo.Sass width={em} height={em} />}/>,
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