import {
  CenteneLogoImage,
  UciLogoImage,
  ZebraLogoImage,
} from '@/utils/imageComponents';
import { ExternalLink } from '@/utils/linkComponent';
import { GoToLink, LobLogo } from '@/utils/svgIcons';
import './Work.css';

const WorkComponent = () => {
  return (
    <div className="padding-top max-w-5xl m-auto project-main-page mb-[5rem]">
      <div className="flex animate-slide-from-down-and-fade-3 flex-col gap-3">
        <nav aria-label="breadcrumb" className="mb-4">
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
                Work
              </span>
            </li>
          </ol>
        </nav>
        <h2 className="font-semibold text-[30px]">Work Experience</h2>
        <h4 className="text-[14px] rubik-font">
          (Read more about each of my work done by clicking on the button!)
        </h4>

        <h5 className="px-4 font-semibold sans-font mt-7">Currently,</h5>
        <div className="border text-card-foreground group rounded-none border-none bg-accent/60 from-neutral-800/10 p-4 dark:bg-neutral-900 dark:hover:bg-gradient-to-bl sm:rounded-lg rubik-font">
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <LobLogo></LobLogo>
                <div>
                  <h3>Lob</h3>
                  <p className="text-sm text-muted-foreground small-role-detail small-role-detail">
                    Software Engineer for the Partner Experience Team
                  </p>
                </div>
              </div>
              <div className="flex">
                <ExternalLink href="/lobBlog">
                  <GoToLink width="24" height="24"></GoToLink>
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>

        <h5 className="px-4 mt-8 font-semibold sans-font">Previously,</h5>

        <div className="border text-card-foreground group rounded-none border-none bg-accent/60 from-neutral-800/10 p-4 dark:bg-neutral-900 dark:hover:bg-gradient-to-bl sm:rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <ZebraLogoImage></ZebraLogoImage>
                <div>
                  <h3>Zebra Technologies</h3>
                  <p className="text-sm text-muted-foreground small-role-detail">
                    Software Engineer - Automation & Generative AI team
                  </p>
                </div>
              </div>
              <div className="flex">
                <ExternalLink href="/zebraBlog">
                  <GoToLink width="24" height="24"></GoToLink>
                </ExternalLink>
              </div>
            </div>

            {/* <blockquote className="border-l-2 pl-6 text-sm italic text-muted-foreground">
              <p id="d">
                Nader was absolutely amazing with the work he did for me. He
                truly went above and beyond and was super clear, efficient, and
                very knowledgeable. He thought about pretty much everything
                related to the project<span>...</span>
                <span className="hidden" aria-hidden="true">
                  {' '}
                  and even thought outside the box to create solutions to any
                  issues. Truly a 10/10 hire. One of my best hired on Upwork.
                  Will definitely be rehiring on future projects.
                </span>
                <span
                  className="ml-2 cursor-pointer text-foreground hover:underline"
                  role="button"
                  tabIndex="0"
                  aria-expanded="false"
                  aria-controls="d"
                >
                  show more
                </span>
              </p>
            </blockquote> */}
          </div>
        </div>
        <div className="border text-card-foreground group rounded-none border-none bg-accent/60 from-neutral-800/10 p-4 dark:bg-neutral-900 dark:hover:bg-gradient-to-bl sm:rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <CenteneLogoImage></CenteneLogoImage>
                <div>
                  <h3>Centene Corporation</h3>
                  <p className="text-sm text-muted-foreground small-role-detail">
                    Machine Learning Intern
                  </p>
                </div>
              </div>
              <div className="flex">
                <ExternalLink href="/centeneBlog">
                  <GoToLink width="24" height="24"></GoToLink>
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 ml-auto items-end text-muted-foreground underline hover:text-foreground"></div>
      </div>

      <div className="flex animate-slide-from-down-and-fade-3 flex-col gap-3">
        <h2 className="font-semibold text-[30px]">Education</h2>
        <div className="border text-card-foreground group rounded-none border-none bg-accent/60 from-neutral-800/10 p-4 dark:bg-neutral-900 dark:hover:bg-gradient-to-bl sm:rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <UciLogoImage></UciLogoImage>
                <div>
                  <h3>University of California, Irvine</h3>
                  <p className="text-sm text-muted-foreground small-role-detail">
                    Master in Computer Science
                  </p>
                </div>
              </div>
              <div className="flex">
                <a
                  target="_blank"
                  aria-label="Visit Website"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 shrink-0"
                  data-state="closed"
                  href="https://hi-interns.com/"
                >
                  <GoToLink width="24" height="24"></GoToLink>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
