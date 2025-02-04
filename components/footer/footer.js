//use and import the css file

'use client';
//use Link from next/link
import Link from 'next/link';
export default function Footer({ dark_theme }) {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="mb-10">
      
      <div className={`navbar_component ${dark_theme ? 'dark_theme' : ''}`}>
      <h4 className="w-inline-block header-logo">Manan</h4>

        <h4 className="w-inline-block"></h4>
        <div className={`navbar_container ${dark_theme ? 'dark_theme' : ''}`}>
          <nav role="navigation" className="navbar_menu w-nav-menu">
            <Link href="#" className="navbar_link w-nav-link">
              Home
            </Link>
            <a onClick={scrollToProjects} className="navbar_link w-nav-link">
            Projects
          </a>
            <a
              href="https://www.linkedin.com/in/mananshah21/"
              target="_blank"
              className="link-block_header w-inline-block"
            >
              <img
                src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"
                loading="lazy"
                alt=""
              ></img>
            </a>
            <a
              href="mailto:mkshah1@@uci.edu?subject=Let's%20Chat!"
              className="w-inline-block"
            >
              <img
                src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000"
                loading="lazy"
                alt=""
                className="image"
              ></img>
            </a>
          </nav>
        </div>
      </div>
      <div className="spacer-tiny-white mt-10"></div>
    </div>
  );
}
