import React from 'react';
// import {
//   GolangSVGIcon,
//   PrimsaSVGIcon,
//   JavaScriptIconSVG,
// } from '@/utils/svgIcons';

import {
  GolangSVG,
  PrismaSVG,
  JavaScriptSVG,
  NextJsSVG,
  ReactSVG,
  TailwindSVG,
  DockerSVG,
  PostgresSVG,
  MySQLSVG,
  AWSSVG,
  SpringbootSVG,
  JavaSVG,
  PythonSVG,
  RedisSVG,
  TerraformSVG,
  NodeSVG,
  TypeScriptSVG,
} from '@/utils/svgIcons';

const GolangIcon = () => GolangSVG('1.2em', '1.2em');
const PrismaIcon = () => PrismaSVG('1.2em', '1.2em');
const JavaScriptIcon = () => JavaScriptSVG('1.2em', '1.2em');
const NextJsIcon = () => NextJsSVG('1.2em', '1.2em');
const ReactIcon = () => ReactSVG('1.2em', '1.2em');
const TailwindIcon = () => TailwindSVG('1.2em', '1.2em');
const DockerIcon = () => DockerSVG('1.2em', '1.2em');
const PostgresIcon = () => PostgresSVG('1.2em', '1.2em');
const MySQLIcon = () => MySQLSVG('1.2em', '1.2em');
const AWSIcon = () => AWSSVG('1.2em', '1.2em');
const SpringbootIcon = () => SpringbootSVG('1.2em', '1.2em');
const JavaIcon = () => JavaSVG('1.2em', '1.2em');
const PythonIcon = () => PythonSVG('1.2em', '1.2em');
const RedisIcon = () => RedisSVG('1.2em', '1.2em');
const TerraformIcon = () => TerraformSVG('1.2em', '1.2em');
const NodeIcon = () => NodeSVG('1.2em', '1.2em');
const TypeScriptIcon = () => TypeScriptSVG('1.2em', '1.2em');

// Define two different sets of icons for each row
// const FIRST_ROW_SKILLS = [
//   { icon: JavaScriptIcon, title: 'JavaScript' },
//   { icon: GolangIcon, title: 'Golang' },
// ];

// const SECOND_ROW_SKILLS = [{ icon: PrismaIcon, title: 'Prisma' }];

const FIRST_ROW_SKILLS = [
  { icon: JavaScriptIcon, title: 'JavaScript' },
  { icon: GolangIcon, title: 'Golang' },
  { icon: PrismaIcon, title: 'Prisma' },
  { icon: NextJsIcon, title: 'NextJs' },
  { icon: ReactIcon, title: 'React' },
  { icon: TypeScriptIcon, title: 'TypeScript' },
  { icon: NodeIcon, title: 'Node' },
  { icon: TerraformIcon, title: 'Terraform' },
  { icon: RedisIcon, title: 'Redis' },
];
const SECOND_ROW_SKILLS = [
  { icon: TailwindIcon, title: 'Tailwind' },
  { icon: DockerIcon, title: 'Docker' },
  { icon: PostgresIcon, title: 'Postgres' },
  { icon: MySQLIcon, title: 'MySQL' },
  { icon: AWSIcon, title: 'AWS' },
  { icon: SpringbootIcon, title: 'Springboot' },
  { icon: PythonIcon, title: 'Python' },
];

// Reusable icon component
const SkillIcon = ({ Icon, title }) => (
  <div title={title} className="flex items-center justify-center text-4xl">
    <Icon />
  </div>
);

// Reusable marquee row component that takes a specific set of skills
const MarqueeRow = ({ skills, reverse = false }) => (
  <div
    data-direction="left"
    data-reverse={reverse}
    className="flex shrink-0 animate-marquee-up flex-col justify-around gap-4 [--gap:1rem] data-[direction='left']:animate-marquee-left data-[direction='left']:flex-row data-[reverse='true']:direction-reverse data-[pause-on-hover='true']:group-hover:[animation-play-state:paused]"
  >
    {skills.map((skill, index) => (
      <SkillIcon
        key={`${skill.title}-${index}`}
        Icon={skill.icon}
        title={skill.title}
      />
    ))}
  </div>
);

export const SkillsBox = () => {
  return (
    <div className="cols-span-3">
      <div className="flex h-full flex-col gap-3 overflow-hidden rounded-xl p-1">
        {/* First marquee group with first set of skills */}
        <div
          className="group flex flex-col gap-4 overflow-hidden data-[direction='left']:flex-row"
          data-direction="left"
        >
          <MarqueeRow skills={FIRST_ROW_SKILLS} />
          <MarqueeRow skills={FIRST_ROW_SKILLS} />
        </div>

        {/* Second marquee group with second set of skills */}
        <div
          className="group flex flex-col gap-4 overflow-hidden data-[direction='left']:flex-row"
          data-direction="left"
        >
          <MarqueeRow skills={SECOND_ROW_SKILLS} reverse />
          <MarqueeRow skills={SECOND_ROW_SKILLS} reverse />
        </div>
      </div>
    </div>
  );
};

export default SkillsBox;
