import textogram from '../assets/photos/textogram.png';
import weatherApp from '../assets/photos/weatherApp.png';
import plutoVideo from '../assets/videos/pluto.mp4';

export const projects = [
  {
    id: 1,
    name: 'Pluto Ecommerce',
    video: plutoVideo,
    description:
      ' full-stack ecommerce application built with Node.js, Express, React, and PostgreSQL featuring product management and server-rendered pages.',
    github: 'https://github.com/Yousuf-yk/pluto.git',
    live: '#',
    techStack: [
      { name: 'React', src: '/svg/React.svg' },
      { name: 'Node.js', src: '/svg/Node.js.svg' },
      { name: 'Express', src: '/svg/Express.svg', darkIcon: true },
      { name: 'PostgreSQL', src: '/svg/PostgresSQL.svg' },
    ],
    status: 'Pending',
  },
  {
    id: 2,
    name: 'textOgram',
    video: textogram,
    description:
      'online texting app that allows users to send and receive messages in real-time, with a focus on simplicity and ease of use.',
    github: 'https://github.com/Yousuf-yk/textOgram.git',
    live: '#',
    techStack: [
      { name: 'React', src: '/svg/React.svg' },
      { name: 'Node.js', src: '/svg/Node.js.svg' },
      { name: 'Express', src: '/svg/Express.svg', darkIcon: true },
      { name: 'PostgreSQL', src: '/svg/PostgresSQL.svg' },
      
    ],
    status: 'Completed',
  },
  {
    id: 3,
    name: 'weatherApp',
    video: weatherApp,
    description:
      'online weather app that provides real-time weather updates and forecasts, with a focus on simplicity and ease of use.',
    github: 'https://github.com/Yousuf-yk/weather-app.git',
    live: '#',
    techStack: [
      { name: 'React', src: '/svg/React.svg' },
      { name: 'Node.js', src: '/svg/Node.js.svg' },
    { name: "Express", shortName: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", darkIcon: true },
      
    ],
    status: 'Completed',
  },
];

export const statusColors = {
  Completed:
    'border-2 border-green-600 bg-green-50 text-green-700',
  Pending:
    'border-2 border-yellow-500 bg-yellow-50 text-yellow-700',
};
