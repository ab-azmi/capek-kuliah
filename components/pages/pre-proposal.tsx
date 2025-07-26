"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { RevealRightCard, RevealLeftCard } from "../reveal"
import { Copy, User } from "lucide-react"
import { FormProvider, useForm } from "@/components/form-context"
import { FormFields } from "@/components/form-fields"

function TemplateCard({ title, text }: { title: string; text: string }) {
  const { toast } = useToast()
  const { replaceTemplate } = useForm()

  const processedText = replaceTemplate(text)

  const copyChat = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: "Template berhasil disalin",
          description: "Template sudah siap untuk dikirim",
        })
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err)
      })
  }

  return (
    <div className="mt-3 border rounded-lg p-4 bg-muted/50">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-sm">{title}</h4>
        <Button size="sm" variant="outline" onClick={() => copyChat(processedText)} className="h-8 px-2">
          <Copy className="h-3 w-3 mr-1" />
          Copy
        </Button>
      </div>
      <div className="text-sm text-muted-foreground bg-background rounded p-3 border">
        <pre className="whitespace-pre-wrap font-sans">{processedText}</pre>
      </div>
      {processedText.includes("{") && (
        <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
          <User className="h-3 w-3" />
          Masih ada data yang perlu diisi di form di atas
        </p>
      )}
    </div>
  )
}

function PreProposalContent() {
  const textMintaPembimbing = `Assalamualaikum Warahmatullahi Wabarakatuh. {greeting} {kaprodi}, mohon maaf mengganggu waktunya. Saya {nama} dengan NIM {nim}. Saya telah menuliskan topik dan judul skripsi saya di Sitedi, saya memohon bantuan Bapak untuk memasukkan {pembimbing} sebagai dosen pembimbing saya. Terima kasih, Pak. 🙏 Wassalamualaikum Wr. Wb.`

  const textMintaPenguji = `Assalamualaikum Warahmatullahi Wabarakatuh. {greeting} {kaprodi}, mohon maaf mengganggu waktunya. Saya {nama} dengan NIM {nim}. Izin menyampaikan bahwa saya telah mengisi formulir pendaftaran seminar proposal. Mohon arahannya terkait plotting dosen penguji saya, Pak. Terima kasih, Pak. 🙏 Wassalamualaikum Wr. Wb.`

  const textAturJadwalSempro = `Assalamualaikum Warahmatullahi Wabarakatuh. {greeting} Pak, mohon maaf mengganggu waktunya. Saya {nama} dengan NIM {nim}, {program} {angkatan}. Pada semester ini saya berencana untuk menyelesaikan Skripsi. Lalu sesuai arahan dari {kaprodi}, Bapak bersama dengan Pak {nama penguji lain} akan menjadi Penguji 1 dan Penguji 2 saya. Mohon bimbingannya Pak. Selain itu, kalau boleh tahu apa minggu depan Bapak ada waktu senggang untuk melaksanakan seminar proposal saya? Terima kasih, Pak. 🙏 Wassalamualaikum Wr. Wb.`

  return (
    <div>
      {/* Form Section */}
      <FormFields />

      {/* 1 */}
      <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
        <RevealLeftCard>
          <div className="flex gap-3">
            <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h1 className="text-2xl text-secondary font-bold">Mencari Judul Skripsi</h1>
              <p className=" text-slate-400">
                Jujur saja. Gapapa kok kalau belum bisa. Nanti <span className="line-through">kita</span> dosen bantu
              </p>
            </div>
          </div>
        </RevealLeftCard>

        <div className="col-span-2 flex flex-col gap-4">
          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Pilih 1 dosen pembimbing</h1>
            <p className=" text-slate-400">
              Coba pilih dan langsung hubungi dosen pembimbing. Konsultasi, minta rekomendasi judul, topik, atau
              permasalahan
            </p>
            <Link className={cn(buttonVariants(), "mt-3")} href={"/dosen"} target="_blank">
              List Dosen ILKOM
            </Link>
          </RevealRightCard>

          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Rencanakan Skripsi</h1>
            <p className=" text-slate-400">
              Mulai lakukan riset kecil-kecilan. Pelajari topik dan materi yang ditarget.
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>Baca artikel di jurnal</li>
              <li>Baca buku di perpus / rumah ilmu</li>
              <li>Baca skripsi kating</li>
              <li>Nonton tutorial di youtub</li>
            </ul>
            <Link
              className={cn(buttonVariants(), "mt-3")}
              href={"https://drive.google.com/drive/folders/1n2e53N97p_uQcralIwHUuALn8JiLQ34M?usp=sharing"}
              target="_blank"
            >
              Skripsi Kating
            </Link>
          </RevealRightCard>
        </div>
      </div>

      {/* 2 */}
      <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
        <RevealLeftCard>
          <div className="flex gap-3">
            <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h1 className="text-2xl text-secondary font-bold">Menulis Proposal Skripsi</h1>
              <p className=" text-slate-400">
                Ada yang nulis dari bab 3 ke bab 1, tapi banyak juga yang sebaliknya. Sesuaikan dg kemampuan.
              </p>
            </div>
          </div>
        </RevealLeftCard>

        <div className="col-span-2 flex flex-col gap-4">
          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Submit judul dan topik di Sitedi</h1>
            <p className=" text-slate-400">
              Hal ini adalah tanda bahwa kamu sudah yakin dengan judulmu dan akan lanjut ke tahap bimbingan rutin
            </p>
          </RevealRightCard>

          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Minta SK Pembimbing ke Ketua Jurusan (Kajur)</h1>
            <p className=" text-slate-400">
              Langkah ini bertujuan untuk memasangkan kamu dengan pembimbingmu secara resmi ke dalam sistem
            </p>
            <TemplateCard title="Template Chat untuk Minta SK Pembimbing" text={textMintaPembimbing} />
          </RevealRightCard>

          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Menulis Bab 1 sampai 3 Proposal</h1>
            <p className=" text-slate-400">
              Ikuti format penulisan yang ada pada buku panduan. Kalau masih bingung, lihat skripsi kating.
            </p>
            <Link
              className={cn(buttonVariants(), "mt-3")}
              href={"https://drive.google.com/file/d/1_xRw7AxbWcHzJ2ha9fKqERqiKS1W03qn/view"}
              target="_blank"
            >
              Buku Panduan 2024
            </Link>
          </RevealRightCard>
        </div>
      </div>

      {/* 3 */}
      <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
        <RevealLeftCard>
          <div className="flex gap-3">
            <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h1 className="text-2xl text-secondary font-bold">Melakukan bimbingan rutin</h1>
              <p className=" text-slate-400">Untuk bisa melakukan Seminar proposal, minimum bimbingan adalah 6x</p>
            </div>
          </div>
        </RevealLeftCard>

        <div className="col-span-2 flex flex-col gap-4">
          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Bimbingan sampai disetujui Sempro</h1>
            <p className=" text-slate-400">
              Biasanya tiap pembimbing memiliki grup yang berisi anak-anak bimbingannya. Kalau tidak ada grup, jangan
              sungkan untuk chat privat. Yang penting sopan.
            </p>
          </RevealRightCard>

          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Mengisi data bimbingan di Sitedi</h1>
            <p className=" text-slate-400">
              Jangan lupa mengisi data bimbingan di Sitedi. Hal ini penting untuk langkah kedepannya
            </p>
          </RevealRightCard>

          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Surat Persetujuan Siap Sempro</h1>
            <p className=" text-slate-400">
              Jika sudah disetujui pembimbing, minta tanda tangan dari dosen pembimbing yang menyatakan kamu sudah siap
              untuk mengikuti sempro
            </p>
            <Link
              className={cn(buttonVariants(), "mt-3")}
              href={"https://docs.google.com/document/d/1wnwPZ7ex_Bk--Xuy_DaW8MBNSki3d_J4bJE5QmwT5d0/edit?usp=sharing"}
              target="_blank"
            >
              Template Surat
            </Link>
          </RevealRightCard>
        </div>
      </div>

      {/* 4 */}
      <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
        <RevealLeftCard>
          <div className="flex gap-3">
            <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h1 className="text-2xl text-secondary font-bold">Persiapan Seminar Proposal</h1>
              <p className=" text-slate-400">Siapkan hal-hal berikut sebelum untuk mendaftar seminar proposal</p>
            </div>
          </div>
        </RevealLeftCard>

        <div className="col-span-2 flex flex-col gap-4">
          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Siapkan PPT Untuk Sempro</h1>
            <p className=" text-slate-400">
              Gunakan template PPT yang clean, minimalis, rapih, dan tidak membingungkan. Pastikan kalian paham materi,
              supaya tidak plonga-plongo
            </p>
            <Link
              className={cn(buttonVariants(), "mt-3")}
              href={"https://drive.google.com/drive/folders/1ZGv7nZMfNtFgvIj0nVKgf2Jp14sTPw5m?usp=sharing"}
              target="_blank"
            >
              Referensi PPT Kating
            </Link>
          </RevealRightCard>

          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Daftar Sempro via Google Form</h1>
            <p className=" text-slate-400">
              Scan surat persetujuan siap sempro dari langkah sebelumnya. Ini akan dibutuhkan oleh form pendaftaran.
            </p>
            <Button className="mt-3">
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSeOde8soyTfuxbcCEN2CFtEOhfDZU-5yvnLCHStGmYEItp-lQ/viewform"
                }
                target="_blank"
              >
                Google Form
              </Link>
            </Button>
          </RevealRightCard>

          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Minta Dipilihkan Dosen Penguji ke Kajur</h1>
            <p className=" text-slate-400">
              Chat ke Ketua Jurusan untuk dipilihkan dosen penguji. Mereka yang nantinya akan ngasih kamu nilai akhir
              skripsi
            </p>
            <TemplateCard title="Template Chat untuk Minta Dosen Penguji" text={textMintaPenguji} />
          </RevealRightCard>
        </div>
      </div>

      {/* 5 */}
      <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
        <RevealLeftCard>
          <div className="flex gap-3">
            <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
              5
            </div>
            <div>
              <h1 className="text-2xl text-secondary font-bold">Seminar Proposal</h1>
              <p className=" text-slate-400">Selanjutnya adalah mengatur jadwal pertemuan dan memesan ruang</p>
            </div>
          </div>
        </RevealLeftCard>

        <div className="col-span-2 flex flex-col gap-4">
          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Atur Jadwal Pertemuan Seminar</h1>
            <p className=" text-slate-400">
              Hubungi kedua dosen penguji secara privat. Jangan takut. Pastikan cocok juga dengan dosen pembimbing.
            </p>
            <TemplateCard title="Template Chat untuk Atur Jadwal Sempro" text={textAturJadwalSempro} />
          </RevealRightCard>

          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Pesan Ruangan untuk Sempro</h1>
            <p className="text-slate-400">
              Pesan ruangan bisa dilakukan melalui Google Form. Jangan lupa untuk konfirmasi ke pengurus Lab setelah
              mengisinya
            </p>
            <Link
              className={cn(buttonVariants(), "mt-3")}
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSerrc_Rosgy3LhtpKBSkJBZp7LM52Sf57ng1KS8w7-bEi4wcg/viewform?usp=send_form"
              }
              target="_blank"
            >
              Google Form
            </Link>
          </RevealRightCard>

          <RevealRightCard>
            <h1 className="text-2xl font-semibold">H-2 Sempro</h1>
            <p className=" text-slate-400">
              Ingatkan Dosen penguji dan pembimbing tentang jadwal Sempro. Tanyakan juga apakah mereka butuh file cetak
              atau cukup soft file.
            </p>
          </RevealRightCard>

          <RevealRightCard>
            <h1 className="text-2xl font-semibold">Sempro</h1>
            <p className=" text-slate-400">
              Siapkan Snack, Minum, ATK, dan keperluan lain sehari sebelum sempro. Semangat dan jangan plonga-plongo.
            </p>
          </RevealRightCard>
        </div>
      </div>
    </div>
  )
}

export default function PreProposal() {
  return (
    <FormProvider>
      <PreProposalContent />
    </FormProvider>
  )
}
