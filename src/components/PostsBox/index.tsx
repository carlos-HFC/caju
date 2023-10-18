import { Carousel } from "../Carousel";
import { Section } from "../Section";

import { CAROUSEL_ITEMS } from "@/constants";

export function PostsBox() {
  return (
    <section className="posts">
      <Section
        title="Posts"
        subtitle="Vamos repensar e discutir sobre veganismo e suas ramificações?"
      />

      <Carousel items={CAROUSEL_ITEMS} />
    </section>
  );
}