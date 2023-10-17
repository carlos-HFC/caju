import { TouchEvent, useCallback, useState } from "react";

import { Icon } from "../Icon";
import { Pills } from "../Pills";
import { Witness } from "../Witness";

import { WITNESS_ITEMS } from "@/constants";

let WITNESS_LENGTH = WITNESS_ITEMS.length - 1;

export function WitnessBox() {
  const [witnessActive, setWitnessActive] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleScroll = useCallback(
    (direction: 'prev' | 'next') => {
      if (direction === 'prev') {
        if (witnessActive === 0) return;
        return setWitnessActive(prev => prev - 1);
      }

      if (witnessActive === WITNESS_LENGTH) return;
      return setWitnessActive(prev => prev + 1);
    },
    [witnessActive]
  );

  const changeWitnessActive = useCallback(
    (card: number) => {
      return setWitnessActive(card);
    },
    []
  );

  const touchMove = useCallback(
    (event: TouchEvent) => {
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
    },
    [touchPosition]
  );

  return (
    <section className="witness">
      <div className="witness-body">
        <div className="witness-body-title">
          Relatos de alunos(as)
        </div>
        <div className="witness-body-description">
          O que nossos alunos e alunas têm a dizer
        </div>
      </div>

      <div className="witness-carousel">
        <div
          className="witness-carousel-items"
          style={{ translate: `-${witnessActive * 100}%` }}
          onTouchStart={e => setTouchPosition(e.touches[0].clientX)}
          onTouchMove={touchMove}
        >
          {WITNESS_ITEMS.map((item, i) => (
            <Witness
              key={`WitnessItem-${String(i).padStart(2, '0')}`}
              {...item}
              index={i + 1}
              total={WITNESS_ITEMS.length}
            />
          ))}
        </div>

        <div className="witness-carousel-controls">
          <button
            className="witness-carousel-controls-left"
            onClick={() => handleScroll('prev')}
            disabled={witnessActive === 0}
          >
            <Icon name="arrow-circle-left" aria-label="Anterior" aria-hidden="true" aria-disabled={witnessActive === 0} />
          </button>
          <button
            className="witness-carousel-controls-right"
            onClick={() => handleScroll('next')}
            disabled={witnessActive === WITNESS_LENGTH}
          >
            <Icon name="arrow-circle-right" aria-label="Próximo" aria-hidden="true" aria-disabled={witnessActive === WITNESS_LENGTH} />
          </button>
        </div>

        <div className="witness-carousel-text">
          Mais relatos de alunos(as)
        </div>
      </div>

      <div className="witness-people">
        {WITNESS_ITEMS.map((item, i) => (
          <Pills
            key={`WitnessPills-${String(i).padStart(2, '0')}`}
            {...item}
            active={witnessActive === i}
            onClick={() => changeWitnessActive(i)}
          />
        ))}
      </div>
    </section>
  );
}