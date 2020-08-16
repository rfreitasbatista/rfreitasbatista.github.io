import SolDivinoBW from '../images/projects/solDivinoBW.jpeg';
import SolDivinoCOLOR from '../images/projects/solDivinoColor.jpeg';
import CovidFollowerBW from '../images/projects/covidFollowerBW.jpeg';
import CovidFollowerCOLOR from '../images/projects/covidFollowerColor.jpeg';
import RBFLIXCOLOR from '../images/projects/rbFlixColor.jpg';
import RQMCOLOR from '../images/projects/RQMColored.png';

export const text = [
  '<Agronomist />',
  '<Full Stack Development Student />',
  '<Front End Development Student />',
  'Welcome to my portfolio!',
];

export const cursor = {
  show: true,
  blink: true,
  element: ' ',
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
};

export const cursor2 = {
  show: true,
  blink: true,
  element: ' ',
  hideWhenDone: true,
  hideWhenDoneDelay: 100,
};

export const cursor3 = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: false,
  hideWhenDoneDelay: 100,
};

export const projetos = [
  {
    id: 1,
    name: 'Sol Divino Comercial Agrícola',
    colored: SolDivinoCOLOR,
    bw: SolDivinoBW,
    link: 'https://www.soldivinolegumes.com.br',
    description:
      'Developed to a wholesaler company from a pre-formatted CSS template extracted from free-css.com .',
    features: {
      html: true,
      css: true,
      bootstrap: true,
      javascript: true,
      jquery: true,
      php: true,
      fontawesome: true,
    },
    underConstruction: false,
  },
  {
    id: 2,
    name: 'Covid-19 Follower',
    colored: CovidFollowerCOLOR,
    bw: CovidFollowerBW,
    link: 'https://covidfollower.github.io/',
    description:
      'Website developed to show up live details about each country COVID-19 situation, using only JS.',
    features: {
      html: true,
      css: true,
      bootstrap: true,
      javascript: true,
      appexchartbar: true,
      appexchartline: true,
      fontawesome: true,
      github: true,
    },
    underConstruction: false,
  },
  {
    id: 3,
    name: 'RBFLIX',
    colored: RBFLIXCOLOR,
    bw: null,
    link: 'https://covidfollower.github.io/',
    description:
      "Movie platform developed during the Alura's Bootcamp called 'Imersão React'.",
    features: {
      html: true,
      css: true,
      bootstrap: false,
      javascript: true,
      appexchartbar: false,
      appexchartline: false,
      fontawesome: false,
      reactjs: true,
      styledComponents: true,
      jsonServer: true,
      github: true,
    },
    underC: true,
  },
  {
    id: 4,
    name: 'Random Quotes Machine',
    colored: RQMCOLOR,
    bw: null,
    link: '/Quotes',
    description:
      'Random Quotes Machine developed during FreeCodeCamp Front End Libraries Certification.',
    features: {
      html: true,
      css: true,
      bootstrap: true,
      javascript: true,
      appexchartbar: false,
      appexchartline: false,
      fontawesome: true,
      reactjs: true,
      styledComponents: false,
      jsonServer: false,
      github: true,
    },
    underC: false,
  },
];

export const experiences = {
  academic: {
    national: {
      courses: [
        {
          topic: 'FullStack Development',
          specification: 'HTML5/CSS3/Tests/ReactJS/Redux/NodeJS',
          startYear: '2020',
          endYear: '2021',
          institution: 'Trybe',
        },
        {
          topic: 'Agronomy',
          specification: 'Greenhouses',
          startYear: '2010',
          endYear: '2015',
          institution:
            "ESALQ - Escola Superior de Agricultura 'Luiz de Queiroz'",
        },
      ],
    },
    international: {
      courses: [
        {
          topic: 'International Horticulture Management',
          specification: 'Greenhouses',
          startYear: '2013',
          endYear: '2014',
          institution: 'Aeres University of Applied Sciences Dronten',
        },
      ],
    },
  },
  certifications: [
    {
      topic: 'Javascript Algorithms and Data Structures',
      credentialWebsite:
        'https://www.freecodecamp.org/certification/rfreitasbatista/javascript-algorithms-and-data-structures',
      dataOfExpedition: 'July 20, 2020',
      institution: 'freeCodeCamp',
    },
    {
      topic: 'HTML Avançado',
      credentialWebsite: 'https://www.ev.org.br/',
      credentialCode: '35732241-AA2B-48C4-89A9-D49A53972A83',
      dataOfExpedition: 'May 07, 2020',
      institution: 'Fundação Bradesco',
    },
    {
      topic: 'HTML Básico',
      credentialWebsite: 'https://www.ev.org.br/',
      credentialCode: '2C0A49DC-86E2-4642-8493-0A24104AC9D2',
      dataOfExpedition: 'May 07, 2020',
      institution: 'Fundação Bradesco',
    },
    {
      topic: 'Responsive Web Design',
      credentialWebsite:
        'https://www.freecodecamp.org/certification/rfreitasbatista/responsive-web-design',
      dataOfExpedition: 'May 30, 2020',
      institution: 'freeCodeCamp',
    },
  ],
  work: {
    internships: [
      {
        company: 'Texas A&M University',
        position: 'Research Internship',
        location: 'College Station - Texas - United States of America',
        period: {
          from: 'March, 2014',
          to: 'May, 2014',
        },
      },
      {
        company: 'GEPOL - Grupo de Estudos e Práticas em Olericultura',
        position: 'Coordinator',
        location: 'Piracicaba, São Paulo - SP - Brazil',
        period: {
          from: 'July, 2012',
          to: 'February, 2013',
        },
      },
      {
        company: 'GEPOL - Grupo de Estudos e Práticas em Olericultura',
        position: 'Research Internship',
        location: 'Piracicaba - SP - Brazil',
        period: {
          from: 'February, 2011',
          to: 'July, 2012',
        },
      },
    ],
    fulltime: [
      {
        company: 'Canelas Alimentos',
        position: 'Sales Lead Manager',
        location: 'São Paulo - SP - Brazil',
        period: {
          from: 'August, 2014',
          to: 'March, 2020',
        },
      },
    ],
  },
};
