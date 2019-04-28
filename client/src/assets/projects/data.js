import photo from './Photo.jpg';
import proteinTracker from './proteinTracker.jpg';
import liveCurrency from './liveCurrency.jpg';

const data = {
  'properties': [
    {
      'id': '0',
      'index': 0,
      'picture': proteinTracker,
      "title": 'Protein Tracker',
      "summary": "text summary",
      "link": 'https://test.com/',
      "linkName": 'Protein-Tracker',
      "logo": 'logo`s'
    },
    {
      'id': '1',
      'index': 1,
      'picture': liveCurrency,
      "title": 'Live Currency',
      "summary": "text summary",
      "link": 'https://test.com/',
      "linkName": 'Live-Currency',
      "logo": 'logo`s'
    },
    {
      'id': '2',
      'index': 2,
      'picture': photo
    },
    {
      'id': '3',
      'index': 3,
      'picture': photo
    },
    {
      'id': '4',
      'index': 4,
      'picture': photo
    }
  ]
};

export default data;