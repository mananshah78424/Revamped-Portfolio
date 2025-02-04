import './work.css';
import Link from 'next/link';
import { workExperienceInfo } from '@/utils/text';
import FormmatedText from '@/utils/FormattedText';
const Work = () => {
  return (
    <div>
      <div className="mb-[2rem] spacer-tiny-white"></div>
      <h1 className="titles">Work Experience</h1>

      <div className="work-container">
        <div className="blog-margin">
          <p className="heading-work-status">
            <em> Currently, </em>
          </p>
          <div className="work-padding-top flex flex-wrap items-center justify-between">
            <div className="flex flex-row items-center">
              <img
                src={workExperienceInfo.companies[0].logo}
                alt="Lob"
                className="work-image"
              />

              <p className=" work-description-text ml-4 col col-xl-4 col-lg-10 col-md-11 col-sm-10 col-10 work-padding-left ld:w-[33.3%]">
                <span className="work-description-text">
                  <FormmatedText text={workExperienceInfo.companies[0].text} />
                  <span className="font-bold">
                    <FormmatedText
                      text={workExperienceInfo.companies[0].name}
                    ></FormmatedText>
                  </span>
                </span>
                .<br />
                <Link className="underline-link" href="/lobBlog">
                  <FormmatedText text={workExperienceInfo.read_more_text} />
                </Link>
              </p>
            </div>
          </div>

          <p className="heading-work-status mt-[2rem]">
            <em> Previously, </em>
          </p>

          <div className="work-padding-top flex flex-wrap items-center w-full">
            <div className="flex flex-row items-center w-[50%]">
              <img
                src={workExperienceInfo.companies[1].logo}
                alt="Zebra Technologies"
                className="work-image"
              />
              <p className="work-description-text  col col-xl-4 col-lg-10 col-md-11 col-sm-10 col-10 work-padding-left ld:w-[33.3%]">
                <span>
                  <FormmatedText text={workExperienceInfo.companies[1].text} />
                  <span className="font-bold">
                    <FormmatedText
                      text={workExperienceInfo.companies[1].name}
                    ></FormmatedText>
                  </span>
                </span>
                .<br />
                <Link className="underline-link" href="/zebraBlog">
                  <FormmatedText text={workExperienceInfo.read_more_text} />
                </Link>
              </p>
            </div>

            <div className="flex flex-row items-center">
              <img
                src={workExperienceInfo.companies[2].logo}
                alt="UCI"
                className="work-image !h-[60px]"
              />
              <p className="col col-xl-4 col-lg-10 col-md-11 col-sm-10 col-10 work-padding-left">
                <span>
                  <FormmatedText text={workExperienceInfo.companies[2].text} />
                  <span className="font-bold">
                    <FormmatedText
                      text={workExperienceInfo.companies[2].name}
                    ></FormmatedText>
                  </span>
                </span>
                .<br />
                <Link className="underline-link" href="/uciBlog">
                  <FormmatedText text={workExperienceInfo.read_more_text} />
                </Link>
              </p>
            </div>
          </div>

          <div className="work-padding-top flex flex-wrap items-center w-full">
            <div className="flex flex-row items-center w-[50%]">
              <img
                src={workExperienceInfo.companies[3].logo}
                alt="Centene Corporation"
                className="work-image"
              />
              <p className="work-description-text ml-2 col col-xl-4 col-lg-10 col-md-11 col-sm-10 col-10 work-padding-left ld:w-[33.3%]">
                {' '}
                <span>
                  <FormmatedText text={workExperienceInfo.companies[3].text} />
                  <span className="font-bold">
                    <FormmatedText
                      text={workExperienceInfo.companies[3].name}
                    ></FormmatedText>
                  </span>
                </span>
                .<br />
                <Link className="underline-link" href="/centeneBlog">
                  <FormmatedText text={workExperienceInfo.read_more_text} />
                </Link>
              </p>
            </div>
          </div>
          <div className="work-padding-top flex flex-wrap items-center w-full">
            <FormmatedText text={workExperienceInfo.more_details_resume_text} />
            <span className="ml-1">
              <Link
                href={workExperienceInfo.resumeLink}
                className="underline-link"
              >
                <FormmatedText text={workExperienceInfo.resume_text} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
