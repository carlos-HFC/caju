import Link from "next/link";
import { TouchEvent, useCallback, useRef, useState } from "react";

import { Banner } from "@/components/Banner";
import { Icon } from "@/components/Icon";
import { Module } from "@/components/Module";

import { MODULES_ITEMS } from "@/constants";

let LAST_MODULE = MODULES_ITEMS.length - 1;

export default function Home() {
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

      if (moduleActive === LAST_MODULE) return;
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
        changeModuleActive(moduleActive + 1);
      }
      if (diff < -5) {
        changeModuleActive(moduleActive - 1);
      }

      setTouchPosition(null);
    },
    [touchPosition, moduleActive],
  );

  return (
    <>
      <Banner />

      <section className="timeline">
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
                key={`Module-${String(i).padStart(2, '0')}`}
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
                <button className="module-controls-right" onClick={() => handleScroll('next')} disabled={moduleActive === LAST_MODULE}>
                  <Icon name="chevron-right" aria-hidden="true" aria-label="Próximo" aria-disabled={moduleActive === LAST_MODULE} />
                </button>
              </div>

              <div className="carousel-indicator" ref={modulesRef}>
                {MODULES_ITEMS.map((_, i) => (
                  <span
                    key={`Number-${String(i).padStart(2, '0')}`}
                    className={['indicator', i === moduleActive ? 'active' : ''].join(' ')}
                    onClick={() => changeModuleActive(i)}
                  >
                    {i + 1}º
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link href="/" className="timeline-items-link">
            Assistir aula experimental
            <Icon name="arrow-right" />
          </Link>
        </div>
      </section>
    </>
  );
}
