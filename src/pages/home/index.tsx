import { Banner } from "@/components/Banner";
import { JoinBox } from "@/components/JoinBox";
import { ModulesBox } from "@/components/ModulesBox";
import { PostsBox } from "@/components/PostsBox";
import { WitnessBox } from "@/components/WitnessBox";

export default function Home() {
  return (
    <>
      <Banner />

      <ModulesBox />

      <JoinBox />

      <WitnessBox />

      <PostsBox />
    </>
  );
}
