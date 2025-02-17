import { CatGithubImage } from '@/utils/imageComponents';
import './linkGrid.css';
import { GithubIconSVG } from '@/utils/svgIcons';
import { ExternalLink } from '@/utils/linkComponent';
import { GitHubContributionBoxes } from '@/subcomponents/linkGrid/GithubContributionBoxes';
import { SkillsBox } from '@/subcomponents/linkGrid/SkillsBox';
import { SocialMediaBoxes } from '@/subcomponents/linkGrid/SocialMediaBoxes';
const GithubIcon = () => GithubIconSVG('1.2em', '1.2em');

// import {
//   DockerIconSmallSVG,
//   MySQLSVGIcon,
//   PostgreSVGIcon,
//   ReactGifSVGIcon,
//   ReactSmallSVGIcon,
//   RedisIconBigSVGIcon,
// } from '@/utils/svgIcons';

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
            <SocialMediaBoxes></SocialMediaBoxes>
          </div>

          <SkillsBox></SkillsBox>
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
