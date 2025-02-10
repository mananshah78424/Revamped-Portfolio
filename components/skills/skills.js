import React from 'react';
import { skillsInfo } from '@/utils/text';

const SkillsGrid = () => {
  const skills = [
    // Row 1
    [
      {
        src: 'images/work/skills/large/icons8-aws-lambda-logo-480.png',
        isGif: false,
      },
      {
        src: 'images/work/skills/large/icons8-mysql-logo-480.png',
        isGif: false,
      },
      { src: 'images/work/skills/python.gif', isGif: true },
      {
        src: 'images/work/skills/large/icons8-typescript-480.png',
        isGif: false,
      },
      { src: 'images/work/skills/datadog-black.png', isGif: false },
      {
        src: 'images/work/skills/large/icons8-amazon-web-services-480.png',
        isGif: false,
      },
      { src: 'images/work/skills/large/icons8-golang-480.png', isGif: false },
      { src: 'images/work/skills/react.gif', isGif: true },
    ],
    // Row 2
    [
      { src: 'images/work/skills/large/icons8-github-480.png', isGif: false },
      { src: 'images/work/skills/large/icons8-code.gif', isGif: true },
      { src: 'images/work/skills/large/icons8-nodejs-480.png', isGif: true },
      {
        src: 'images/work/skills/large/icons8-postgresql-480.png',
        isGif: false,
      },
      { src: 'images/work/skills/javascript.gif', isGif: true },

      { src: 'images/work/skills/large/icons8-redis-480.png', isGif: false },
      {
        src: 'images/work/skills/large/icons8-terraform-480.png',
        isGif: false,
      },
      { src: 'images/work/skills/large/icons8-vue-js-480.png', isGif: true },
    ],
    [
      {
        src: 'images/work/skills/large/icons8-spring-boot-480.png',
        isGif: false,
      },
      { src: 'images/work/skills/databricks.png', isGif: false },
      { src: 'images/work/skills/large/icons8-database (1).gif', isGif: true },

      { src: 'images/work/skills/cypress.png', isGif: false },
      { src: 'images/work/skills/large/icons8-docker-480.png', isGif: false },
      { src: 'images/work/skills/hapi.png', isGif: false },
      {
        src: 'images/work/skills/large/icons8-amazon-s3-480.png',
        isGif: false,
      },
      {
        src: 'images/work/skills/large/icons8-prisma-orm-480.png',
        isGif: true,
      },
    ],
  ];

  return (
    <div className="flex flex-col space-y-8 w-full">
      <div className="spacer-tiny-white"></div>
      <div className="mb-8">
        <h1 className="titles">{skillsInfo.title}</h1>
        <p className="mt-4 mb-4">{skillsInfo.description}</p>
      </div>

      {skills.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-4 md:grid-cols-8 gap-6 justify-items-center items-center pt-4 pb-4"
        >
          {row.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-24 h-24"
            >
              <img
                src={skill.src}
                loading="lazy"
                alt=""
                className={`object-contain max-h-full ${
                  skill.isGif ? 'w-20 rendering-crisp-edges' : 'max-w-full'
                }`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
