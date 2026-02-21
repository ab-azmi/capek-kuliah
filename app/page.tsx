import DashboardBoxes from "@/components/pages/dashboard-boxes";
import TabContent from "@/components/pages/tab-content";
import HomeTitle from "@/components/home-title";
import ScrollProgress from "@/components/scroll-progress";
import ColyAqu from "@/components/coly-aqu";
import HelpDesk from "@/components/help-desk";
import TemplateDownload from "@/components/pages/template-download";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

      {/* Template Download */}
      <TemplateDownload />

      {/* Main Content */}
      <TabContent />

      {/* COLY AQU (CommonLY Ask QUestion)*/}
      <ColyAqu />

      {/* Helpdesk */}
      <HelpDesk />

      {/* footer */}
      <footer className="flex justify-center gap-3 text-slate-400">
        <p>Made with ❤️ by </p>
        <div className="flex items-center gap-2">
          <p>Auni S.Kom</p>
          <Link
            href="https://www.linkedin.com/in/ahmad-ramadhan-auni"
            target="_blank"
          >
            <FaLinkedin size={16} />
          </Link>
          <Link href="https://github.com/auni-st" target="_blank">
            <FaGithub size={16} />
          </Link>
        </div>
        &nbsp;|&nbsp;
        <div className="flex items-center gap-2">
          Azmi
          <Link
            href="https://www.linkedin.com/in/abdillah-azmi-4a2111232"
            target="_blank"
          >
            <FaLinkedin size={16} />
          </Link>
          <Link href="https://github.com/ab-azmi" target="_blank">
            <FaGithub size={16} />
          </Link>
        </div>
        &nbsp;|&nbsp;
        <div className="flex items-center gap-2">
          Faris S.Kom
          <Link href="https://linkedin.com/in/farisfaikar" target="_blank">
            <FaLinkedin size={16} />
          </Link>
          <Link href="https://github.com/farisfaikar" target="_blank">
            <FaGithub size={16} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
