'use client';

import Header from '@/components/header/header';
import WorkComponent from '@/components/WorkComponent/Work';

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
const WorkPage = () => {
  return (
    <main className="portfolio container m-auto">
      <section className="portfolio_header padding-global">
        <Header />
      </section>
      <section className="portfolio_header padding-global">
        <WorkComponent />
      </section>
    </main>
  );
};
export default WorkPage;
