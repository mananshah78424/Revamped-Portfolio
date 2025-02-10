// app/[company]/page.js

import './page.css';
import PageNotFound from '../../components/404/pageNotFound';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { companyInfo } from '@/utils/text';
import Link from 'next/link';
async function getData(company) {
  return companyInfo[company] || null;
}

export default async function CompanyPage({ params }) {
  const experience = await getData(params.company);
  console.log(experience);

  if (!experience) {
    return <PageNotFound></PageNotFound>;
  }

  return (
    <div className="padding-global bg-companies rubik-font">
      <Header dark_theme="true"></Header>
      <div className="padding-top ">
        <header>
          <div className="project_1_portfolio-header_component">
            <div className="flex-[1] order-none self-auto relative">
              <img
                src={experience.mainImage}
                className="[aspect-ratio:auto] text-top object-cover w-full h-[30rem] object-top"
              ></img>
            </div>

            <div className="padding-global-proj">
              <div className="container-large">
                <div className="padding-section-medium">
                  <div className="project_1_portfolio-header_content-wrapper">
                    <div className="project_1_portfolio-header_content-left">
                      <div className="margin-bottom margin-small">
                        <h1 className="text-white italic">{experience.name}</h1>
                      </div>
                      <div className="proj-section-explain">
                        {experience.description}
                      </div>
                    </div>

                    <div>
                      <div className="w-layout-grid project_1_portfolio-header_metatag-list">
                        <div className="project_1_portfolio-header_metatag-item">
                          <div className="margin-bottom margin-xxsmall">
                            <h6 className="text-white">Role</h6>
                          </div>
                          <div className="proj-section-explain">
                            {experience.role}
                          </div>
                        </div>
                        <div className="project_1_portfolio-header_metatag-item">
                          <div className="margin-bottom margin-xxsmall">
                            <h6 className="text-white">Duration</h6>
                          </div>
                          <div className="proj-section-explain ">
                            {experience.duration}
                          </div>
                        </div>
                        <div className="project_1_portfolio-header_metatag-item">
                          <div className="margin-bottom margin-xxsmall">
                            <h6 className="text-white">Team</h6>
                          </div>
                          <div className="proj-section-explain">
                            {experience.team}
                          </div>
                        </div>
                        <div className="project_1_portfolio-header_metatag-item">
                          <div className="margin-bottom margin-xxsmall">
                            <h6 className="text-white">Website</h6>
                          </div>
                          <div className="proj-section-explain">
                            <a
                              href={experience.website}
                              className="underline-link"
                            >
                              {experience.website}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <section className="company-work-done">
        <div className="padding-global-proj">
          <div className="spacer-tiny"></div>
          <div className="container-large">
            <div className="padding-section-large">
              <div className="w-layout-grid project_2_feature_component">
                <div className="project_2_feature_content-left">
                  <h3 className="text-white text-[2rem]">{experience.mission}</h3>
                </div>

                <div className="project_2_feature_content-right">
                  <div className="w-layout-grid project_2_feature_item-list">
                    <div className="margin-bottom margin-xxsmall">
                      <h6 className="text-white">Deliverables</h6>
                    </div>
                    <div className="project_2_feature_text-wrapper">
                      <p className="proj-section-explain">
                        {experience.workDone.map((work, index) => (
                          <li key={index}>{work}</li>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {experience.keyLearnings && (
        <div className="padding-global-proj text-white">
          <div className="spacer-tiny"></div>

          <div className="container-large">
            <div className="padding-section-large">
              <div className="max-width-large">
                <div className="margin-bottom margin-small mt-10">
                  <p className="proj-section-header proj-header-bottom">
                    {experience.keyLearnings.title}
                  </p>
                  <h1>{experience.keyLearnings.description}</h1>
                </div>
              </div>

              <div className="w-layout-grid faq12_component">
                <div className="faq12_item">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-size-medium-18 text-weight-bold">
                      Designing real applications (as opposed to className
                      projects or visionary ideas) is{' '}
                      <span className="text-span-37">
                        rarely straightforward.
                      </span>
                    </div>
                  </div>
                  <p>
                    In className settings or visionary concepts, you sit with an
                    empty figma file, some preliminary research, and an open
                    canvas. The process for 0-&gt;1 products isn't far off. In
                    building real applications and working within an established
                    design system, I&nbsp;had to work with pre-determined
                    PM&nbsp;specifications, balance client and internal needs,
                    and work within rapidly changing business needs and
                    re/deprioritizing. This made me look with a more evaluative
                    lens at holistic product changes and constantly communicate
                    with my team!
                  </p>
                </div>
                <div className="faq12_item">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-size-medium-18 text-weight-bold">
                      Nothing compares to{' '}
                      <span className="text-span-39">primary research</span> -
                      designers are rarely the users of their own product
                      (especially in enterprise or client-specific apps).
                    </div>
                  </div>
                  <p>
                    Enterprise and client-specific applications are unique
                    because of the highly-tailored use cases and complex scopes.
                    Simple onboarding flows are replaced with data integrations,
                    unique user profiles, and robust customization. I realized
                    the single most valuable research came from primary work and
                    ethnographic interviews - watching user's key use cases and
                    workflows unfold give an unparalleled look into how to build
                    a successful product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {experience.featuredArticles && (
        <div className="padding-global-proj text-white">
          <div className="spacer-tiny"></div>

          <div className="container-large">
            <div className="padding-section-large">
              <div className="max-width-large">
                <div className="margin-bottom margin-small mt-10">
                  <h1>Featured Articles</h1>
                </div>
              </div>

              <div className="w-full mt-[4rem] flex flex-col items-center">
                <img
                  src={experience.featuredArticles.medium.src}
                  alt="Medium"
                />
                <div className="mt-4">
                  Check out the whole article{' '}
                  <span className="">
                    <Link
                      href={experience.featuredArticles.medium.link}
                      className="underline-link"
                    >
                      Transforming Natural Language Text to SQL: Harnessing RAG
                      and LLMs for Precision Querying
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {experience.skills && (
        <div className="padding-global-proj text-white">
          <div className="spacer-tiny"></div>

          <div className="container-large">
            <div className="padding-section-large">
              <div className="max-width-large">
                <div className="margin-bottom margin-small mt-10">
                  <h1>{experience.skills.title}</h1>
                </div>
              </div>

              <div
                className={`w-layout-grid ${experience.skills.other ? 'faq14_component' : 'faq13_component'}`}
              >
                {experience.skills.frontend && (
                  <div className="faq13_item">
                    <div className="margin-bottom margin-xsmall">
                      <div className="text-size-medium-18 text-weight-bold">
                        Frontend
                      </div>
                    </div>
                    <div className="">
                      {experience.skills.frontend.map((skill, index) => (
                        // image and then text
                        <div
                          className="flex items-center margin-bottom margin-xsmall"
                          key={index}
                        >
                          <img
                            src={skill.src}
                            alt="React"
                            className="w-[3rem] h-[3rem] mr-[1rem]"
                          />
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {experience.skills.backend && (
                  <div className="faq13_item">
                    <div className="margin-bottom margin-xsmall">
                      <div className="text-size-medium-18 text-weight-bold">
                        Backend & Cloud
                      </div>
                    </div>
                    <div className="">
                      {experience.skills.backend.map((skill, index) => (
                        // image and then text
                        <div
                          className="flex items-center margin-bottom margin-xsmall"
                          key={index}
                        >
                          <img
                            src={skill.src}
                            alt="React"
                            className="w-[3rem] h-[3rem] mr-[1rem]"
                          />
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {experience.skills.database && (
                  <div className="faq13_item">
                    <div className="margin-bottom margin-xsmall">
                      <div className="text-size-medium-18 text-weight-bold">
                        Database
                      </div>
                    </div>
                    <div className="">
                      {experience.skills.database.map((skill, index) => (
                        // image and then text
                        <div
                          className="flex items-center margin-bottom margin-xsmall"
                          key={index}
                        >
                          <img
                            src={skill.src}
                            alt="React"
                            className="w-[3rem] h-[3rem] mr-[1rem]"
                          />
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {experience.skills.other && (
                  <div className="faq13_item">
                    <div className="margin-bottom margin-xsmall">
                      <div className="text-size-medium-18 text-weight-bold">
                        Other software
                      </div>
                    </div>
                    <div className="">
                      {experience.skills.other.map((skill, index) => (
                        // image and then text
                        <div
                          className="flex items-center margin-bottom margin-xsmall"
                          key={index}
                        >
                          <img
                            src={skill.src}
                            alt="React"
                            className="w-[3rem] h-[3rem] mr-[1rem]"
                          />
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {experience.skills.machine_learning && (
                  <div className="faq13_item">
                    <div className="margin-bottom margin-xsmall">
                      <div className="text-size-medium-18 text-weight-bold">
                        Machine Learning
                      </div>
                    </div>
                    <div className="">
                      {experience.skills.machine_learning.map(
                        (skill, index) => (
                          // image and then text
                          <div
                            className="flex items-center margin-bottom margin-xsmall"
                            key={index}
                          >
                            <img
                              src={skill.src}
                              alt="React"
                              className="w-[3rem] h-[3rem] mr-[1rem]"
                            />
                            {skill.name}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {experience.skills.data_processing && (
                  <div className="faq13_item">
                    <div className="margin-bottom margin-xsmall">
                      <div className="text-size-medium-18 text-weight-bold">
                        Data Processing
                      </div>
                    </div>
                    <div className="">
                      {experience.skills.data_processing.map((skill, index) => (
                        // image and then text
                        <div
                          className="flex items-center margin-bottom margin-xsmall"
                          key={index}
                        >
                          <img
                            src={skill.src}
                            alt="React"
                            className="w-[3rem] h-[3rem] mr-[1rem]"
                          />
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer dark_theme="true"></Footer>
    </div>
  );
}
