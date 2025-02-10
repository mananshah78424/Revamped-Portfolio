'use client';
import { NavExternalLink } from '@/utils/linkComponent';
import { useState, useEffect } from 'react';
import './header.css';
import Link from 'next/link';
import { LinkedInIconImage, MailToIconImage } from '@/utils/imageComponents';

export default function Header({ dark_theme }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      setIsScrolled(scrollPosition > 150); // Change to circular after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`navbar_component pt-8 max-w-5xl m-auto ${dark_theme ? 'dark_theme' : ''}`}
    >
      <h4 className="w-inline-block caviet-font text-[2rem]">Manan S</h4>
      <div className={`navbar_container ${dark_theme ? 'dark_theme' : ''}`}>
        <nav role="navigation" className="navbar_menu w-nav-menu rubik-font">
          <NavExternalLink href="/" text="Home"></NavExternalLink>
          <NavExternalLink href="/projects" text="Projects"></NavExternalLink>
          <NavExternalLink href="/work" text="Work"></NavExternalLink>
          <a
            href="https://www.linkedin.com/in/mananshah21/"
            target="_blank"
            className="link-block_header w-inline-block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path
                fill="#0288D1"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              ></path>
            </svg>
          </a>
          <a
            href="mailto:mkshah1@@uci.edu?subject=Let's%20Chat!"
            className="w-inline-block"
          >
            <MailToIconImage></MailToIconImage>
          </a>
        </nav>
      </div>
    </div>
  );
}
