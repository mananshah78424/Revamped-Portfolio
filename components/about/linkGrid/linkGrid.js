import { CatGithubImage } from '@/utils/imageComponents';
import './linkGrid.css';
import { GithubIconSVG } from '@/utils/svgIcons';
import { ExternalLink } from '@/utils/linkComponent';
import { GitHubContributionBoxes } from '@/subcomponents/linkGrid/GithubContributionBoxes';
import { SkillsBox } from '@/subcomponents/linkGrid/SkillsBox';
import { SocialMediaBoxes } from '@/subcomponents/linkGrid/SocialMediaBoxes';
const GithubIcon = () => GithubIconSVG('1.2em', '1.2em');
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
// import {
//   DockerIconSmallSVG,
//   MySQLSVGIcon,
//   PostgreSVGIcon,
//   ReactGifSVGIcon,
//   ReactSmallSVGIcon,
//   RedisIconBigSVGIcon,
// } from '@/utils/svgIcons';

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

const LinkGrid = () => {
  return (
    <div>
      <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
        <div className="col-span-3">
          <ExternalLink
            href="https://github.com/mananshah78424"
            className="block w-full h-full"
          >
            <div className="group relative flex h-full w-full transform-gpu flex-col justify-between gap-5 overflow-hidden rounded-xl text-white transition-all duration-500 will-change-[outline,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-20"
              >
                <CatGithubImage />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
                ></span>
              </span>
              <span aria-hidden="true" className="px-6 pt-6">
                <span className="flex justify-between w-[5rem]">
                  <GithubIcon />
                </span>
              </span>
              <span className="space-y-0.5 px-6 pb-6 rubik-font">
                <span className="block font-semibold">GitHub</span>
                <span className="block text-sm">
                  My experiments (aka projects)
                </span>
              </span>
            </div>
          </ExternalLink>
        </div>

        <div className="col-span-2">
          <div className="group relative h-full w-full transform-gpu overflow-hidden rounded-xl bg-[#f7f2f2] duration-500 hover:scale-[.97] dark:bg-[#0d1117]">
            <a
              href="http://github.com/mananshah78424"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative h-full w-full transform-gpu overflow-hidden rounded-xl bg-[#f7f2f2] duration-500 hover:scale-[.97] dark:bg-[#0d1117]">
                <a
                  href="https://github.com/mananshah78424"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="z-0 grid grid-cols-[repeat(15,minmax(0,1fr))] gap-1 opacity-90">
                    <div className="size-3 rounded green1"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green3"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green3"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green1"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green3"></div>
                    <div className="size-3 rounded green1"></div>
                    <div className="size-3 rounded green3"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green1"></div>
                    <div className="size-3 rounded green3"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green3"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green1"></div>
                    <div className="size-3 rounded green3"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green1"></div>
                    <div className="size-3 rounded green3"></div>
                    <div className="size-3 rounded green1"></div>
                    <div className="size-3 rounded green1"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green1"></div>
                    <div className="size-3 rounded green3"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green3"></div>
                    <div className="size-3 rounded green4"></div>
                    <div className="size-3 rounded green2"></div>
                    <div className="size-3 rounded green4"></div>
                  </div>
                  <div className="absolute bottom-1 flex flex-row flex-wrap gap-x-6 p-4 sm:gap-x-4 md:gap-x-6 rubik-font items-align text-center text-[14px]">
                    <div>
                      <span className="mr-1 text-zinc-600 dark:text-zinc-400">
                        Username:
                      </span>
                      mananshah78424
                    </div>
                    <div>
                      <span className="mr-1 text-zinc-600 dark:text-zinc-400">
                        Repos:
                      </span>
                      24
                    </div>
                  </div>
                </a>
              </div>
            </a>
          </div>
        </div>

        <a
          target="_blank"
          className="relative flex h-36 transform-gpu items-center justify-center overflow-hidden rounded-lg bg-[#000] text-white duration-500 hover:scale-95"
          href="https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="absolute left-0 top-[-5] text-[40px] text-red-800"
          >
            <path d="M248,160a40,40,0,0,1-40,40H190.57a56.22,56.22,0,0,1-50.75-32.32l-30.14-64.6A40.15,40.15,0,0,0,73.43,80H64a40,40,0,0,0-40,40v24a40,40,0,0,0,40,40h8a32,32,0,0,0,29.34-19.2A8,8,0,1,1,116,171.2,48,48,0,0,1,72,200H64A56.06,56.06,0,0,1,8,144V120A56.06,56.06,0,0,1,64,64h9.43a56.22,56.22,0,0,1,50.75,32.32l30.14,64.6A40.15,40.15,0,0,0,190.57,184H208a24,24,0,0,0,0-48H188a36,36,0,0,1,0-72h20a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H188a20,20,0,0,0,0,40h20A40,40,0,0,1,248,160Z"></path>
          </svg>
          <div className="absolute bottom-0 right-5 top-0 flex">
            <div className="side-text relative z-0 flex  gap-1 writing-mode-vertical font-extrabold leading-none text-white">
              <span className="absolute h-fit right-4 max-h-full text-xl opacity-50">
                Starboy
              </span>
              <div className="text-[10px] [writing-mode:vertical-rl] rotate-180 opacity-30 absolute top-8 right-4">
                Top listened this month
              </div>
              <div className="[writing-mode:vertical-rl] rotate-180 opacity-30">
                Weeknd
              </div>
            </div>
          </div>
          <img
            alt="Lisboa"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className="absolute -bottom-10 -left-14 -z-10 rounded-full blur-2xl"
            src="/images/about/grid/weeknd.jpg"
          />
          <img
            alt="Lisboa"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className="absolute -bottom-12 -left-16 animate-spin overflow-hidden rounded-full animate-duration-[120s]"
            src="/images/about/grid/weeknd.jpg"
          />
        </a>
      </div>
      <div className="mt-3 grid grid-cols-3 md:grid-cols-6">
        <div className="col-span-3 flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="w-24">
              <a
                href="https://manansnetlifyclone.netlify.app/"
                target="_blank"
                className="relative flex h-full transform-gpu flex-col justify-between rounded-xl bg-[#131618] p-3 duration-500 hover:scale-[.97]"
              >
                <span className="flex justify-end text-lg text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                </span>
                <div className="absolute bottom-3 z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent blur-md">
                  <span>Netflix</span>
                  <span>boxed</span>
                </div>
                <div className="absolute bottom-[3.75rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.10]">
                  <span>Netflix</span>
                  <span>boxed</span>
                </div>
                <div className="absolute bottom-[3rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.15]">
                  <span>Netflix</span>
                  <span>boxed</span>
                </div>
                <div className="absolute bottom-[2.25rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.20]">
                  <span>Netflix</span>
                  <span>boxed</span>
                </div>
                <div className="absolute bottom-[1.5rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.25]">
                  <span>Netflix</span>
                  <span>boxed</span>
                </div>
                <div className="z-20 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent">
                  <span>Netflix</span>
                  <span>boxed</span>
                </div>
              </a>
            </div>
            <div className="flex w-full flex-col gap-3">
              <div className="grid grid-cols-2 gap-2 rubik-font">
                <a
                  href="https://linkedin.com/in/mananshah21"
                  className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-[#2867b2] text-white duration-500 hover:scale-[.97] rubik-font"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="text-2xl"
                  >
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                  </svg>
                  <p className="-rotate-3 text-[12px] text-white/90">
                    (serious stuff)
                  </p>
                </a>
                <a
                  href="https://www.instagram.com/man_annn/"
                  className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-red-400 text-white duration-500 hover:scale-95 rubik-font insta-div"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    fill="currentColor"
                    viewBox="0 0 56 56"
                    className="text-2xl"
                  >
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                      cx="19.38"
                      cy="42.035"
                      r="44.899"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#fd5"></stop>
                      <stop offset=".328" stopColor="#ff543f"></stop>
                      <stop offset=".348" stopColor="#fc5245"></stop>
                      <stop offset=".504" stopColor="#e64771"></stop>
                      <stop offset=".643" stopColor="#d53e91"></stop>
                      <stop offset=".761" stopColor="#cc39a4"></stop>
                      <stop offset=".841" stopColor="#c837ab"></stop>
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    ></path>
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                      cx="11.786"
                      cy="5.54"
                      r="29.813"
                      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#4168c9"></stop>
                      <stop
                        offset=".999"
                        stopColor="#4168c9"
                        stopOpacity="0"
                      ></stop>
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                    ></path>
                    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                    <path
                      fill="#fff"
                      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                    ></path>
                  </svg>
                  <p className="text-[12px] text-white/55 ">(share reels ;)</p>
                </a>
                <a
                  href=""
                  className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-[#2867b2] text-white duration-500 hover:scale-[.97] rubik-font medium-div"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 31.494141 5.1503906 L 5.9277344 7.0019531 A 1.0001 1.0001 0 0 0 5.9042969 7.0039062 A 1.0001 1.0001 0 0 0 5.8652344 7.0097656 A 1.0001 1.0001 0 0 0 5.7929688 7.0214844 A 1.0001 1.0001 0 0 0 5.7636719 7.0292969 A 1.0001 1.0001 0 0 0 5.7304688 7.0371094 A 1.0001 1.0001 0 0 0 5.6582031 7.0605469 A 1.0001 1.0001 0 0 0 5.6113281 7.0800781 A 1.0001 1.0001 0 0 0 5.5839844 7.0917969 A 1.0001 1.0001 0 0 0 5.4335938 7.1777344 A 1.0001 1.0001 0 0 0 5.4082031 7.1933594 A 1.0001 1.0001 0 0 0 5.3476562 7.2421875 A 1.0001 1.0001 0 0 0 5.3359375 7.2539062 A 1.0001 1.0001 0 0 0 5.2871094 7.2988281 A 1.0001 1.0001 0 0 0 5.2578125 7.3320312 A 1.0001 1.0001 0 0 0 5.2148438 7.3828125 A 1.0001 1.0001 0 0 0 5.1992188 7.4023438 A 1.0001 1.0001 0 0 0 5.15625 7.4648438 A 1.0001 1.0001 0 0 0 5.1445312 7.484375 A 1.0001 1.0001 0 0 0 5.1074219 7.5488281 A 1.0001 1.0001 0 0 0 5.09375 7.5761719 A 1.0001 1.0001 0 0 0 5.0644531 7.6484375 A 1.0001 1.0001 0 0 0 5.0605469 7.65625 A 1.0001 1.0001 0 0 0 5.015625 7.8300781 A 1.0001 1.0001 0 0 0 5.0097656 7.8613281 A 1.0001 1.0001 0 0 0 5.0019531 7.9414062 A 1.0001 1.0001 0 0 0 5.0019531 7.9453125 A 1.0001 1.0001 0 0 0 5 8 L 5 33.738281 C 5 34.76391 5.3151542 35.766862 5.9042969 36.607422 A 1.0001 1.0001 0 0 0 5.953125 36.671875 L 12.126953 44.101562 A 1.0001 1.0001 0 0 0 12.359375 44.382812 L 12.75 44.851562 A 1.0006635 1.0006635 0 0 0 12.917969 45.011719 C 13.50508 45.581386 14.317167 45.917563 15.193359 45.861328 L 42.193359 44.119141 C 43.762433 44.017718 45 42.697027 45 41.125 L 45 15.132812 C 45 14.209354 44.565523 13.390672 43.904297 12.839844 A 1.0008168 1.0008168 0 0 0 43.748047 12.695312 L 43.263672 12.337891 A 1.0001 1.0001 0 0 0 43.0625 12.189453 L 34.824219 6.1132812 C 33.865071 5.4054876 32.682705 5.0641541 31.494141 5.1503906 z M 31.638672 7.1445312 C 32.352108 7.0927682 33.061867 7.29845 33.636719 7.7226562 L 39.767578 12.246094 L 14.742188 13.884766 C 13.880567 13.941006 13.037689 13.622196 12.425781 13.011719 L 12.423828 13.011719 L 8.2539062 8.8398438 L 31.638672 7.1445312 z M 7 10.414062 L 11.011719 14.425781 L 12 15.414062 L 12 40.818359 L 7.5390625 35.449219 C 7.1899317 34.947488 7 34.351269 7 33.738281 L 7 10.414062 z M 41.935547 14.134766 C 42.526748 14.096822 43 14.54116 43 15.132812 L 43 41.125 C 43 41.660973 42.59938 42.08847 42.064453 42.123047 L 15.064453 43.865234 C 14.770856 43.884078 14.506356 43.783483 14.314453 43.605469 A 1.0006635 1.0006635 0 0 0 14.3125 43.603516 C 14.3125 43.603516 14.310547 43.601562 14.310547 43.601562 C 14.306465 43.597733 14.304796 43.59179 14.300781 43.587891 A 1.0006635 1.0006635 0 0 0 14.289062 43.572266 C 14.112238 43.393435 14 43.149431 14 42.867188 L 14 16.875 C 14 16.337536 14.39999 15.911571 14.935547 15.876953 L 41.935547 14.134766 z M 38.496094 19 L 33.421875 19.28125 C 32.647875 19.36125 31.746094 19.938 31.746094 20.875 L 33.996094 21.0625 L 33.996094 31.753906 L 26.214844 19.751953 L 20.382812 20.080078 C 19.291812 20.160078 18.994141 20.970953 18.994141 22.001953 L 21.244141 22.001953 L 21.244141 37.566406 C 21.244141 37.566406 20.191844 37.850406 19.839844 37.941406 C 19.091844 38.134406 18.994141 38.784906 18.994141 39.253906 C 18.994141 39.253906 22.746656 39.065547 24.472656 38.935547 C 26.431656 38.785547 26.496094 37.472656 26.496094 37.472656 L 24.246094 37.003906 L 24.246094 25.470703 C 24.246094 25.470703 29.965844 34.660328 31.714844 37.361328 C 32.537844 38.630328 33.152375 38.878906 34.234375 38.878906 C 35.122375 38.878906 35.962141 38.616594 36.994141 38.058594 L 36.994141 20.697266 C 36.994141 20.697266 37.184203 20.687141 37.783203 20.494141 C 38.466203 20.273141 38.496094 19.656 38.496094 19 z"></path>
                  </svg>
                  <p className="text-[12px] text-white/90">
                    (documenting stuff)
                  </p>
                </a>
                <a
                  href="https://medium.com/@manan78424"
                  className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-[rgb(28,29,31)] text-white duration-500 hover:scale-[.97] rubik-font"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.6em"
                    height="1.6em"
                    viewBox="0 0 50 50"
                  >
                    <path d="M15 14c6.065 0 11 4.935 11 11s-4.935 11-11 11S4 31.065 4 25 8.935 14 15 14M15 12C7.82 12 2 17.82 2 25s5.82 13 13 13 13-5.82 13-13S22.18 12 15 12L15 12zM35.5 15c2.124 0 4.5 4.277 4.5 10s-2.376 10-4.5 10S31 30.723 31 25 33.376 15 35.5 15M35.5 13c-3.59 0-6.5 5.373-6.5 12s2.91 12 6.5 12S42 31.627 42 25 39.09 13 35.5 13L35.5 13zM46.377 15.667h.005H46.377M45.5 18.577C45.78 20.158 46 22.327 46 25s-.22 4.842-.5 6.423C45.22 29.842 45 27.673 45 25S45.22 20.158 45.5 18.577M45.5 14c-1.381 0-2.5 4.925-2.5 11s1.119 11 2.5 11S48 31.075 48 25 46.881 14 45.5 14L45.5 14z"></path>
                  </svg>
                  <p className="text-[12px] text-white">(Articles stuff)</p>
                </a>
              </div>
            </div>
          </div>

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
        </div>

        <div className="col-span-3 space-y-3 md:ml-3">
          <div className="flex gap-3">
            <div className="flex h-36 w-fit items-center justify-center overflow-hidden rounded-xl p-2 text-white">
              <div className="relative flex -rotate-12 items-center justify-center gap-[0.35rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="absolute -bottom-6 -z-50 h-40 w-40 -rotate-45 text-white/35 brightness-50"
                >
                  <path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"></path>
                </svg>
                <p className="text-xl font-semibold text-black dark:text-white rubik-font">
                  offline<p className="text-sm">(@man_annn)</p>
                </p>
              </div>
            </div>

            <a
              className="relative flex w-full flex-1 transform-gpu flex-col gap-3 overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 p-5 transition-all duration-500 hover:scale-[.97] dark:border-neutral-900 dark:from-neutral-1000 dark:to-neutral-950 bg-[black] notes-box rubik-font"
              href=""
            >
              <div className="absolute left-0 right-0 top-1/2 -z-10 flex -translate-y-1/2 justify-around opacity-30 blur-3xl dark:opacity-20">
                <div className="size-36 animate-background-fade rounded-xl"></div>
                <div className="size-36 animate-background-fade rounded-xl animate-delay-200"></div>
              </div>
              <span>Latest post</span>
              <span className="h-px w-full rounded-full bg-neutral-1000 opacity-20 dark:bg-neutral-300/50"></span>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap stroke-red-600 stroke-2 text-xl font-bold">
                Introduction to Terraform
              </span>
              <span className="h-px w-full rounded-full bg-neutral-1000 opacity-20 dark:bg-neutral-300/50"></span>
              <span className="opacity-70">
                <time dateTime="2024-09-15T18:18:14.739Z">Feb 9, 2025</time>
              </span>
            </a>
          </div>

          <div className="relative flex items-center justify-center gap-2 rounded-xl border border-black/30 bg-black/5 p-5 dark:border-white/30 dark:bg-white/5">
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-5xl font-medium opacity-30 blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32Z"
                  opacity="0.2"
                ></path>
                <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"></path>
              </svg>
              <span>Books</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
            </svg>
            <span>Under construction...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkGrid;
