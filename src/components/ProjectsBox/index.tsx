import { Project } from "../Project";
import { Section } from "../Section";

import { PROJECTS_ITEMS } from "@/constants";

export function ProjectsBox() {
  return (
    <section className="projects">
      <div className="projects-content">
        <Section
          title="Projetos que apoiamos"
          subtitle="Iniciativas que precisamos conhecer"
        >
          O Com Cajú apoia iniciativas que fazem a diferença no mundo. <br />
          10% do valor da receita do curso é revertido a projetos que acreditamos.
        </Section>

        <div className="projects-items">
          {PROJECTS_ITEMS.map((item, i) => (
            <Project
              key={`ProjectItem-${String(i).padStart(2, '0')}`}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}