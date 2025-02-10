'use client';
import { useState, useCallback } from 'react';
import './carousel.css';
import { carouselImages, carouselText } from '@/utils/text';
import FormmatedText from '@/utils/FormattedText';

const HeartAnimation = ({ position, delay, size }) => {
  return (
    <div
      className="floating-heart"
      style={{
        left: `${position}%`,
        animationDelay: `${delay}s`,
        fontSize: `${size}em`,
      }}
    >
      ❤️
    </div>
  );
};

const RippleButton = ({ children, className, onClick }) => {
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    ripple.className = 'ripple';

    // Remove existing ripples
    const existingRipple = button.getElementsByClassName('ripple')[0];
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(ripple);

    // Handle the click event
    if (onClick) onClick(event);
  };

  return (
    <button className={`button-ripple ${className}`} onClick={createRipple}>
      {children}
    </button>
  );
};

const Carousel = () => {
  const [hearts, setHearts] = useState([]);

  const createHearts = useCallback((e) => {
    const numberOfHearts = 25; // Increased number of hearts
    const newHearts = Array.from({ length: numberOfHearts }, () => ({
      id: Math.random(),
      position: Math.random() * 100, // Full width of container (0-100%)
      delay: Math.random() * 0.8, // Increased delay variation
      size: 0.8 + Math.random() * 1.5, // Slightly larger size range
    }));

    setHearts((prevHearts) => [...prevHearts, ...newHearts]);

    // Remove hearts after animation
    setTimeout(() => {
      setHearts((prevHearts) =>
        prevHearts.filter((heart) => !newHearts.includes(heart))
      );
    }, 3000); // Increased timeout to match longer animation
  }, []);

  return (
    <div className="padding-top">
      <div className="about_image_container">
        <aside className="carousel">
          <div className="carousel__wrapper">
            {carouselImages.map((image, index) => (
              <div className="item" key={index} id={`slide-${index}`}>
                <img src={image.src} alt={image.alt} className="!h-[510px]" />
              </div>
            ))}
          </div>
        </aside>
        <article className="instagram">
          <div className="hearts-container">
            {hearts.map((heart) => (
              <HeartAnimation
                key={heart.id}
                position={heart.position}
                delay={heart.delay}
                size={heart.size}
              />
            ))}
          </div>
          <header className="instagram__header">
            <figure>
              <img
                src={carouselText.profilePic}
                alt="Jake Dog"
                className="w-[60px] h-[60px] m-[10px]"
              />
              <figcaption>
                <h4 className="instagram_username">
                  <FormmatedText text={carouselText.username} />
                </h4>
              </figcaption>
            </figure>
          </header>
          <section className="instagram__media">
            <div className="img"></div>
          </section>
          <footer className="instagram__buttons">
            <div className="left">
              <button onClick={createHearts} className="like-button">
                <img
                  src="https://img.icons8.com/?size=100&id=59805&format=png&color=FF0000"
                  className="w-[2em] h-[2em] mr-2"
                  alt="Like"
                />
              </button>
              <RippleButton className="comment-button">
                <img
                  src="https://img.icons8.com/?size=100&id=143&format=png&color=ffffff"
                  className="w-[2em] h-[2em] mr-2"
                  alt="Comment"
                />
              </RippleButton>
              <RippleButton className="share-button">
                <img
                  src="https://img.icons8.com/?size=100&id=60700&format=png&color=ffffff"
                  className="w-[2em] h-[2em]"
                  alt="Share"
                />
              </RippleButton>
            </div>
            <div className="right">
              <RippleButton className="share-button">
                <img
                  src="https://img.icons8.com/?size=100&id=25157&format=png&color=ffffff"
                  className="w-[2em] h-[2em]"
                  alt="Save"
                />
              </RippleButton>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Carousel;
