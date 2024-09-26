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
          title: 'Alien Extraction',
          description:
            'Alien Extraction is a DIABLO-LIKE game themed in the ALIEN universe. Players will take on the role of an elite soldier sent to an alien-infested planet to clear it of all hostile forms. The action focuses on multi-level raids, where players will have to explore, fight against saga enemies, manage their resources carefully to survive and not die in their attempt to complete the mission and discover the truth.',
          imageUrl:
            'https://github.com/Clapcom-Studios/Alien-Extraction/assets/99948892/b2812924-745e-47c0-88cd-e15a675f1a38',
          link: 'https://clapcom-studios.github.io/Website/',
        },
        {
          title: 'Pinky Engine',
          description:
            'Pinky Engine is a Game Engine made by Andreu Nosàs Soler and Sara Qiao Martínez Mauri, as part of a college assignment from CITM (UPC) University, Terrassa, for the 3D engines subject during 3rd year of Game Design and Game Development degree. It features a GameObject & Component System, Resource Manager, Custom File Format,  Scene Serialization & Time management, Camera culling and frustum and a High-level System of User Interface',
          imageUrl:
            'https://github.com/lSara-MM/Pinky_Engine/assets/93879867/3dbef10b-5e6b-4caf-b42c-89cf877f54ad',
          link: 'https://lsara-mm.github.io/Pinky_Engine/',
        },
        {
          title: 'Dreamward',
          description:
            'Dreamward is the submission for the 7th Gran CITM Game Jam of Quokka Games Studio, in which I lead the team. You play as the Guardian of Dreams, facing peoples deepest fears in a challenging boss rush inspired by Souls-like games. It features 3 different bosses and the Nightmare Mode to offer an even a more challenging experience. ',
          imageUrl:
            'https://img.itch.zone/aW1nLzE0ODkzOTk0LnBuZw==/347x500/VeyWPu.png',
          link: 'https://cubicoblanco.itch.io/dreamward',
        },
        {
          title: 'Elevángel',
          description:
            'Submission for Indie Spain Jam. Being a basement elevator is so lonely. Especially since your dad was retired... you saw him go to the upper floors, but you cant get there! Suddenly a weird-looking mechanic called Ángel walks into you, adjusts a few screws, and tells you are ready for real grown-up elevator work! And he may even be able to reunite you with your father... but not until you have finished carrying passengers to their destinations!',
          imageUrl:
            'https://img.itch.zone/aW1hZ2UvMTcxOTgzMC8xMDEzNjUwNi5wbmc=/original/As1%2BcM.png',
          link: 'https://kotzi.itch.io/elevngel',
        },
        {
          title: 'Five Nights at Pedros',
          description:
            'Five Nights at Pedros is a virtual reality horror puzzle game based on the Five Nights at Freddys franchise by Scott Cawthon. The game takes place in a closed room with several key points that must be monitored or interacted with to stop the animatronics from attacking you and survive the night.',
          imageUrl:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/93879867/296611446-3dbef10b-5e6b-4caf-b42c-89cf877f54ad.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240926%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240926T170110Z&X-Amz-Expires=300&X-Amz-Signature=2fa98993fb704e5eb8bc340344a7e07c0b534cd1d4b1e0295dd931f459737c1e&X-Amz-SignedHeaders=host',
          link: 'https://github.com/TheimerTR/Five-Nights-At-Pedro-s',
        },
        {
          title: 'Twisted Tent',
          description:
            'Twisted Tent is a dungeon crawling RPG set in a Freak Show in the Soviet Union just at the beginning of the Cold War, where you are trying to find an escape from the crude reality that surrounds you, until one day, a mysterious circus comes to your city. Without thinking twice, you enter there to try luck. It features a turn based tactical combat, a dark and mysterious narrative, a unique way of upgrading your character (you will gather materials and create your own equipment!).',
          imageUrl:
            'https://raw.githubusercontent.com/lSara-MM/Project-II-RPG/refs/heads/main/Output/Assets/Textures/intro_bg.png',
          link: 'https://lsara-mm.github.io/Project-II-RPG/',
        },
        {
          title: 'Pinky Adventures',
          description:
            'Join Pinkys new journey across the worlds to collect the Rosyte gemstones! Simple platformer for the first assignment of Game Development developed with SDL.',
          imageUrl:
            'https://raw.githubusercontent.com/lSara-MM/Pinky-Adventures/refs/heads/main/Pinky_Adventures/Output/Assets/Maps/intro_bg.png',
          link: 'https://github.com/lSara-MM/Pinky-Adventures',
        },
        {
          title: 'Worms Quokka',
          description:
            'Worms-like game with a physics engine made in its entirety by Quokka Games Studio. Two teams shoot different kinds of projectiles in order to kill their opponents, winning the team with the last "worm" standing.',
          imageUrl:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/93879867/296611446-3dbef10b-5e6b-4caf-b42c-89cf877f54ad.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240926%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240926T170110Z&X-Amz-Expires=300&X-Amz-Signature=2fa98993fb704e5eb8bc340344a7e07c0b534cd1d4b1e0295dd931f459737c1e&X-Amz-SignedHeaders=host',
          link: 'https://github.com/lSara-MM/WormsQuokka',
        },
        {
          title: 'Magic The Gathering Mobile App',
          description:
            'Mobile application developed with Flutter. It allows you to browse several Magic the Gathering cards from different collections using the Scryfall API, save them in a favourites tab, and create decks with them',
          imageUrl:
            'https://raw.githubusercontent.com/Icefenix7198/CITM-API-MTG_Moviles/refs/heads/main/designs/StartWindow.png',
          link: 'https://github.com/Icefenix7198/CITM-API-MTG_Moviles?tab=readme-ov-file/',
        },
        {
          title: 'Tetris 1988',
          description:
            'My first big project: a tribute to the Tetris created by Atari in 1988. Fully developed with SDL.',
          imageUrl:
            'https://camo.githubusercontent.com/4f7efadbc3eec7555d412fd7603f4e486ce135ca78da135abe0021dece50b6fd/68747470733a2f2f69302e77702e636f6d2f72656c697665616e64706c61792e636f6d2f77702d636f6e74656e742f75706c6f6164732f7465747269732d6172636164652d706f72746164612e6a70673f6669743d31313637253243373233',
          link: 'https://lsara-mm.github.io/project1-tetris/',
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
