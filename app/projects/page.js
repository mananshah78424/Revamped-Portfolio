import {
  HouseOfEvents,
  houseofeventsmiro,
  InstaS3Verse,
  NetflixCloneVideo,
  NikeClone,
  SportingSphereImage,
} from '@/utils/imageComponents';

import {
  AWSSVG,
  RedisSVG,
  TypeScriptSVG,
  TailwindSVG,
  ReactSVG,
  NextJsSVG,
  DockerSVG,
  NodeSVG,
  PostgresSVG,
  GolangSVG,
  PrismaSVG,
  JavaScriptSVG,
  SpringbootSVG,
  PythonSVG,
  WhiteDotSVG,
  GithubIconSVG,
  WebsiteIconSVG,
  TerraformSVG,
  KnexSVG
} from '@/utils/svgIcons';

const TypeScriptIcon = () => TypeScriptSVG('1.2em', '1.2em');
const TailwindIcon = () => TailwindSVG('1.2em', '1.2em');
const ReactIcon = () => ReactSVG('1.2em', '1.2em');
const NextJsIcon = () => NextJsSVG('1.2em', '1.2em');
const DockerIcon = () => DockerSVG('1.2em', '1.2em');
const RedisIcon = () => RedisSVG('1.2em', '1.2em');
const NodeIcon = () => NodeSVG('1.2em', '1.2em');
const PostgreIcon = () => PostgresSVG('1.2em', '1.2em');
const AWSIcon = () => AWSSVG('1.2em', '1.2em');
const GolangIcon = () => GolangSVG('1.2em', '1.2em');
const PrismaIcon = () => PrismaSVG('1.2em', '1.2em');
const SpringBootIcon = () => SpringbootSVG('1.2em', '1.2em');
const JavaScriptIcon = () => JavaScriptSVG('1.2em', '1.2em');
const PythonIcon = () => PythonSVG('1.2em', '1.2em');
const WhiteDotIcon = () => WhiteDotSVG('1.2em', '1.2em');
const GithubIcon = () => GithubIconSVG('1.2em', '1.2em');
const WebsiteIcon = () => WebsiteIconSVG('1.2em', '1.2em');
const TerraformIcon = () => TerraformSVG('1.2em', '1.2em');
const KnexIcon = () => KnexSVG('1.2em', '1.2em');

// Tech stack icon mapping
const techStackIcons = {
  typescript: TypeScriptIcon,
  tailwind: TailwindIcon,
  react: ReactIcon,
  nextjs: NextJsIcon,
  docker: DockerIcon,
  redis: RedisIcon,
  nodejs: NodeIcon,
  postgre: PostgreIcon,
  aws: AWSIcon,
  golang: GolangIcon,
  prisma: PrismaIcon,
  springboot: SpringBootIcon,
  javascript: JavaScriptIcon,
  terraform: TerraformIcon,
};

import './projects.css';
import {
  houseOfEventsSkills,
  instaS3verseSkills,
  netflixCloneSkills,
  nikeCloneSkills,
  sportingSphereSkills,
} from '@/utils/projectSkills';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

// Project configuration data
const projects = [
  {
    title: 'House Of Events',
    description:
      'A real-time sports notification system that updates subscribed users before a game they are interested in!! Built with a microservices architecture, where different services work together using AWS Lambda, message queues, and databases to keep things running smoothly.',
    skills: houseOfEventsSkills,
    image: houseofeventsmiro,
    techStack: houseOfEventsSkills,
    githubLink: 'https://github.com/orgs/House-of-Events/repositories',
    area: 'Full-Stack Development',
    websiteLink: 'https://miro.com/app/board/uXjVIfydBNM=/',
  },
  {
    title: 'SportingSphere',
    description:
      'SportingSphere is an app that alerts users before games start and allows them to view fixtures, teams, and player details for different sports!',
    skills: sportingSphereSkills,
    image: SportingSphereImage,
    techStack: sportingSphereSkills,
    githubLink: 'https://github.com/mananshah78424/SportingSphere',
    area: 'Full-Stack Development',
    websiteLink: 'https://manansportssphere.netlify.app/',
  },
  {
    title: 'Netflix Clone',
    description:
      "A netflix clone that's integrated with youtube trailers! Just click on any tile and you'd be able to view it's trailer.",
    skills: netflixCloneSkills,
    image: NetflixCloneVideo,
    area: 'Frontend',
    techStack: netflixCloneSkills,
    githubLink: 'https://github.com/mananshah78424/Netflix-Clone',
    websiteLink: 'https://manansnetlifyclone.netlify.app/',
  },
  {
    title: 'InstaS3Verse',
    description:
      'A full stack real-time social media app with an option of uploading threads, videos, and images. An extra functionality of adding a search by caption which makes it so much easier!',
    skills: instaS3verseSkills,
    image: InstaS3Verse,
    techStack: instaS3verseSkills,
    area: 'Full-Stack Development',
    githubLink: 'https://github.com/mananshah78424/InstaS3Verse',
    websiteLink: 'https://www.youtube.com/watch?v=rtA9n8ot7jA',
  },
  {
    title: 'Nike Clone',
    description:
      'The Nike Shoe Store Website is a full-stack web application designed to provide users with a delightful shopping experience for Nike shoes. Users can register, log in, browse through the available shoe collection, add items to their cart, proceed to payment, and view their purchase history. The application also offers advanced filtering options based on size, gender, and other preferences.',
    skills: nikeCloneSkills,
    image: NikeClone,
    area: 'Full-Stack Development',
    techStack: nikeCloneSkills,
    githubLink: 'https://github.com/mananshah78424/Nike-Clone',
  },
];

const TechStack = ({ technologies }) => (
  <span className="flex justify-center gap-3 sm:justify-start data-[variant='compact']:text-base">
    {technologies.map((tech, index) => {
      const IconComponent = techStackIcons[tech.toLowerCase()];
      return IconComponent ? (
        <span key={index} className="hover:cursor-pointer" title={tech}>
          <IconComponent />
        </span>
      ) : null;
    })}
  </span>
);

const ProjectLinks = ({ githubLink, websiteLink }) => (
  <div
    data-variant="full"
    className="mt-9 flex flex-1 items-end justify-center gap-2 data-[variant='full']:gap-6"
  >
    <a
      href={githubLink}
      target="_blank"
      rel="noreferrer"
      data-variant="full"
      className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] data-[variant='full']:p-4 hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
    >
      Source <GithubIcon />
    </a>
    {websiteLink && (
      <a
        href={websiteLink}
        target="_blank"
        rel="noreferrer"
        data-variant="full"
        className="flex items-center gap-2 rounded-2xl bg-blue-700/10 p-2 text-blue-700 data-[variant='full']:p-4 hover:bg-blue-700 hover:text-neutral-50 dark:bg-blue-600/5 dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-neutral-50"
      >
        Website <WebsiteIcon />
      </a>
    )}
  </div>
);

const ProjectCard = ({
  title,
  description,
  skills,
  area,
  image: ImageComponent,
  techStack,
  githubLink,
  websiteLink,
}) => (
  <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 shadow-lg dark:border-neutral-900 rubik-font">
    <div className="h-64 w-full">
      <ImageComponent />
    </div>
    <div className="flex flex-1 flex-col p-5">
      <div>
        <div
          data-variant="full"
          className="sm:mb-10 flex flex-col items-center gap-2 data-[variant='full']:gap-5 dark:text-neutral-50 md:mb-4 md:data-[variant='full']:flex-row"
        >
          <h2
            data-variant="full"
            className="text-center text-lg font-bold data-[variant='full']:md:text-left"
          >
            {title}
          </h2>
          <span className="hidden md:inline">
            <WhiteDotIcon />
          </span>
          <p>{area}</p>
        </div>
        <div className="my-4">
          <TechStack technologies={techStack} />
        </div>
        <p className="text-justify text-sm md:text-left project-description">
          {description}
        </p>
        <div className="mt-4 hidden flex-wrap items-center gap-2 md:flex">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <ProjectLinks githubLink={githubLink} websiteLink={websiteLink} />
    </div>
  </div>
);

const PageComponent = () => {
  return (
    <div>
      <Header></Header>
      <div className="padding-top max-w-5xl m-auto project-main-page mb-[5rem]">
        <div className="flex animate-slide-from-down-and-fade-1 items-start justify-between">
          <nav aria-label="breadcrumb" className="mb-4 ml-4 md:ml-0">
            <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
              <li className="inline-flex items-center gap-1.5">
                <a className="transition-colors hover:text-foreground" href="/">
                  Home
                </a>
              </li>
              <li
                role="presentation"
                aria-hidden="true"
                className="[&amp;>svg]:size-3.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <span
                  role="link"
                  aria-disabled="true"
                  aria-current="page"
                  className="font-normal text-foreground"
                >
                  Projects
                </span>
              </li>
            </ol>
          </nav>
        </div>

        <h2 className="font-semibold text-[30px] ml-4 md:ml-0">
          Featured Projects
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div>
          <h4 className="mt-4 flex justify-end text-right">
            {' '}
            For more projects check out my{' '}
            <span className="mr-2 text-[#2b6cb0]">
              {' '}
              <a href="https://github.com/mananshah78424">&nbsp;GitHub</a>
            </span>
          </h4>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PageComponent;
