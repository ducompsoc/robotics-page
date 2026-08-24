import type { ReactNode } from "react";
import Logo from "@/component/logo";

function ButtonLink({
  href,
  children,
}: {
  href: string;
  children?: ReactNode;
}) {
  return (
    <a className="bg-contrast text-background p-10 rounded-3xl" href={href}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="flex flex-row items-center justify-center gap-5 p-10 text-6xl">
        <Logo className="text-8xl" />
        <h1 className="font-bold">Durham Robotics</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-start text-5xl gap-10">
        <ButtonLink href="https://discord.gg/NW5sPcCgfk">Discord</ButtonLink>
        <ButtonLink href="https://instagram.com/du_robotics/">
          Instagram
        </ButtonLink>
        <ButtonLink href="https://drive.google.com/drive/folders/1zgly1DJN1CDVUM2_YmNYN1t8M5ar_YZF">
          Session Material
        </ButtonLink>
      </main>
    </>
  );
}
