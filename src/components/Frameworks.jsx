import { OrbitingCircles } from "./OrbitingCircles"
import tailwindcssLogo from '../assets/logos/tailwindcss.svg';
import css3Logo from '../assets/logos/css3.svg';
import html5Logo from '../assets/logos/html5.svg';
import javascriptLogo from '../assets/logos/javascript.svg';
import railsPlainLogo from '../assets/logos/rails-plain.svg';
import rubyOriginalLogo from '../assets/logos/ruby-original.svg';
import bootstrapOriginalLogo from '../assets/logos/bootstrap-original.svg';

const skillLogos = {
    "tailwindcss": tailwindcssLogo,
    "css3": css3Logo,
    "html5": html5Logo,
    "javascript": javascriptLogo,
    "rails-plain": railsPlainLogo,
    "ruby-original": rubyOriginalLogo,
    "bootstrap-original": bootstrapOriginalLogo
};

export function Frameworks() {
    const skills = Object.keys(skillLogos);
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (<Icon key={skill} src={skillLogos[skill]} /> ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={60} reverse speed={2}>
      {/* Create a reversed copy to avoid mutating the original array */}
      {[...skills].reverse().map((skill) => (<Icon key={skill} src={skillLogos[skill]} /> ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon=({src}) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110"/>
)
export default Frameworks;
