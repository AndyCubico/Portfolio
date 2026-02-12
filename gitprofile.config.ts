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
          title: 'Suits',
          description: 'Suits is Quokka Games Studio’s submission for the 8th Gran CITM Game Jam, where it won the Best Game Award. It is a 2D puzzle-platformer where you transform your character into different shapes to overcome challenges. Solve puzzles in a world where sacrifice is the key to progress. Explore a surreal cube world where each face reveals hidden secrets, new challenges, and shifting perspectives.',
          imageUrl:
            'https://img.itch.zone/aW1nLzE5NjEzOTU1LnBuZw==/original/nDW6VD.png',
          link: 'https://cubicoblanco.itch.io/suits',
        },
        {
          title: 'Dreamward',
          description:
            'Dreamward is the submission for the 7th Gran CITM Game Jam of Quokka Games Studio. You play as the Guardian of Dreams, facing peoples deepest fears in a challenging boss rush inspired by Souls-like games. It features 3 different bosses and the Nightmare Mode to offer an even more challenging experience. ',
          imageUrl:
            'https://img.itch.zone/aW1nLzE0ODkzOTk0LnBuZw==/347x500/VeyWPu.png',
          link: 'https://cubicoblanco.itch.io/dreamward',
        },
        {
          title: 'Alien Extraction',
          description:
            'Alien Extraction is a DIABLO-LIKE game themed in the ALIEN universe. The action focuses on multi-level raids, where players will have to explore, fight against saga enemies, and manage their resources carefully to survive and not die in their attempt to complete the mission and discover the truth.',
          imageUrl:
            'https://github.com/Clapcom-Studios/Alien-Extraction/assets/99948892/b2812924-745e-47c0-88cd-e15a675f1a38',
          link: 'https://clapcom-studios.github.io/Website/',
        },
        {
          title: 'Pinky Engine',
          description:
            'Pinky Engine is a game engine developed from scratch, as part of a college assignment from CITM (UPC) University, Terrassa, for the 3D engines subject during 3rd year of my Game Design and Game Development degree. It features a GameObject & Component System, Resource Manager, Custom File Format,  Scene Serialization, Time management, Camera culling and a High-level System of User Interface',
          imageUrl:
            'https://github.com/lSara-MM/Pinky_Engine/assets/93879867/3dbef10b-5e6b-4caf-b42c-89cf877f54ad',
          link: 'https://lsara-mm.github.io/Pinky_Engine/',
        },
        {
          title: 'Cartalà',
          description:
            'Cartalà is a submission for the Premis Ludi 2024 event to create a video game prototype that highlights the richness and utility of the Catalan language in a fun and engaging way. It is a card-based, rogue-like game where you play with the syntax.',
          imageUrl:
            'https://img.itch.zone/aW1nLzE4Mzg2Njg2LnBuZw==/315x250%23c/W76ZJt.png',
          link: 'https://cubicoblanco.itch.io/cartala',
        },
        {
          title: 'Elevángel',
          description:
            'Submission for the Indie Spain Jam 2022. Being in a basement elevator is so lonely. Especially since your dad was retired... you saw him go to the upper floors, but you cant get there! Suddenly a weird-looking mechanic called Ángel walks into you, adjusts a few screws, and tells you are ready for real grown-up elevator work!',
          imageUrl:
            'https://img.itch.zone/aW1hZ2UvMTcxOTgzMC8xMDEzNjUwNi5wbmc=/original/As1%2BcM.png',
          link: 'https://kotzi.itch.io/elevngel',
        },
        {
          title: 'Chimeras',
          description:
            'Chimeras is a tabletop card game where you play as a god. Yes, you heard that right, a literal god. Using cards that represent various body parts from animals and mythical creatures, you’ll craft monstrous hybrids, combining the strengths of each to forge the ultimate beast.',
          imageUrl:
            'https://github.com/AndyCubico/Portfolio/blob/main/src/assets/Sell%20Sheet.png?raw=true',
          link: 'https://drive.google.com/file/d/16G1s7KoO0Qsz4i3lv1ohklv_gZfOsvMv/view?usp=sharing',
        },
        {
          title: 'Pinky Adventures',
          description:
            'Join Pinkys new journey across the world to collect the Rosyte gemstones! Simple platformer for the first assignment of Game Development developed with SDL.',
          imageUrl:
            'https://raw.githubusercontent.com/lSara-MM/Pinky-Adventures/refs/heads/main/Pinky_Adventures/Output/Assets/Maps/intro_bg.png',
          link: 'https://github.com/lSara-MM/Pinky-Adventures',
        },
        {
          title: 'Twisted Tent',
          description:
            'Twisted Tent is a dungeon-crawling RPG set in a Freak Show in the Soviet Union. It features a turn-based tactical combat, a dark and mysterious narrative, and a unique way of upgrading your character (you will gather materials and create your equipment!).',
          imageUrl:
            'https://raw.githubusercontent.com/lSara-MM/Project-II-RPG/refs/heads/General/Output/Assets/Textures/cinematica_prota.png',
          link: 'https://lsara-mm.github.io/Project-II-RPG/',
        },
        {
          title: 'Tetris 1988',
          description:
            'My first big project: a tribute to the Tetris created by Atari in 1988. Fully developed with SDL.',
          imageUrl:
            'https://raw.githubusercontent.com/lSara-MM/project1-tetris/main/SS/Design/round1.png',
          link: 'https://lsara-mm.github.io/project1-tetris/',
        },
      ],
    },
    github: {
      display: false, // Display GitHub projects?
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
    twitter: '',
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
      '', // Empty fileUrl will hide the `Download Resume` button.
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
      to: '2025',
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
    defaultTheme: 'dracula',

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
