import { TouchEvent, useCallback, useState } from "react";

import { CardPrice } from "../CardPrice";
import { Icon } from "../Icon";

import { CARD_PRICE_LIST } from "@/constants";

let CARD_PRICE_LENGTH = CARD_PRICE_LIST.length - 1;

export function JoinBox() {
  const [cardActive, setCardActive] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleScroll = useCallback(
    (direction: 'prev' | 'next') => {
      if (direction === 'prev') {
        if (cardActive === 0) return;
        return setCardActive(prev => prev - 1);
      }

      if (cardActive === CARD_PRICE_LENGTH) return;
      return setCardActive(prev => prev + 1);
    },
    [cardActive]
  );

  const changeCardActive = useCallback(
    (card: number) => {
      return setCardActive(card);
    },
    []
  );

  const touchMove = useCallback(
    (event: TouchEvent) => {
      if (touchPosition === null || window.innerWidth > 992) return;

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
    <section className="join">
      <div className="join-content">
        <div className="join-body">
          <div className="join-body-title">
            Valores e condições
          </div>
          <div className="join-body-subtitle">
            Quero ser aluno(a)
          </div>
          <div className="join-body-description">
            Temos opções especiais para empresas com times a partir de 3 pessoas, entre em contato para saber mais. Você pode pagar no cartão de crédito, via boleto ou PIX. Aproveite e comece agora!
          </div>
        </div>

        <div className="join-items">
          <div className="join-items-controls">
            <button
              className="join-items-controls-left"
              onClick={() => handleScroll('prev')}
              disabled={cardActive === 0}
            >
              <Icon name="arrow-circle-left" aria-label="Anterior" aria-hidden="true" aria-disabled={cardActive === 0} />
            </button>
            <button
              className="join-items-controls-right"
              onClick={() => handleScroll('next')}
              disabled={cardActive === CARD_PRICE_LENGTH}
            >
              <Icon name="arrow-circle-right" aria-label="Próximo" aria-hidden="true" aria-disabled={cardActive === CARD_PRICE_LENGTH} />
            </button>
          </div>

          <div
            className="join-items-plans"
            style={{ translate: `-${cardActive * 100}%` }}
            onTouchStart={e => setTouchPosition(e.touches[0].clientX)}
            onTouchMove={touchMove}
          >
            {CARD_PRICE_LIST.map((item, i) => (
              <div
                className="plan-card"
                key={`CardPriceJoin-${String(i).padStart(2, '0')}`}
              >
                <CardPrice
                  {...item}
                />
              </div>
            ))}
          </div>

          <div className="join-items-indicator">
            {CARD_PRICE_LIST.map((_, i) => (
              <span
                key={`IndicatorJoin-${String(i).padStart(2, '0')}`}
                className={["indicator", i === cardActive ? "active" : ''].join(' ')}
                onClick={() => changeCardActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}