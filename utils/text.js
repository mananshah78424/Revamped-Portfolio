export const companyInfo = {
  lobBlog: {
    name: 'Lob',
    location: 'San Francisco, CA',
    role: 'Software Engineer',
    //replace hyphen with en dash
    duration: 'October 2024 – Current', // Copy-paste this en dash

    description:
      'Lob automates and personalizes direct mail at any scale, bringing the speed and features you expect from your digital channels to direct mail for the first time. From creation to carbon neutral printing and delivery, Lob makes it easy to integrate, send, and measure every piece. Over 12,000 businesses trust Lob to transform their direct mail.',
    team: 'Partner Experience',
    website: 'https://lob.com',
    mission:
      'Lob was looking for a software engineer to develop and maintain both backend and frontend applications driving the product.',
    workDone: [
      "Revamped APIs for Lob's promotion portal using Hapi.js, streamlining the USPS promotional discount enrollment process that drove 50M+ mail pieces and served 25% of Lob's customer base.",
      'Designed the promotions portal using Vue.js, TypeScript, and the composition API.',
      'Conducted unit and end-to-end testing using Jest and Cypress for every feature introduced.',
      'Monitored logs, dashboards, and metrics using Datadog to improve error detection and manage high-traffic periods.',
    ],
    mainImage: '/images/work/lob/lob.png',
    skills: {
      title: 'Technologies Used',
      frontend: [
        {
          name: 'JavaScript',
          src: '/images/work/skills/javascript.gif',
        },
        {
          name: 'React',
          src: '/images/work/skills/react.gif',
        },
        {
          name: 'TypeScript',
          src: '/images/work/skills/typescript.png',
        },
        {
          name: 'Vue.js',
          src: '/images/work/skills/vue.png',
        },
      ],
      backend: [
        {
          name: 'Node.js',
          src: '/images/work/skills/nodejs.png',
        },
        {
          name: 'Hapi.js',
          src: '/images/work/skills/hapi.png',
        },
      ],
      database: [
        {
          name: 'PostgreSQL',
          src: '/images/work/skills/postgresql.png',
        },
        {
          name: 'Redis',
          src: '/images/work/skills/redis.png',
        },
        {
          name: 'Knex',
          src: '/images/work/skills/knex.png',
        },
      ],
      other: [
        {
          name: 'Datadog',
          src: '/images/work/skills/datadog-white.png',
        },
        {
          name: 'Jest',
          src: '/images/work/skills/jest.png',
        },
        {
          name: 'Cypress',
          src: '/images/work/skills/cypress.png',
        },
      ],
    },
  },
  zebraBlog: {
    name: 'Zebra Technologies',
    location: 'San Francisco, CA',
    role: 'Software Engineer',
    internRole: 'Software Engineering Intern',
    //replace hyphen with en dash
    duration: 'March 2023 - October 2024',
    description:
      'Zebra helps organizations monitor, anticipate, and accelerate workflows by empowering their frontline and ensuring that everyone and everything is visible, connected and fully optimized. With an ecosystem of 10,000 partners across more than 100 countries, Zebra’s customers include over 80% of the Fortune 500. ',
    team: 'Automation',
    website: 'https://zebra.com',
    mission:
      'Zebra was looking for a Software Engineer who could design, develop, and maintain innovative Generative AI solutions within their applications.',
    workDone: [
      ' Leveraged GPT-3.5-turbo and Gemini-1.5-pro to develop a Large Language Model (LLM) chatbot, processing over 10,000 records of customer data from Google Cloud Platform (GCP) and Postgre. (Article Link)',
      'Led a team of 3 in designing the frontend UI/UX for the chatbot using Node.js, JavaScript, and Python, reducing customer support response time by 96%.',
      'Configured and automated the CI/CD pipeline for the application using GCP Cloud Run, Docker, and GitHub.',
      'Mentored an intern in various aspects of Git, Agile, and Software Development. ',
    ],
    mainImage: '/images/work/zebra/zebra.png',
    keyLearnings: {
      title: 'My Learnings',
      description: 'Reflection & Takeaways',
    },
    featuredArticles: {
      medium: {
        title: 'Medium',
        link: 'https://medium.com/@manan78424/transforming-text-to-sql-harnessing-generative-ai-and-rag-for-precision-querying-bdd73debf274',
        src: '/images/work/zebra/medium.png',
      },
    },
    skills: {
      title: 'Technologies Used',

      frontend: [
        {
          name: 'React',
          src: '/images/work/skills/react.gif',
        },
        {
          name: 'JavaScript',
          src: '/images/work/skills/javascript.gif',
        },
      ],
      backend: [
        {
          name: 'Python',
          src: '/images/work/skills/python.gif',
        },
        {
          name: 'Node.js',
          src: '/images/work/skills/nodejs.png',
        },
        {
          name: 'Google Cloud Platform',
          src: '/images/work/skills/gcp.png',
        },
        {
          name: 'Docker',
          src: '/images/work/skills/docker.png',
        },
      ],
      database: [
        {
          name: 'PostgreSQL',
          src: '/images/work/skills/postgresql.png',
        },
        {
          name: 'Cloud SQL',
          src: '/images/work/skills/cloud_sql.png',
        },
      ],
      other: [
        {
          name: 'Large Language Model',
          src: '/images/work/skills/openAI3.png',
        },
        {
          name: 'CI/CD',
          src: '/images/work/skills/cicd.gif',
        },
        {
          name: 'Cloud Run',
          src: '/images/work/skills/cloud_run.png',
        },
      ],
    },
  },
  centeneBlog: {
    name: 'Centene',
    location: 'San Francisco, CA',
    role: 'Machine Learning Intern',
    //replace hyphen with en dash
    duration: 'June 2023 - September 2023',
    description:
      'Centene Corporation is a leading healthcare enterprise committed to helping people live healthier lives. Centene offers affordable and high-quality products to more than 1 in 15 individuals across the nation, including Medicaid and Medicare members.',
    team: 'Machine Learning Intern',
    website: 'https://www.centene.com/',
    mission:
      'Centene was looking for a Machine Learning Intern to develop and maintain machine learning models to improve the efficiency of their healthcare services.',
    workDone: [
      '      Designed a Named-Entity Recognition (NER) model to extract medical information using SpaCy and Python from unstructured medical text, resulting in savings worth $25,000,000.',
      'Built a real-time ETL pipeline for aggregating unstructured data from Databricks to Postgre from over 10 sources.',
      'Dockerized the model, making it available to 8 different internal teams.',
    ],
    mainImage: '/images/work/centene/centene.png',
    skills: {
      title: 'Technologies Used',
      machine_learning: [
        {
          name: 'Python',
          src: '/images/work/skills/python.gif',
        },
        {
          name: 'SpaCy',
          src: '/images/work/skills/spacy.png',
        },
        {
          name: 'Databricks',
          src: '/images/work/skills/databricks.png',
        },
      ],
      data_processing: [
        {
          name: 'ETL',
          src: '/images/work/skills/etl.png',
        },
        {
          name: 'Docker',
          src: '/images/work/skills/docker.png',
        },
      ],
      database: [
        {
          name: 'PostgreSQL',
          src: '/images/work/skills/postgresql.png',
        },
      ],
    },
  },
};

export const projectsPageInfo = {
  title: 'Academic Projects',
  description: 'Some of my cool projects - Click on the project to know more!',
  moreProjects: 'For more projects, check out my ',
};

export const projectsInfo = {
  Netflix_Clone: {
    name: 'Netflix Clone',
    description:
      'A Netflix clone built using React, Firebase, and the TMDb API. Users can browse movies and TV shows, view details, and watch trailers. The app features authentication, search functionality, and responsive design.',
    technologies: ['React', 'Firebase', 'TMDb API'],
    src: 'https://netflixclonevideo.s3.us-west-2.amazonaws.com/NetflixClone.mp4',
    demoLink: 'https://manansnetlifyclone.netlify.app/',
    githubLink: '',
  },
  Gitter: {
    name: 'Gitter',
    description:
      'A chat application built using React, Node.js, and Socket.io. Users can create chat rooms, send messages, and view online users. The app features real-time updates, user authentication, and responsive design.',
    technologies: ['React', 'Node.js', 'Socket.io'],
    src: '/images/projects/gitter2.jpg',
    demoLink: '',
    githubLink: 'https://github.com/mananshah78424/Gitter/tree/main',
  },
  SportingSphere: {
    name: 'SportingSphere',
    description:
      'A chat application built using React, Node.js, and Socket.io. Users can create chat rooms, send messages, and view online users. The app features real-time updates, user authentication, and responsive design.',
    technologies: ['React', 'Node.js', 'Socket.io'],
    src: 'images/sportingsphere.png',
    demoLink: '',
    githubLink: 'https://github.com/mananshah78424/SportingSphere',
  },
  InstaS3Verse: {
    name: 'InstaS3Verse',
    description:
      'My personal portfolio website built using Next.js and Tailwind CSS. The site features a responsive design, smooth animations, and interactive components. Users can view my projects, work experience, and skills.',
    technologies: ['Next.js', 'Tailwind CSS'],
    src: 'https://www.youtube.com/embed/rtA9n8ot7jA?autoplay=1&mute=1',
    githubLink: 'https://github.com/mananshah78424/InstaS3Verse',
  },
};

export const aboutMe = {
  intro: 'Manan Shah,',
  role: 'Software Engineer',
};

export const navbarInfo = {
  Home: '/',
  Projects: '/projects',
  LinkedIn: 'https://www.linkedin.com/in/mananshah21/',
  Email: 'mailto:',
};

export const aboutMeImages = [
  {
    src: '/images/1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/images/2.jpg',
    alt: 'Image 2',
  },
  {
    src: '/images/3.jpg',
    alt: 'Image 3',
  },
];

export const projectImages = [
  {
    src: '/images/netflix-clone.png',
    alt: 'Netflix Clone',
  },
  {
    src: '/images/gitter.png',
    alt: 'Gitter',
  },
  {
    src: '/images/portfolio.png',
    alt: 'Portfolio',
  },
];

export const carouselText = {
  title: 'Manan Shah',
  username: '@man_annnn',
  likes: '1,234 likes',
  caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  profilePic: '/images/about/manan1.jpeg',
};

export const carouselImages = [
  {
    src: '/images/about/manan1.jpeg',
    alt: 'Jake and Finn 1',
  },
  {
    src: '/images/about/manan2.jpeg',
    alt: 'Jake and Finn 2',
  },
  {
    src: '/images/about/manan3.jpeg',
    alt: 'Jake and Finn 3',
  },
  {
    src: '/images/about/manan4.JPG',
    alt: 'Jake and Finn 4',
  },
  {
    src: '/images/about/manan5.jpeg',
    alt: 'Jake and Finn 5',
  },
  {
    src: '/images/about/manan6.jpeg',
    alt: 'Jake and Finn 6',
  },
  {
    src: '/images/about/manan7.jpeg',
    alt: 'Jake and Finn 7',
  },
];

export const workExperienceInfo = {
  resumeLink:
    'https://drive.google.com/file/d/1ilkK3Mxr1OJyK4mC_ejH7JI8S7OOPEPB/view?usp=drive_link',
  more_details_resume_text: 'More details can be found on my ',
  resume_text: 'resume',
  read_more_text: 'Read more about my work!',
  companies: [
    {
      name: 'Lob',
      role: 'Software Engineer',
      text: 'I am currently working as a Software Engineer at ',
      website: 'https://lob.com',
      logo: '/images/work/logos/lob_logo.jpeg',
    },
    {
      name: 'Zebra Technologies',
      role: 'Software Engineer',
      text: 'I worked as a Software Engineer at ',
      website: 'https://zebra.com',
      logo: '/images/work/logos/image.png',
    },
    {
      name: 'The University of California, Irvine',
      role: 'Masters',
      text: 'I completed my Masters at ',
      website: 'https://uci.edu',
      logo: '/images/work/logos/UCILogo.png',
    },
    {
      name: 'Centene',
      role: 'Machine Learning Intern',
      text: 'I interned as a Machine Learning Intern at ',
      website: 'https://www.centene.com/',
      logo: '/images/work/logos/centene_corporation_logo.jpeg',
    },
  ],
};

export const skillsInfo = {
  title: 'Skills',
  description: 'Here are some of the technologies I have worked with:',
};
