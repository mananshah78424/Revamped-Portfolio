import { projectsInfo, projectsPageInfo } from '@/utils/text';
import Link from 'next/link';
import FormmatedText from '@/utils/FormattedText';
import './projects.css';

const ProjectCard = ({ href, children, title }) => (
  <Link href={href}>
    <div className="h-[560px] relative project-card-container">
      {children}
      <div className="project-card-overlay">
        <div className="project-card-text">{title}</div>
      </div>
    </div>
  </Link>
);

const Projects = () => {
  return (
    <div className="grid gap-y-2">
      <div className="mb-[2rem] spacer-tiny-white"></div>

      <h1 className="titles">{projectsPageInfo.title}</h1>
      <p className="mt-4 mb-4">
        <FormmatedText text={projectsPageInfo.description} />
      </p>
      <div className="grid grid-cols-12 gap-x-4 items-stretch">
        <div className="h-[560px] col-span-8 flex flex-col">
          <ProjectCard
            href={projectsInfo['Netflix_Clone'].demoLink}
            title="Netflix Clone"
          >
            <video
              src={projectsInfo['Netflix_Clone'].src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </ProjectCard>
        </div>

        <div className="col-span-4 flex flex-col">
          <ProjectCard href={projectsInfo['Gitter'].githubLink} title="Gitter">
            <img
              src={projectsInfo['Gitter'].src}
              alt={projectsInfo['Gitter'].alt}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </ProjectCard>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-4 items-stretch">
        <div className="h-[560px] col-span-6 flex flex-col">
          <ProjectCard
            href={projectsInfo['SportingSphere'].githubLink}
            title="SportingSphere"
          >
            <img
              src={projectsInfo['SportingSphere'].src}
              alt="Dummy Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </ProjectCard>
        </div>

        <div className="col-span-6 flex flex-col">
          <ProjectCard
            href={projectsInfo['InstaS3Verse'].src}
            title="InstaS3Verse"
          >
            <iframe
              src={projectsInfo['InstaS3Verse'].src}
              title="InstaS3Verse"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
            />
          </ProjectCard>
        </div>
      </div>

      <p className="work-padding-top">
        <FormmatedText text={projectsPageInfo.moreProjects} />
        <span>
          <Link
            href="https://github.com/mananshah78424"
            className="ml-1 underline-link"
          >
            Github{' '}
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Projects;
