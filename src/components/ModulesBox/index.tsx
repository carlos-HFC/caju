import Image from "next/image";
import Link from "next/link";
import { TouchEvent, useState, useRef, useCallback } from "react";

import { Icon } from "../Icon";
import { Module } from "../Module";

import { MODULES_ITEMS } from "@/constants";

let MODULE_LENGTH = MODULES_ITEMS.length - 1;

export function ModulesBox() {
  const [moduleActive, setModuleActive] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const modulesRef = useRef({} as HTMLDivElement);

  const handleScroll = useCallback(
    (direction: 'prev' | 'next') => {
      if (direction === 'prev') {
        if (moduleActive === 0) return;
        modulesRef.current.scrollLeft += -moduleActive * 30;
        return setModuleActive(prev => prev - 1);
      }

      if (moduleActive === MODULE_LENGTH) return;
      modulesRef.current.scrollLeft += moduleActive * 30;
      return setModuleActive(prev => prev + 1);
    },
    [moduleActive],
  );

  const changeModuleActive = useCallback(
    (module: number) => {
      modulesRef.current.scrollLeft += (module < moduleActive ? -module : module) * 30;
      return setModuleActive(module);
    },
    [moduleActive]
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
    [touchPosition],
  );

  return (
    <section className="timeline">
      <div className="timeline-content">
        <div className="timeline-body">
          <div className="timeline-body-title">
            Boas vindas
          </div>
          <div className="timeline-body-subtitle">
            Cronograma do curso
          </div>
          <div className="timeline-body-description">
            Olá! O Com Cajú expandiu! Criamos um curso que tem alegrado nossos alunos e alunas. Aqui, vamos te ajudar a entender os processos de cocção de alimentos vegetais, combinar sabores, e construir suas próprias receitas, seja você um iniciante no veganismo, ou alguém que busca se aprofundar no tema. O cronograma é dividido em 6 módulos, totalizando mais de 4 horas de curso teórico e prático. Confira o conteúdo dos módulos!
          </div>

          <Image
            src="/tomato-1.png"
            alt="Tomate"
            width={132}
            height={164}
            className="timeline-tomato-1"
          />
        </div>

        <div className="timeline-items">
          <div
            className="timeline-items-modules"
            style={{ translate: `-${moduleActive * 100}%` }}
            onTouchStart={e => setTouchPosition(e.touches[0].clientX)}
            onTouchMove={touchMove}
          >
            {MODULES_ITEMS.map((item, i) => (
              <Module
                key={`ItemModule-${String(i).padStart(2, '0')}`}
                position={i + 1}
                {...item}
              />
            ))}
          </div>

          <div className="timeline-items-numbers">
            <div className="timeline-items-numbers-title">
              Módulos do curso
            </div>

            <div className="timeline-items-numbers-carousel">
              <div className="module-controls">
                <button className="module-controls-left" onClick={() => handleScroll('prev')} disabled={moduleActive === 0}>
                  <Icon name="chevron-left" aria-hidden="true" aria-label="Anterior" aria-disabled={moduleActive === 0} />
                </button>
                <button className="module-controls-right" onClick={() => handleScroll('next')} disabled={moduleActive === MODULE_LENGTH}>
                  <Icon name="chevron-right" aria-hidden="true" aria-label="Próximo" aria-disabled={moduleActive === MODULE_LENGTH} />
                </button>
              </div>

              <div className="carousel-indicator" ref={modulesRef}>
                {MODULES_ITEMS.map((_, i) => (
                  <span
                    key={`NumberModule-${String(i).padStart(2, '0')}`}
                    className={['indicator', i === moduleActive ? 'active' : ''].join(' ')}
                    onClick={() => changeModuleActive(i)}
                  >
                    {i + 1}º
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Image
            src="/tomato-2.png"
            alt="Tomate"
            width={140}
            height={175}
            className="timeline-tomato-2"
          />

          <Image
            src="/tomato-3.png"
            alt="Tomate"
            width={140}
            height={165}
            className="timeline-tomato-3"
          />

          <Link href="/" className="timeline-items-link">
            Assistir aula experimental
            <Icon name="arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}