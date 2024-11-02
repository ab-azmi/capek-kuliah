import DownloadButton from "@/components/download-button";
import { TbFileTypeDocx, TbFileTypePdf } from "react-icons/tb";
import { FaGithub, FaBookOpen } from "react-icons/fa";

export default function TemplateDownload() {
  return (
    <div>
      <div className="flex flex-col gap-y-5">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">
            Download Template Dokumen Skripsi
          </h1>
          <p className="text-sm lg:text-lg text-slate-400">
            Anda dapat mengunduh template dokumen skripsi dalam format DOCX, PDF, dan terdapat juga link GitHub untuk template LaTeX! Terdapat juga link buku panduan untuk penulisan skripsi.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <DownloadButton 
            icon={<TbFileTypeDocx size={24} />}
            targetText="Download DOCX"
            filePath="/files/[v1.2] Template Proposal Skripsi_Ilmu Komputer_UNNES.docx"
            fileName="[v1.2] Template Proposal Skripsi_Ilmu Komputer_UNNES.docx"
          />
          <DownloadButton 
            icon={<TbFileTypePdf size={24} />}
            targetText="Download PDF"
            filePath="/files/[v1.2] Template Proposal Skripsi_Ilmu Komputer_UNNES.pdf"
            fileName="[v1.2] Template Proposal Skripsi_Ilmu Komputer_UNNES.pdf"
          />
          <DownloadButton 
            icon={<FaGithub size={24} />}
            targetText="LaTeX Template"
            link="https://github.com/ajienator/template-skripsi-latex-ilkom"
            isLink
          />
          <DownloadButton 
            icon={<FaBookOpen size={24} />}
            targetText="Buku Panduan"
            link="https://drive.google.com/file/d/1_xRw7AxbWcHzJ2ha9fKqERqiKS1W03qn/view"
            isLink
          />
        </div>
      </div>
    </div>
  );
}
