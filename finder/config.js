'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/nikplokhov/cl6kgy7jv006114nk3mankaw5',
  accessToken:
    'pk.eyJ1IjoibmlrcGxva2hvdiIsImEiOiJjbDZlc252angxZXA2M2lxbDZ6YTFpaXFuIn0.d33_GQ1uZh7AMMCSI6ZJBg',
  CSV: './Sample_Data.csv',
  center: [59.534,60.606],
  zoom: 3.79,
  title: 'GAZPROM_TERMINAL',
  description:
    'Presentation of the company objects.',
  sideBarInfo: ['View_Object', 'Status', 'OBJ'],
  popupInfo: ['OBJ'],
  filters: [
    {
      type: 'dropdown',
      title: 'Object: ',
      columnHeader: 'OBJ',
      listItems: [
        'Amharic',
        'ASL',
        'Cambodian',
        'Chinese',
        'Danish',
        'English',
        'French',
        'German',
        'Greek',
        'Hindi',
        'Italian',
        'Japanese',
        'Korean',
        'Language Line Services',
        'Norwegian',
        'Oriya',
        'Portuguese',
        'Punjabi',
        'Russian',
        'Somali',
        'Spanish',
        'Swedish',
        'Tagalog',
        'Thai',
        'Tigrinya',
        'Tongan',
        'Vietnamese',
        'Ukranian',
      ],
    },
    {
      type: 'checkbox',
      title: 'Devices available: ',
      columnHeader: 'Devices_available', // Case sensitive - must match spreadsheet entry
      listItems: ['Computer', 'Wi-Fi', 'Adaptive Laptops'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Clients: ',
      columnHeader: 'Clients',
      listItems: [
        'Adults',
        'Disabled',
        'Homeless',
        'Immigrants/Refugees',
        'Low Income',
        'Seniors',
        'Youth: Pre-teen',
        'Youth: Teen',
      ],
    },
  ],
};
