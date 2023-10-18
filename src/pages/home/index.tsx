import { Banner } from "@/components/Banner";
import { JoinBox } from "@/components/JoinBox";
import { ModulesBox } from "@/components/ModulesBox";
import { Newsletter } from "@/components/Newsletter";
import { PostsBox } from "@/components/PostsBox";
import { ProjectsBox } from "@/components/ProjectsBox";
import { WitnessBox } from "@/components/WitnessBox";

export default function Home() {
  return (
    <>
      <Banner />

      <ModulesBox />

      <JoinBox />

      <WitnessBox />

      <PostsBox />

      <ProjectsBox />

      <Newsletter />
    </>
  );
}
