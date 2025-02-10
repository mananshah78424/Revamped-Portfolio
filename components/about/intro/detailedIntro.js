import {
  AWSIconSVG,
  GoToLink,
  JavaScriptIconSVG,
  PythonIconSVG,
  TailWindSmallSVG,
  WaveSVG,
} from '@/utils/svgIcons';

const DetailedIntro = () => {
  return (
    <div className="about-detailed-info rubik-font">
      <h3 className="text-[24px] caviet-font"> A little about me </h3>
      <div className="flex flex-col gap-10 md:flex-row md:gap-3">
        <div className="flex-1 space-y-4">
          <p className="mt-8">
            <WaveSVG></WaveSVG>
            <span>👋 Hello, welcome to my little corner on the web!</span>
          </p>
          <p className="">
            I'm a self-taught programmer, I love programming and try to build
            real-time solutions that can solve problems and help a large subset
            of people. I often see myself working with{' '}
            <strong className="opacity-60">software architectures</strong>,
            writting
            <strong className="opacity-60"> clean</strong> and{' '}
            <strong className="opacity-60">maintainable code</strong>!
            <p className="mt-4">
              {' '}
              Most of the solutions I build are using
              <a
                href="https://www.javascript.com/"
                target="_blank"
                className="inline-flex items-center gap-x-2 rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-[rgba(240,219,79,.5)] hover:bg-[rgba(240,219,79,.1)] dark:border-neutral-800 dark:bg-neutral-800/30  dark:hover:border-[rgba(240,219,79,.5)] dark:hover:bg-[rgba(240,219,79,.1)] ml-2"
              >
                <JavaScriptIconSVG></JavaScriptIconSVG>
                <span className="text-base">Javascript</span>
              </a>
              ,{' '}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                className="inline-flex items-center gap-x-2 rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-[rgba(0,122,204,.5)] hover:bg-[rgba(0,122,204,.1)] dark:border-neutral-800 dark:bg-neutral-800/30 dark:hover:border-[rgba(0,122,204,.5)] dark:hover:bg-[rgba(0,122,204,.1)]"
              >
                <TailWindSmallSVG></TailWindSmallSVG>
                <span className="text-base">Typescript</span>
              </a>
              ,{' '}
              <a
                href="https://www.python.org/"
                target="_blank"
                className="inline-flex items-center gap-x-2 rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-[rgba(255,232,115,.5)] hover:bg-[rgba(255,232,115,.1)] dark:border-neutral-800 dark:bg-neutral-800/30 dark:hover:border-[rgba(255,232,115,.5)] dark:hover:bg-[rgba(255,232,115,.1)]"
              >
                <PythonIconSVG></PythonIconSVG>
                <span className="text-base">Python</span>
              </a>{' '}
              and{' '}
              <a
                href="https://www.aws.com/"
                target="_blank"
                className="inline-flex items-center gap-x-2 rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-black/50 hover:bg-black/10 dark:border-neutral-800 dark:bg-neutral-800/30 hover:dark:border-white/50 hover:dark:bg-white/10"
              >
                <AWSIconSVG></AWSIconSVG>
                <span className="text-base">AWS</span>
              </a>{' '}
              ecosystem.
            </p>
          </p>
          <p>
            I completed my Masters in Computer Science at the{' '}
            <span className="text-[#F4C430]">
              University of California, Irvine,{' '}
            </span>{' '}
            where i studied several classes including
            <strong className="opacity-60">
              {' '}
              Data Structures & Algorithms, Operating Systems, & Database
              Management System.
            </strong>
          </p>
          <p>
            See more about my <strong>work experience </strong>
            <a
              className="inline-flex items-center rounded-md px-1 font-medium text-black transition hover:bg-neutral-200/50 dark:text-white dark:hover:bg-neutral-800/50"
              href="/work"
            >
              <span className="mr-2 text-[#2b6cb0]">Work Experience 🧑‍💻</span>
              <GoToLink width="12" height="12"></GoToLink>
            </a>{' '}
            or
            <p>
              take a look into{' '}
              <a
                className="inline-flex items-center rounded-md px-1 font-medium text-black transition hover:bg-neutral-200/50 dark:text-white dark:hover:bg-neutral-800/50"
                href="/projects"
              >
                <span className="mr-2 text-[#2b6cb0]">My Projects 🐱‍💻</span>
                <GoToLink width="12" height="12"></GoToLink>
              </a>{' '}
              ;)
            </p>
          </p>

          <p>
            I hope I can help you. I'd love to hear your ideas and contribute
            whenever possible.
          </p>
        </div>
        <div className="relative">
          <div className="h-fit md:sticky md:top-24 md:w-[23rem]">
            <div className="w-full space-y-4 rounded-xl border border-neutral-200 p-5 text-sm shadow-md dark:border-neutral-800">
              <header className="flex justify-between gap-3">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path>
                  </svg>
                  <span>Currently making...</span>
                </div>
                <a className="opacity-80 hover:opacity-100" href="/projects">
                  see projects
                </a>
              </header>
              <div className="space-y-3 rounded-xl border border-neutral-200 p-2 dark:border-neutral-800">
                <div>
                  <div className="flex items-start justify-between gap-1">
                    <div>
                      <div className="font-medium">House of Events</div>
                      <div className="text-xs opacity-80">
                        <time dateTime="2024-11-19T19:24:16Z">Feb 5, 2025</time>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base">
                      <a
                        href=""
                        target="_blank"
                        className="rounded p-1 transition hover:bg-neutral-200 dark:hover:bg-neutral-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path
                            d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
                            opacity="0.2"
                          ></path>
                          <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
                        </svg>
                      </a>
                      <a
                        href=""
                        target="_blank"
                        className="rounded p-1 transition hover:bg-neutral-200 dark:hover:bg-neutral-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  An application that reminds you before games you've subscribed
                  to.
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                      </svg>
                    </span>
                    <span>51</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z"></path>
                      </svg>
                    </span>
                    <span>11</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-700/10 p-3 leading-none text-neutral-700 transition hover:bg-neutral-700 hover:text-white dark:bg-neutral-400/10 dark:text-neutral-400 dark:hover:bg-neutral-400 dark:hover:text-black"
                  target="_blank"
                  href="https://drive.google.com/file/d/1ilkK3Mxr1OJyK4mC_ejH7JI8S7OOPEPB/view"
                >
                  Download CV{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedIntro;
