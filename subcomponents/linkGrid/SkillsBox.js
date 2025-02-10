import { DockerIconSVG, JavaScriptIconSVG, MySQLSVGIcon, PostgreSVGIcon, ReactGifSVGIcon, ReactSmallSVG, RedisIconSVG, TailWindSmallSVG } from "@/utils/svgIcons";

export const SkillsBox = () => {
  return (
    <div className="cols-span-3">
      <div className="flex h-full flex-col gap-3 overflow-hidden rounded-xl p-1">
        <div
          className='group flex flex-col gap-4 overflow-hidden data-[direction="left"]:flex-row .mask-image'
          data-direction="left"
        >
          <div
            data-direction="left"
            className="flex shrink-0 animate-marquee-up flex-col justify-around gap-4 [--gap:1rem] data-[direction='left']:animate-marquee-left data-[direction='left']:flex-row data-[reverse='true']:direction-reverse data-[pause-on-hover='true']:group-hover:[animation-play-state:paused] "
          >
            <div
              title="Typescript"
              className="flex items-center justify-center text-4xl"
            >
              <TailWindSmallSVG></TailWindSmallSVG>
            </div>
            <div
              title="HTML5"
              className="flex items-center justify-center text-4xl"
            >
             <ReactSmallSVG></ReactSmallSVG>
            </div>
            <div
              title="CSS3"
              className="flex items-center justify-center text-4xl"
            >
              <RedisIconSVG></RedisIconSVG>
            </div>
            <div
              title="Next.js"
              className="flex items-center justify-center text-4xl"
            >
              <JavaScriptIconSVG></JavaScriptIconSVG>
            </div>
            <div
              title="Tailwind CSS"
              className="flex items-center justify-center text-4xl"
            >
              <DockerIconSVG></DockerIconSVG>
            </div>
            <div
              title="Expo"
              className="flex items-center justify-center text-4xl"
            >
              <PostgreSVGIcon></PostgreSVGIcon>
            </div>
            <div
              title="Figma"
              className="flex items-center justify-center text-4xl"
            >
              <MySQLSVGIcon></MySQLSVGIcon>
            </div>
          </div>

          <div
            data-direction="left"
            className="flex shrink-0 animate-marquee-up flex-col justify-around gap-4 [--gap:1rem] data-[direction='left']:animate-marquee-left data-[direction='left']:flex-row data-[reverse='true']:direction-reverse data-[pause-on-hover='true']:group-hover:[animation-play-state:paused] "
          >
            <div
              title="Typescript"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  data-name="original"
                  fill="#007acc"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>
            </div>
            <div
              title="HTML5"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                ></path>
                <path
                  fill="#F16529"
                  d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                ></path>
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                ></path>
              </svg>
            </div>
            <div
              title="CSS3"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  fill="#1572B6"
                  d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                ></path>
                <path
                  fill="#33A9DC"
                  d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                ></path>
                <path
                  fill="#fff"
                  d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                ></path>
                <path
                  fill="#fff"
                  d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                ></path>
              </svg>
            </div>
            <div
              title="Next.js"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <circle
                  cx="64"
                  cy="64"
                  r="64"
                  className="text-black dark:text-white"
                  fill="currentColor"
                ></circle>
                <path
                  fill="url(#a)"
                  d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
                ></path>
                <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
                <defs>
                  <linearGradient
                    id="a"
                    x1="109"
                    x2="144.5"
                    y1="116.5"
                    y2="160.5"
                    gradientTransform="scale(.71111)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                    ></stop>
                    <stop
                      offset="1"
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="121"
                    x2="120.799"
                    y1="54"
                    y2="106.875"
                    gradientTransform="scale(.71111)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                    ></stop>
                    <stop
                      offset="1"
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              title="Tailwind CSS"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  fill="#38bdf8"
                ></path>
              </svg>
            </div>
            <div
              title="Expo"
              className="flex items-center justify-center text-4xl"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="fill-[#000020] dark:fill-white undefined"
              >
                <title>Expo</title>
                <path d="M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z"></path>
              </svg>
            </div>
            <div
              title="Figma"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  fill="#0acf83"
                  d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                ></path>
                <path
                  fill="#a259ff"
                  d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                ></path>
                <path
                  fill="#f24e1e"
                  d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                ></path>
                <path
                  fill="#ff7262"
                  d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                ></path>
                <path
                  fill="#1abcfe"
                  d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div
          className='group flex flex-col gap-4 overflow-hidden data-[direction="left"]:flex-row'
          data-direction="left"
        >
          <div
            data-direction="left"
            data-reverse="true"
            className=" flex shrink-0 animate-marquee-up flex-col justify-around gap-4 [--gap:1rem] data-[direction='left']:animate-marquee-left data-[direction='left']:flex-row data-[reverse='true']:direction-reverse data-[pause-on-hover='true']:group-hover:[animation-play-state:paused] "
          >
            <div
              title="Typescript"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  data-name="original"
                  fill="#007acc"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>
            </div>
            <div
              title="HTML5"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                ></path>
                <path
                  fill="#F16529"
                  d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                ></path>
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                ></path>
              </svg>
            </div>
            <div
              title="CSS3"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  fill="#1572B6"
                  d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                ></path>
                <path
                  fill="#33A9DC"
                  d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                ></path>
                <path
                  fill="#fff"
                  d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                ></path>
                <path
                  fill="#fff"
                  d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                ></path>
              </svg>
            </div>
            <div
              title="Next.js"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <circle
                  cx="64"
                  cy="64"
                  r="64"
                  className="text-black dark:text-white"
                  fill="currentColor"
                ></circle>
                <path
                  fill="url(#a)"
                  d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
                ></path>
                <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
                <defs>
                  <linearGradient
                    id="a"
                    x1="109"
                    x2="144.5"
                    y1="116.5"
                    y2="160.5"
                    gradientTransform="scale(.71111)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                    ></stop>
                    <stop
                      offset="1"
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="121"
                    x2="120.799"
                    y1="54"
                    y2="106.875"
                    gradientTransform="scale(.71111)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                    ></stop>
                    <stop
                      offset="1"
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              title="Tailwind CSS"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  fill="#38bdf8"
                ></path>
              </svg>
            </div>
            <div
              title="Expo"
              className="flex items-center justify-center text-4xl"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="fill-[#000020] dark:fill-white undefined"
              >
                <title>Expo</title>
                <path d="M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z"></path>
              </svg>
            </div>
            <div
              title="Figma"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  fill="#0acf83"
                  d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                ></path>
                <path
                  fill="#a259ff"
                  d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                ></path>
                <path
                  fill="#f24e1e"
                  d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                ></path>
                <path
                  fill="#ff7262"
                  d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                ></path>
                <path
                  fill="#1abcfe"
                  d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                ></path>
              </svg>
            </div>
          </div>

          <div
            data-direction="left"
            data-reverse="true"
            className="flex shrink-0 animate-marquee-up flex-col justify-around gap-4 [--gap:1rem] data-[direction='left']:animate-marquee-left data-[direction='left']:flex-row data-[reverse='true']:direction-reverse data-[pause-on-hover='true']:group-hover:[animation-play-state:paused] "
          >
            <div
              title="Typescript"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  data-name="original"
                  fill="#007acc"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>
            </div>
            <div
              title="HTML5"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                ></path>
                <path
                  fill="#F16529"
                  d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                ></path>
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                ></path>
              </svg>
            </div>
            <div
              title="CSS3"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  fill="#1572B6"
                  d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                ></path>
                <path
                  fill="#33A9DC"
                  d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                ></path>
                <path
                  fill="#fff"
                  d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                ></path>
                <path
                  fill="#fff"
                  d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                ></path>
              </svg>
            </div>
            <div
              title="Next.js"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <circle
                  cx="64"
                  cy="64"
                  r="64"
                  className="text-black dark:text-white"
                  fill="currentColor"
                ></circle>
                <path
                  fill="url(#a)"
                  d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
                ></path>
                <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
                <defs>
                  <linearGradient
                    id="a"
                    x1="109"
                    x2="144.5"
                    y1="116.5"
                    y2="160.5"
                    gradientTransform="scale(.71111)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                    ></stop>
                    <stop
                      offset="1"
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="121"
                    x2="120.799"
                    y1="54"
                    y2="106.875"
                    gradientTransform="scale(.71111)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                    ></stop>
                    <stop
                      offset="1"
                      className="text-white dark:text-black"
                      stopColor="currentColor"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              title="Tailwind CSS"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  fill="#38bdf8"
                ></path>
              </svg>
            </div>
            <div
              title="Expo"
              className="flex items-center justify-center text-4xl"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="fill-[#000020] dark:fill-white undefined"
              >
                <title>Expo</title>
                <path d="M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z"></path>
              </svg>
            </div>
            <div
              title="Figma"
              className="flex items-center justify-center text-4xl"
            >
              <svg width="1em" height="1em" viewBox="0 0 128 128">
                <path
                  fill="#0acf83"
                  d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                ></path>
                <path
                  fill="#a259ff"
                  d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                ></path>
                <path
                  fill="#f24e1e"
                  d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                ></path>
                <path
                  fill="#ff7262"
                  d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                ></path>
                <path
                  fill="#1abcfe"
                  d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
