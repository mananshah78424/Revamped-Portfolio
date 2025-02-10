'use client';
import { NavExternalLink } from '@/utils/linkComponent';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LinkedInIconImage, MailToIconImage } from '@/utils/imageComponents';

export default function Footer({ dark_theme }) {
  return (
    <>
      <div
        className={`border-t border-neutral-300/30 py-4 dark:border-neutral-900 dark:bg-neutral-1000 navbar_component max-w-5xl m-auto  ${dark_theme ? 'dark_theme' : ''}`}
      >
        <div
          className={`navbar_container flex flex-row justify-between ${dark_theme ? 'dark_theme' : ''} `}
        >
          <nav role="navigation" className="navbar_menu w-nav-menu rubik-font">
            <NavExternalLink href="/" text="Home"></NavExternalLink>
            <NavExternalLink href="/projects" text="Projects"></NavExternalLink>
            <NavExternalLink
              href="https://drive.google.com/file/d/1ilkK3Mxr1OJyK4mC_ejH7JI8S7OOPEPB/view"
              text="Resume"
            ></NavExternalLink>
            <NavExternalLink
              href="https://www.linkedin.com/in/mananshah21/"
              text="LinkedIn"
            ></NavExternalLink>
            <NavExternalLink href="/work" text="Work"></NavExternalLink>
            <NavExternalLink
              href="mailto:mkshah1@@uci.edu?subject=Let's%20Chat!"
              text="Mail"
            ></NavExternalLink>
          </nav>
          <p className="ml-[8rem] caviet-font text-[22px]">
            See you soon 👋 👋 👋{' '}
          </p>
        </div>
      </div>
    </>
  );
}
