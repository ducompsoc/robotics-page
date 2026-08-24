import Logo from "@/component/logo";

export default function Home() {
  return (
    <>
      <header className="flex flex-row items-center justify-center gap-5 p-10 text-6xl">
        <Logo className="text-8xl" />
        <h1 className="font-bold">Durham Robotics</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-start"></main>
    </>
  );
}
