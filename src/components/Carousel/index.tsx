import Image from "next/image";
import Link from "next/link";
import { TouchEvent, useEffect, useState } from "react";

import { Icon } from "../Icon";

let INITIAL_TRANSITION = 750;
let INITIAL_SPEED = 3000;
let INITIAL_SIZE_SLIDE = 0;

interface CarouselProps {
  items: {
    img: string;
    title: string;
    description: string;
    category: string;
  }[];
}

let intervalId: NodeJS.Timeout;

export function Carousel(props: Readonly<CarouselProps>) {
  const [visible, setVisible] = useState(1);
  const [slides, setSlides] = useState(props.items);
  const [hasTransition, setHasTransition] = useState(false);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    const slideClone = [...props.items];
    slideClone.unshift(slideClone[slideClone.length - 1]);
    slideClone.push(slideClone[1]);
    setSlides(slideClone);

    INITIAL_SIZE_SLIDE = window.innerWidth < 992 ? window.innerWidth - 32 : window.innerWidth - 64;
  }, []);

  useEffect(() => {
    if (visible === slides.length - 1) {
      setTimeout(() => {
        setHasTransition(false);
        setVisible(1);
      }, INITIAL_TRANSITION);
    }

    if (visible === 1 || visible === slides.length - 2) {
      setTimeout(() => {
        setHasTransition(true);
      }, INITIAL_TRANSITION);
    }

    if (visible === 0) {
      setTimeout(() => {
        setHasTransition(false);
        setVisible(slides.length - 2);
      }, INITIAL_TRANSITION);
    }

    stop();

    start();

    return () => stop();
  }, [visible]);

  function start() {
    intervalId = setTimeout(() => {
      setVisible(prev => {
        if (prev + 1 === slides.length) return 0;

        return prev + 1;
      });
    }, INITIAL_SPEED);
  }

  const stop = () => clearInterval(intervalId);

  function handleScroll(direction: 'prev' | 'next') {
    if (direction === 'prev') return setVisible(prev => prev - 1);
    return setVisible(prev => prev + 1);
  }

  function touchMove(event: TouchEvent) {
    if (touchPosition === null) return;

    const currentTouch = event.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) {
      handleScroll('next');
    }
    if (diff < -5) {
      handleScroll('prev');
    }

    setTouchPosition(null);
  }

  return (
    <div className="c-carousel">
      <div className="c-carousel-controls">
        <button className="c-carousel-controls-left" onClick={() => handleScroll('prev')}>
          <Icon name="arrow-circle-left" aria-hidden="true" aria-label="Anterior" />
        </button>
        <button className="c-carousel-controls-right" onClick={() => handleScroll('next')}>
          <Icon name="arrow-circle-right" aria-hidden="true" aria-label="Próximo" />
        </button>
      </div>

      <div className="c-carousel-indicators">
        {slides.map((_, i) => (
          i === 0 || i === slides.length - 1
            ? null
            : <span
              key={`Dot-${String(i).padStart(2, '0')}`}
              className={["dot", i === visible ? 'active' : ''].join(' ')}
              aria-current={i === visible ? "true" : "false"}
              aria-label={`Slide item ${i}`}
              onClick={() => setVisible(i)}
            />
        ))}
      </div>

      <div
        className={["c-carousel-inner", hasTransition ? 'transition' : ''].join(" ")}
        style={{ left: -(visible * INITIAL_SIZE_SLIDE) }}
        onTouchMove={touchMove}
        onTouchStart={e => setTouchPosition(e.touches[0].clientX)}
      >
        {slides.map((item, i) => (
          <div
            key={`Item-${String(i).padStart(2, '0')}`}
            className="c-carousel-item"
            style={{ width: INITIAL_SIZE_SLIDE }}
          >
            <Image
              className="c-carousel-image"
              src={item.img}
              fill
              alt="Next logo"
              loading="lazy"
            />
            <div className="c-carousel-tag">
              {item.category}
            </div>
            <div className="c-carousel-body">
              <h2 className="c-carousel-body-title">
                {item.title}
              </h2>
              <p className="c-carousel-body-description">
                {item.description}
              </p>
              <Link href="/" className="c-carousel-body-link">
                Ler mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}