import textogram from '../assets/photos/textogram.png';
import Ecommerce from '../assets/photos/basicEcommerce.png';
import weatherApp from '../assets/photos/weatherApp.png';


export const projects = [
  {
    id: 1,
    name: 'Pluto Ecommerce',
    image: Ecommerce,
    description:
      ' full-stack ecommerce application built with Node.js, Express, React, and PostgreSQL featuring product management and server-rendered pages.',
    github: 'https://github.com/Yousuf-yk/pluto.git',
    live: '#',
    techStack: [
      { name: 'React', src: '/svg/React.svg' },
      { name: 'Node.js', src: '/svg/Node.js.svg' },
      { name: 'Express', src: '/svg/Express.svg' },
      { name: 'PostgreSQL', src: '/svg/PostgresSQL.svg' },
    ],
    status: 'Pending',
  },
  {
    id: 2,
    name: 'textOgram',
    image: textogram,
    description:
      'online texting app that allows users to send and receive messages in real-time, with a focus on simplicity and ease of use.',
    github: 'https://github.com/Yousuf-yk/textOgram.git',
    live: '#',
    techStack: [
      { name: 'React', src: '/svg/React.svg' },
      { name: 'Node.js', src: '/svg/Node.js.svg' },
      { name: 'Express', src: '/svg/Express.svg' },
      { name: 'PostgreSQL', src: '/svg/PostgresSQL.svg' },
      
    ],
    status: 'Completed',
  },
  {
    id: 3,
    name: 'weatherApp',
    image: weatherApp,
    description:
      'online weather app that provides real-time weather updates and forecasts, with a focus on simplicity and ease of use.',
    github: 'https://github.com/Yousuf-yk/weather-app.git',
    live: '#',
    techStack: [
      { name: 'React', src: '/svg/React.svg' },
      { name: 'Node.js', src: '/svg/Node.js.svg' },
      
      
    ],
    status: 'Completed',
  },
];

export const statusColors = {
  Completed: 'bg-green-100 text-green-700 border-green-200',
  Pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
};


