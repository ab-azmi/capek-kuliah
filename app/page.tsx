import DashboardBoxes from "@/components/pages/dashboard-boxes";
import TabContent from "@/components/pages/tab-content";
import HomeTitle from "@/components/home-title";
import ScrollProgress from "@/components/scroll-progress";
import ColyAqu from "@/components/coly-aqu";
import HelpDesk from "@/components/help-desk";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 lg:gap-14 px-4 md:px-20 lg:px-36 py-5 lg:py-20 relative overflow-hidden">
      <ScrollProgress />
      <div className="flex flex-col-reverse lg:flex-row  justify-between items-center gap-5">
        {/* Home Title */}
        <HomeTitle />
      </div>

      {/* Boxes */}
      <DashboardBoxes />

      {/* Main Content */}
      <TabContent />

      {/* COLY AQU (CommonLY Ask QUestion)*/}
      <ColyAqu/>

      {/* Helpdesk */}
      <HelpDesk/>

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
