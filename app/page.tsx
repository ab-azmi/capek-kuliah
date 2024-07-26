import DashboardBoxes from "@/components/pages/dashboard-boxes";
import TabContent from "@/components/pages/tab-content";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-14 px-36 py-20">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-3xl font-bold">Panduan Skripsian ILKOM UNNES</h1>
          <p className=" text-lg text-slate-400">
            Dibuat berdasarkan pengalaman para sepuh yang lulus 14 smester
          </p>
        </div>
        <div className="flex justify-between">
          <Button>Request Update</Button>
          <p className="text-slate-400 italic">Updated 28 juli 2024</p>
        </div>
      </div>

      {/* Boxes */}
      <DashboardBoxes />

      {/* Main Content */}
      <TabContent />
    </main>
  );
}
