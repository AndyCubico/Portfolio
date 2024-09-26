// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'andycubico', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Portfolio/',
  projects: {    
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Alien Extraction is a DIABLO-LIKE game themed in the ALIEN universe. Players will take on the role of an elite soldier sent to an alien-infested planet to clear it of all hostile forms. The action focuses on multi-level raids, where players will have to explore, fight against saga enemies, manage their resources carefully to survive and not die in their attempt to complete the mission and discover the truth.',
          imageUrl:
            'https://private-user-images.githubusercontent.com/99948892/338591152-b2812924-745e-47c0-88cd-e15a675f1a38.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjczNjc3NTYsIm5iZiI6MTcyNzM2NzQ1NiwicGF0aCI6Ii85OTk0ODg5Mi8zMzg1OTExNTItYjI4MTI5MjQtNzQ1ZS00N2MwLTg4Y2QtZTE1YTY3NWYxYTM4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTI2VDE2MTczNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIyOGI2NmUzOGRhOTMwZGUyMmY2YjQ3NGVkZTU3N2EwMjA0YmQyZDY2N2MzMzgzMGQxNDk5NGMwNzQ0YmFjMjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.2naZnzZAOjHjJdJb42PcdWWZ0p393es8434tbvqkGV4',
          link: 'https://clapcom-studios.github.io/Website/',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        sortBy: 'updated',
        // Properties for manually specifying projects
        projects: ['AndyCubico/CITM-Game-Jam-2024', 'AndyCubico/CITM_Fighters', 'AndyCubico/AI_Project', 
                   'AndyCubico/Formation_Motion', 'AndyCubico/Behaviour_Bricks', 'AndyCubico/RPG_Progression'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: {
    title: 'Portfolio of Andreu Nosàs',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'andreu-nosàs-soler',
    twitter: 'Cubico_Blanco',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://itch.io/profile/cubicoblanco',
    phone: '',
    email: 'andreunoso@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Unity',
    'C#',
    'C',
    'C++',
    'Python',
    'Flutter',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Trello',
    'Git',
    'Maya',
    '3DS Max',
    'Substance Painter',
    'Wwise',
    'Toon Boom Harmony',
  ],
  educations: [
     {
      institution: 'Centre de la Imatge i la Tecnologia Multimedia — CITM (UPC)',
      degree: 'Degree in Video Game Design and Development',
      from: '2021',
      to: 'Current',
    },
    {
      institution: 'Universitat Autònoma de Barcelona (UAB)',
      degree: 'Degree in Biochemistry (unfinished)',
      from: '2016',
      to: '2019',
    },
    {
      institution: 'IES Pere Calders',
      degree: 'Scientific Baccalaureate',
      from: '2014',
      to: '2016',
    }, 
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
