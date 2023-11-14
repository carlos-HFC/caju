import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Accordion } from "../Accordion";
import { Icon } from "../Icon";
import { Section } from "../Section";

import { DOUBT_ITEMS } from "@/constants";

export function DoubtBox() {
  const [accordionActive, setAccordionActive] = useState("");

  return (
    <section className="doubt" id="doubt">
      <div className="doubt-content">
        <Section
          title="Dúvidas"
          subtitle="Você tem dúvidas sobre o curso?"
          description="Respondemos algumas das dúvidas mais recorrentes para você entender melhor o nosso curso. Caso ainda restem dúvidas, entre em contato conosco!"
        />

        <div className="doubt-items">
          <Accordion initialActive={accordionActive}>
            {DOUBT_ITEMS.map((item, i) => (
              <Accordion.Item onClick={() => setAccordionActive(String(i).padStart(2, '0'))} identity={String(i).padStart(2, '0')} key={`AccordionItem-${String(i).padStart(2, '0')}`}>
                <Accordion.Header aria-controls={`AccordionItem-${String(i).padStart(2, '0')}`}>
                  {item.title}
                </Accordion.Header>
                <Accordion.Body id={`AccordionItem-${String(i).padStart(2, '0')}`}>
                  {item.description}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <Link href="/contato" className="doubt-items-link">
            Entre em contato conosco
            <Icon name="arrow-right" />
          </Link>

          <Image
            src="/raspberry.png"
            alt="Framboesa"
            className="doubt-raspberry-1"
            width={323}
            height={431}
          />

          <Image
            src="/raspberry.png"
            alt="Framboesa"
            className="doubt-raspberry-2"
            width={323}
            height={431}
          />
        </div>
      </div>
    </section>
  );
}