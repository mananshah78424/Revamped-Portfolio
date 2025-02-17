// app/[company]/page.js

import './page.css';
import PageNotFound from '../../components/404/pageNotFound';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { companyInfo } from '@/utils/text';
import Link from 'next/link';
const highlightWords = (text) => {
  const keywordColors = {
    'GPT-3.5-turbo': 'text-purple-500 font-semibold',
    'Gemini-1.5-pro': 'text-indigo-500 font-semibold',
    'Large Language Model (LLM)': 'text-green-500 font-semibold',
    'Google Cloud Platform (GCP)': 'text-blue-500 font-semibold',
    Postgre: 'text-yellow-500 font-semibold',
    PostgreSQL: 'text-yellow-500 font-semibold',
    'Node.js': 'text-teal-500 font-semibold',
    JavaScript: 'text-orange-500 font-semibold',
    Python: 'text-red-500 font-semibold',
    'CI/CD pipeline': 'text-pink-500 font-semibold',
    'GCP Cloud Run': 'text-blue-400 font-semibold',
    Docker: 'text-cyan-500 font-semibold',
    GitHub: 'text-gray-500 font-semibold',
    Git: 'text-emerald-500 font-semibold',
    Agile: 'text-lime-500 font-semibold',
    Databricks: 'text-rose-500 font-semibold',
  };

  let highlightedText = text;

  Object.keys(keywordColors).forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, 'g');
    highlightedText = highlightedText.replace(
      regex,
      `<span class="${keywordColors[word]}">${word}</span>`
    );
  });

  return highlightedText;
};

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
                        <h1 className="text-white">{experience.name}</h1>
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
                  <h3 className="text-white text-[2rem]">
                    {experience.mission}
                  </h3>
                </div>

                <div className="project_2_feature_content-right">
                  <div className="w-layout-grid project_2_feature_item-list">
                    <div className="margin-bottom margin-xxsmall">
                      <h6 className="text-white">Deliverables</h6>
                    </div>
                    <div className="project_2_feature_text-wrapper">
                      <ul className="list-none proj-section-explain space-y-4">
                        {experience.workDone.map((work, index) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{
                              __html: `<span class="opacity-50">${index + 1}.</span> ${highlightWords(work)}`,
                            }}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {experience.keyLearnings && (
        <div
          className="padding-global-proj text-white font-light
"
        >
          <div className="spacer-tiny"></div>

          <div className="container-large">
            <div className="padding-section-large">
              <div className="max-width-large">
                <div className="margin-bottom margin-small mt-10">
                  <h1>{experience.keyLearnings.description}</h1>
                </div>
              </div>

              <div className="w-layout-grid faq12_component rubik-font">
                <div className="faq12_item">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-size-medium-18">
                      <p
                        className="text-span-37 text-[1.4rem]"
                        dangerouslySetInnerHTML={{
                          __html: highlightWords(experience.keyLearnings.title),
                        }}
                      />
                    </div>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: highlightWords(experience.keyLearnings.firstPara),
                    }}
                  />
                </div>
                <div className="faq12_item">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: highlightWords(
                        experience.keyLearnings.secondPara
                      ),
                    }}
                  />
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
