'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '../components/header/header';
import Intro from '../components/about/intro/intro';
import Carousel from '../components/about/slideshow/carousel';
import Projects from '../components/projects/projects';
import Work from '../components/work/work';
import Footer from '../components/footer/footer';
import Link from 'next/link';
import Skills from '../components/skills/skills';
import LinkGrid from '@/components/about/linkGrid/linkGrid';
import DetailedIntro from '@/components/about/intro/detailedIntro';

const AnimatedSection = ({ children, className }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`animate-section ${className}`}>
      {children}
    </section>
  );
};

export default function Home() {
  return (
    <main className="portfolio container m-auto">
      <section className="portfolio_header padding-global">
        <Header />
      </section>

      <AnimatedSection className="portfolio_about padding-global">
        <Intro />
      </AnimatedSection>

      <AnimatedSection className="portfolio_about padding-global padding-top">
        <LinkGrid />
      </AnimatedSection>

      <AnimatedSection className="portfolio_work padding-global padding-top">
        <DetailedIntro />
      </AnimatedSection>

      <AnimatedSection className="portfolio_footer padding-global padding-top mt-[4rem]">
        <Footer />
      </AnimatedSection>
    </main>
  );
}
