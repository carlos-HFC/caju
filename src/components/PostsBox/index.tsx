import { Carousel } from "../Carousel";

import { CAROUSEL_ITEMS } from "@/constants";

export function PostsBox() {
  return (
    <section className="posts">
      <div className="posts-body">
        <div className="posts-body-title">
          Posts
        </div>
        <div className="posts-body-description">
          Vamos repensar e discutir sobre veganismo e suas ramificações?
        </div>
      </div>

      <Carousel items={CAROUSEL_ITEMS} />
    </section>
  );
}