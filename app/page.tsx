import { ModeToggle } from "@/components/dark-mode-toggle";
import DashboardBoxes from "@/components/pages/dashboard-boxes";
import TabContent from "@/components/pages/tab-content";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 lg:gap-14 px-4 md:px-20 lg:px-36 py-5 lg:py-20">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-2 lg:gap-0 lg:items-center justify-between">
          <div>
            <h1 className="text-xl lg:text-3xl font-bold">Panduan Skripsian ILKOM UNNES</h1>
            <p className="text-sm lg:text-lg text-slate-400">
              Dibuat berdasarkan pengalaman para sepuh yang lulus 14 smester
            </p>
          </div>
          <ModeToggle />
        </div>
        <div className="flex lg:flex-row flex-col gap-2 items-center lg:justify-between">
          <Button className="text-xs lg:text-base w-full lg:w-fit">Request Update</Button>
          <p className="text-slate-400 italic lg:text-base text-xs">Updated 28 juli 2024</p>
        </div>
      </div>

      {/* Boxes */}
      <DashboardBoxes />

      {/* Main Content */}
      <TabContent />

      {/* footer */}
      <footer className="flex justify-center">
        <p className="text-slate-400">
          Made with ❤️ by{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 underline"
          >
            Angkatan 2020
          </a>
          &nbsp;|&nbsp;
          Angkatan yang ga pernah masuk kampus
        </p>
      </footer>
    </main>
  );
}
