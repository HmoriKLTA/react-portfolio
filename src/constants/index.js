import github from "../assets/socials/github-original.svg";
import linkedin from "../assets/socials/linkedin-original.svg";
import tailwindcssLogo from '../assets/logos/tailwindcss.svg';
import css3Logo from '../assets/logos/css3.svg';
import html5Logo from '../assets/logos/html5.svg';
import javascriptLogo from '../assets/logos/javascript.svg';
import railsPlainLogo from '../assets/logos/rails-plain.svg';
import rubyOriginalLogo from '../assets/logos/ruby-original.svg';
import bootstrapOriginalLogo from '../assets/logos/bootstrap-original.svg';
import wikinimousImg from '../assets/project-img/Wikinimous.png';
import taskManagerImg from '../assets/project-img/task-manager.png';
import pawkitImg from '../assets/project-img/pawkit.png';
import placeholderImg from '../assets/project-img/placeholder.png'
import stupidCoachingAppImg from '../assets/project-img/StupidCoachingApp.png'
import landingPageImg from '../assets/project-img/Australia-landing-page.png'
import profileImg from '../assets/project-img/TetsuNakamuraPhoto.png'
import yelpMvpImg from '../assets/project-img/Yelp-mvp.png'
import pawkitLogoImg from '../assets/project-logo/pawkit-orange-logo.png'
import homieLogoImg from '../assets/project-logo/android-icon-192x192.png'
import placeholderImg from '../assets/project-img/placeholder.png'


export const myProjects = [
    {
      id: 1,
      title: "Wikinimous",
      description:
        "A Ruby on Rails application that allows users to create, edit, and delete articles, similar to a simplified version of Wikipedia",
      subDescription: [
        // 1. What tech stack was used to build.
        "Built using Ruby on Rails.",

      ],
      href: "",
      logo: "",
      code: 'https://github.com/HmoriKLTA/rails-wikinimous',
      image: wikinimousImg,
      tags: [
        {
          id: 1,
          name: "HTML",
          path: html5Logo,
        },
        {
          id: 2,
          name: "CSS",
          path: css3Logo,
        },
        {
          id: 3,
          name: "Bootstrap",
          path: bootstrapOriginalLogo,
        },
        {
          id: 4,
          name: "Ruby",
          path: rubyOriginalLogo,
        },
        {
          id: 5,
          name: "Ruby on Rails",
          path: railsPlainLogo,
        },
        {
          id: 6,
          name: "JavaScript",
          path: javascriptLogo,
        },
      ],
    },
    {
      id: 2,
      title: "Task Manager",
      description:
        "A simple task manager app made with Ruby on Rails that allows users to create, update and delete tasks.",
      subDescription: [
        "Built using HTML, CSS, Bootstrap & Ruby on Rails",

      ],
      href: "",
      logo: "",
      code: "https://github.com/HmoriKLTA/rails-task-manager",
      image: taskManagerImg,
      tags: [
        {
          id: 1,
          name: "HTML",
          path: html5Logo,
        },
        {
          id: 2,
          name: "CSS",
          path: css3Logo,
        },
        {
          id: 3,
          name: "Bootstrap",
          path: bootstrapOriginalLogo,
        },
        {
          id: 4,
          name: "Ruby",
          path: rubyOriginalLogo,
        },
        {
          id: 5,
          name: "Ruby on Rails",
          path: railsPlainLogo,
        },
        {
          id: 6,
          name: "JavaScript",
          path: javascriptLogo,
        },
      ],
    },
    {
      id: 3,
      title: "Stupid Coaching App",
      description:
        " Minimal Rails application with 2 pages. First page is a form with an input. Redirected to another page where they will see their question and the coach's answer.",
      subDescription: [

      ],
      href: "",
      logo: "",
      code: "https://github.com/HmoriKLTA/rails-stupid-coaching",
      image: stupidCoachingAppImg,
      tags: [
        {
          id: 1,
          name: "HTML",
          path: html5Logo,
        },
        {
          id: 2,
          name: "CSS",
          path: css3Logo,
        },
        {
          id: 3,
          name: "Bootstrap",
          path: bootstrapOriginalLogo,
        },
        {
          id: 4,
          name: "Ruby",
          path: rubyOriginalLogo,
        },
        {
          id: 5,
          name: "Ruby on Rails",
          path: railsPlainLogo,
        },
        {
          id: 6,
          name: "JavaScript",
          path: javascriptLogo,
        },
      ],
    },
    {
      id: 4,
      title: "Landing Page",
      description:
        "2nd Page created for the Le Wagon Web Development Bootcamp. It is a simple landing page that showcases the Australia iconic animals.",
      subDescription: [

      ],
      href: "https://hmoriklta.github.io/landing/",
      logo: "",
      code: "https://github.com/HmoriKLTA/landing",
      image: landingPageImg,
      tags: [
        {
          id: 1,
          name: "HTML",
          path: html5Logo,
        },
        {
          id: 2,
          name: "CSS",
          path: css3Logo,
        },
        {
          id: 3,
          name: "Bootstrap",
          path: bootstrapOriginalLogo,
        },
      ],
    },
    {
      id: 5,
      title: "Profile",
      description:
        "1st page I created for the Le Wagon Bootcamp. It is a simple profile page that showcases the life of Dr Tetsu Nakamura.",
      subDescription: [

      ],
      href: "https://hmoriklta.github.io/profile/",
      logo: "",
      code: "https://github.com/HmoriKLTA/profile",
      image: profileImg,
      tags: [
        {
          id: 1,
          name: "HTML",
          path: html5Logo,
        },
        {
          id: 2,
          name: "CSS",
          path: css3Logo,
        },
        {
          id: 3,
          name: "Bootstrap",
          path: bootstrapOriginalLogo,
        },
      ],
    },
    {
      id: 6,
      title: "Rails Yelp MVP",
      description:
        "Building a two-model Rails app with a restaurant and anonymous reviews.",
      subDescription: [

      ],
      href: "",
      logo: "",
      code: "https://github.com/HmoriKLTA/rails-yelp-mvp",
      image: yelpMvpImg,
      tags: [
        {
          id: 1,
          name: "HTML",
          path: html5Logo,
        },
        {
          id: 2,
          name: "CSS",
          path: css3Logo,
        },
        {
          id: 3,
          name: "Bootstrap",
          path: bootstrapOriginalLogo,
        },
        {
          id: 4,
          name: "Ruby",
          path: rubyOriginalLogo,
        },
        {
          id: 5,
          name: "Ruby on Rails",
          path: railsPlainLogo,
        },
        {
          id: 6,
          name: "JavaScript",
          path: javascriptLogo,
        },
      ],
    },
    {
      id: 7,
      title: "Homie",
      description:
        "Airbnb marketplace clone. Furniture Rental App that allows users to rent furniture online.",
      subDescription: [

      ],
      href: "https://furniture-rental-app-857715fcf8a3.herokuapp.com/furnitures",
      logo: homieLogoImg,
      code: "https://github.com/HmoriKLTA/furniture-rental-app",
      image: placeholderImg,
      tags: [
        {
          id: 1,
          name: "HTML",
          path: html5Logo,
        },
        {
          id: 2,
          name: "CSS",
          path: css3Logo,
        },
        {
          id: 3,
          name: "Bootstrap",
          path: bootstrapOriginalLogo,
        },
        {
          id: 4,
          name: "Ruby",
          path: rubyOriginalLogo,
        },
        {
          id: 5,
          name: "Ruby on Rails",
          path: railsPlainLogo,
        },
        {
          id: 6,
          name: "JavaScript",
          path: javascriptLogo,
        },
      ],
    },
    {
      id: 8,
      title: "Pawkit",
      description:
        "Pawkit is a full-stack web application designed to help pet owners manage and track their pets’ daily, weekly, and monthly care tasks in one organized place.",
      subDescription: [

      ],
      href: "https://pawkit-4f8eb10e4858.herokuapp.com/",
      logo: pawkitLogoImg,
      code: "https://github.com/HmoriKLTA/pawkit",
      image: pawkitImg,
      tags: [
        {
          id: 1,
          name: "HTML",
          path: html5Logo,
        },
        {
          id: 2,
          name: "CSS",
          path: css3Logo,
        },
        {
          id: 3,
          name: "Bootstrap",
          path: bootstrapOriginalLogo,
        },
        {
          id: 4,
          name: "Ruby",
          path: rubyOriginalLogo,
        },
        {
          id: 5,
          name: "Ruby on Rails",
          path: railsPlainLogo,
        },
        {
          id: 6,
          name: "JavaScript",
          path: javascriptLogo,
        },
      ],
    },
  ];

  export const mySocials = [
    {
      name: "Github",
      href: "https://github.com/HmoriKLTA",
      icon: github,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/hayao-mori",
      icon: linkedin,
    },

  ];
