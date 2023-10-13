import Image from "next/image";

import { Banner } from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Image
        src="/banner.png"
        width={1240}
        height={1551}
        alt="Imagem de banner"
        className="image-banner"
      />
      <Banner />
    </>
  );
}
