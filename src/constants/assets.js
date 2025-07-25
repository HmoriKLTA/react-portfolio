// Socials
import github from "../assets/socials/github-original.svg";
import linkedin from "../assets/socials/linkedin-original.svg";

// Tech Logos
import tailwindcssLogo from '../assets/logos/tailwindcss.svg';
import css3Logo from '../assets/logos/css3.svg';
import html5Logo from '../assets/logos/html5.svg';
import javascriptLogo from '../assets/logos/javascript.svg';
import railsPlainLogo from '../assets/logos/rails-plain.svg';
import rubyOriginalLogo from '../assets/logos/ruby-original.svg';
import bootstrapOriginalLogo from '../assets/logos/bootstrap-original.svg';
import threejsLogo from '../assets/logos/threejs-original.svg';
import pythonLogo from '../assets/logos/python-original.svg';
import vuejsLogo from '../assets/logos/vuejs-original.svg';
import typescriptLogo from '../assets/logos/typescript-original.svg';
import phpLogo from '../assets/logos/php-original.svg';

// Ambition/Goal Logos (from About.jsx)
import backendLogo from '../assets/logos/backend.png';
import uxLogo from '../assets/logos/ux.png';

// Project Images
import wikinimousImg from '../assets/project-img/Wikinimous.png';
import taskManagerImg from '../assets/project-img/task-manager.png';
import stupidCoachingImg from '../assets/project-img/StupidCoachingApp.png';
import landingPageImg from '../assets/project-img/Australia-landing-page.png';
import profileImg from '../assets/project-img/TetsuNakamuraPhoto.png';
import yelpMvpImg from '../assets/project-img/Yelp-mvp.png';
import pawkitImg from '../assets/project-img/pawkit.png';

// Project Logos
import homieLogo from '../assets/project-logo/android-icon-192x192.png';
import pawkitLogo from '../assets/project-logo/pawkit-orange-logo.png';

// UI elements & other images
import arrowRight from '../assets/arrow-right.svg';
import arrowUp from '../assets/logos/arrow-up.svg';
import closeLogo from '../assets/logos/close.svg';
import menuLogo from '../assets/menu.svg';
import copyDone from '../assets/logos/copy-done.svg';
import copy from '../assets/logos/copy.svg';
import codingPov from '../assets/images/coding-pov.png';

// --- EXPORTS ---

export const socialIcons = {
    github,
    linkedin
};

export const techLogos = {
    tailwindcss: tailwindcssLogo,
    css3: css3Logo,
    html5: html5Logo,
    javascript: javascriptLogo,
    rails: railsPlainLogo,
    ruby: rubyOriginalLogo,
    bootstrap: bootstrapOriginalLogo,
    threejs: threejsLogo,
    python: pythonLogo,
    vuejs: vuejsLogo,
    typescript: typescriptLogo,
    php: phpLogo,
};

export const ambitionLogos = {
    backend: backendLogo,
    ux: uxLogo,
};

export const projectImages = {
    wikinimous: wikinimousImg,
    taskManager: taskManagerImg,
    stupidCoaching: stupidCoachingImg,
    landingPage: landingPageImg,
    profile: profileImg,
    yelpMvp: yelpMvpImg,
    pawkit: pawkitImg,
    homie: null // Homie has no image
};

export const projectLogos = {
    homie: homieLogo,
    pawkit: pawkitLogo
};

export const uiIcons = {
    arrowRight,
    arrowUp,
    close: closeLogo,
    menu: menuLogo,
    copy,
    copyDone,
    github, // re-exporting for convenience
};

export const otherImages = {
    codingPov,
};
