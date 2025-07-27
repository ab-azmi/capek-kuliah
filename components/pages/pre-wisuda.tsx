"use client";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { CheckboxWithLabel } from "../checkbox-label";
import { cn } from "@/lib/utils";
import { RevealLeftCard, RevealRightCard } from "../reveal";
import TemplateCard from "@/components/template-card";

export default function PreWisuda() {
    const textRevisiPenguji = `Assalamualaikum Wr. Wb. {greeting} Pak, mohon maaf mengganggu waktu Pak. Saya {nama} dengan NIM {nim}, dari prodi {program}, angkatan {angkatan}, mahasiswa yang telah diuji oleh Bapak pada Sidang Skripsi. Saya izin bertanya, Pak. Apakah hari ini saya dapat menemui Bapak terkait revisi Skripsi saya? Terima kasih, Pak. 🙏 Wassalamualaikum Wr. Wb.`

    const textPamitGrup = `Assalamualaikum Wr. Wb. {greeting} Bapak/Ibu Dosen {program} Universitas Negeri Semarang, serta teman-teman semua. Saya {nama} dengan NIM {nim} angkatan {angkatan}. Mohon undur diri dari grup ini. Banyak terima kasih saya ucapkan untuk keluarga Ilmu Komputer atas ilmu pengetahuan, keterampilan dan kenangan-kenangan indahnya. Mohon maaf apabila terdapat salah tutur kata, tingkah laku yang kurang berkenan dan perilaku yang mengganggu kenyamanan. Terima kasih banyak, semoga kita diberikan nikmat sehat, rezeki yang melimpah dan selalu dalam lindungan Tuhan Yang Maha Esa. Terima kasih. 🙏 Wassalamualaikum Wr. Wb.`

    return (
        <div>
            {/* 11 */}
            <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
                <RevealLeftCard>
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            11
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Revisi Post-Sidang
                            </h1>
                            <p className="text-slate-400">
                                Setelah sidang, jangan jeda kelamaan. Langsung sat set
                            </p>
                        </div>
                    </div>
                </RevealLeftCard>
                <div className="col-span-2 flex flex-col gap-4">
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Bisa Mulai Menulis Artikel Di Sini
                        </h1>
                        <p className="text-slate-400">
                            Setelah skripsi selesai direvisi. Bisa lanjut menulis Artikel Di sini
                        </p>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Siapkan Lembar Pengesahan
                        </h1>
                        <p className="text-slate-400">
                            Surat ini sangat penting. Harus ditandatangani oleh kedua penguji dan pembimbing
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href="https://docs.google.com/document/d/1de_9v0jVdqGCahj6cGQIL5z_4D3oMan01RecHibKAZ0/edit"
                            target="_blank">
                            Template Surat
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Revisi Skripsi Ke Penguji 1
                        </h1>
                        <p className="text-slate-400">
                            Mekanismenya sama seperti saat bimbingan. Chat &rarr; Ketemu &rarr; Revisi &rarr; Repeat. Jangan lupa minta TTD lembar pengesahan jika sudah di ACC
                        </p>
                        <TemplateCard title="Template Chat untuk Minta Revisi dari Penguji 1" text={textRevisiPenguji} />
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Revisi Skripsi Ke Penguji 2
                        </h1>
                        <p className="text-slate-400">
                            Mekanismenya sama seperti saat bimbingan. Chat &rarr; Ketemu &rarr; Revisi &rarr; Repeat. Jangan lupa minta TTD lembar pengesahan jika sudah di ACC
                        </p>
                        <TemplateCard title="Template Chat untuk Minta Revisi dari Penguji 2" text={textRevisiPenguji} />
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            TTD Pengesahan Ke Pembimbing
                        </h1>
                        <p className="text-slate-400">
                            Lapor ke pembimbing bahwa kamu sudah menyelesaikan tahap revisi. Jangan lupa minta TTD lembar pengesahan.                        </p>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            TTD Pengesahan Ke Sekretaris Jurusan
                        </h1>
                        <p className="text-slate-400">
                            Minta tanda tangan ke sekretaris jurusan. TI dan SI berbeda. Perhatikan!
                        </p>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            TTD Pengesahan Ketua Penguji di Dekanat
                        </h1>
                        <p className="text-slate-400">
                            Serahkan lembar pengesahan dan Berkas Ujian yang telah ditandatangani full. Serahkan ke “Layanan MIPA” di dekanat. Biasanya bisa diambil lagi setelah 1 hari kerja
                        </p>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Cap Lembar Pengesahan di Dekanat
                        </h1>
                        <p className="text-slate-400">
                            Saat mengambil lembar pengesahan, jangan lupa untuk mencapnya di dekanat. Pastikan sudah di SCAN atau DUPLIKAT lembar pengesahan terlebih dahulu. Takutnya ada kesalahan
                        </p>
                    </RevealRightCard>
                </div>
            </div>
            {/* 12 */}
            <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
                <RevealLeftCard>
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            12
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Submit Artikel ke Jurnal
                            </h1>
                            <p className="text-slate-400">
                                Pastikan sudah tau mau submit di jurnal mana
                            </p>
                        </div>
                    </div>
                </RevealLeftCard>
                <div className="col-span-2 flex flex-col gap-4">
                    
                    <RevealRightCard>
                    <h1 className="text-2xl font-semibold">
                            Keterangan review Artikel by Pembimbing
                        </h1>
                        <p className="text-slate-400">
                            Sebelum submit jurnal, perlu minta keterangan bahwa artikel sudah direview oleh pembimbing.
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href="https://docs.google.com/document/d/19xccOgqrzvkq_ME4CiU7r4GQuZ2Kfjpx/edit?usp=sharing&ouid=111143122275288922275&rtpof=true&sd=true"
                            target="_blank">
                            Template Surat
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Submit Artikel Ke Jurnal
                        </h1>
                        <p className="text-slate-400">
                            Biasanya kalau TI submit di RJI, sedangkan SI submit di JAIST. 
                            Tapi coba tanyakan dulu ke pembimbing masing-masing.
                            Alurnya <span className="font-bold">Register - Submit Artikel - Isi Form Keterangan</span>
                        </p>
                        <div className="flex gap-2 mt-2">
                            <Link className={cn(buttonVariants(), 'mt-3 w-fit')} href="http://journal.unnes.ac.id/journals/rji"
                                target="_blank">
                                Submit RJI
                            </Link>
                            <Link className={cn(buttonVariants(), 'mt-3 w-fit')} href="http://bit.ly/keteranganRJI"
                                target="_blank">
                                Form Keterangan Telah Submit RJI
                            </Link>
                        </div>
                    </RevealRightCard>
                    
                </div>
            </div>
            {/* 13 */}
            <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
                <RevealLeftCard>
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            13
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Administrasi Skripsi
                            </h1>
                            <p className=" text-slate-400">
                                Persiapan untuk finalisasi dan cetak skripsi
                            </p>
                        </div>
                    </div>
                </RevealLeftCard>
                <div className="col-span-2 flex flex-col gap-4">
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Submit File Pendukung di Sitedi
                        </h1>
                        <p className=" text-slate-400">
                            Submit beberapa file berikut :
                        </p>
                        <div className="mt-3 flex flex-col gap-3">
                            <CheckboxWithLabel label="Abstrak" />
                            <CheckboxWithLabel label="Bab 1" />
                            <CheckboxWithLabel label="Bab 2" />
                            <CheckboxWithLabel label="Bab 3" />
                            <CheckboxWithLabel label="Bab 4" />
                            <CheckboxWithLabel label="Bab 5" />
                            <CheckboxWithLabel label="Lampiran" />
                            <CheckboxWithLabel label="Surat Bukti Submission atau File Artikel yang sudah terpublis" />
                            <CheckboxWithLabel label="Lembar Pengesahan yang dicap" />
                        </div>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Temui Kajur & Mengakhiri Masa Revisi
                        </h1>
                        <p className=" text-slate-400">
                            Temui Ketua Jurusan untuk memvalidasi nilai dan mengakhiri masa pengerjaan skripsi kamu.
                        </p>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Donasi Buku Baru seharga Rp50k++
                        </h1>
                        <p className=" text-slate-400">
                            Siapkan Buku baru dengan harga diatas 50 Ribu. Simpan notanya. Isi buku sesuaikan dengan jurusan masing-masing. Jangan random
                        </p>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Cetak Skripsi Hard Cover
                        </h1>
                        <p className=" text-slate-400">
                            Disarankan cetak di percetakan MIPA di bawah tangga, samping D5. Orangnya sudah paham & pengalamannya bagus
                        </p>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Serahkan Skripsi & Buku Donasi ke Perpus MIPA
                        </h1>
                        <p className=" text-slate-400">
                            Lokasi perpus di D3 Lt 1.
                        </p>
                    </RevealRightCard>
                </div>
            </div>
            {/* 14 */}
            <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
                <RevealLeftCard>
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            14
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                SBVT
                            </h1>
                            <p className=" text-slate-400">
                                Ngga tau arti SBVT apaan. Intinya ini proses terakhir sebelum wisuda
                            </p>
                        </div>

                    </div>
                </RevealLeftCard>
                <div className="col-span-2 flex flex-col gap-4">
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Isi Google Form Bebas Perpustakaan MIPA
                        </h1>
                        <p className=" text-slate-400">
                            Setelah mengisi kamu akan mendapatkan surat pernyataan bahwa kamu sudah tidak memiliki tanggungan pinjaman buku di perpus MIPA
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href="https://s.id/bebasperpustakaanfmipa"
                            target="_blank">
                            Google Form
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Form Bebas Perpustakaan Rumah Ilmu
                        </h1>
                        <p className=" text-slate-400">
                            Setelah mengisi kamu akan mendapatkan surat pernyataan bahwa kamu sudah tidak memiliki tanggungan pinjaman buku di perpus Rumil
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href="https://docs.google.com/forms/d/e/1FAIpQLSdpIwJR00PWjsQRp1OU5HGaDVBHJ2MJtFOLmsBREdd14P21Zg/viewform"
                            target="_blank">
                            Google Form
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Form Bebas Laboratorium
                        </h1>
                        <p className=" text-slate-400">
                            Setelah mengisi kamu akan mendapatkan surat pernyataan bahwa kamu sudah tidak memiliki tanggungan alat lab. Surat ini biasanya agak lama
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href="https://docs.google.com/forms/d/e/1FAIpQLSfdOOZ3X5OjALiN5o_3SK7hsjw1xPHCyqTqij1qFhfrKGozUw/viewform"
                            target="_blank">
                            Google Form
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Mengisi Data Identitas Wisuda di Sikadu
                        </h1>
                        <p className=" text-slate-400">
                            Isilah form pada menu Sikadu &rarr; Paska Perkuliahan &rarr; Upload Bukti Identitas Wisuda
                        </p>
                        <div className="mt-3 flex flex-col gap-3">
                            <CheckboxWithLabel label="Scan KTP" />
                            <CheckboxWithLabel label="Scan Ijazah SMA/SMK" />
                            <CheckboxWithLabel label="Pass foto 3x4 (Perhatikan ketentuannya)" />
                        </div>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Isi Google Form SBVT
                        </h1>
                        <p className=" text-slate-400">
                            Form terakhir nih
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href="https://docs.google.com/forms/d/e/1FAIpQLScoEtGc8Gy4eAqo2TI3Y5Y2oIXvsqg8z3icxvoeZA4WXc3fRw/viewform"
                            target="_blank">
                            Google Form
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Persiapan sebelum menemui Ketua Jurusan
                        </h1>
                        <p className=" text-slate-400">
                            Saat menemui kajur, anda akan diberi beberapa pertanyaan nyeleneh. Jadi persiapkan beberapa hal berikut.
                        </p>
                        <div className="mt-3 flex flex-col gap-3">
                            <CheckboxWithLabel label="Nama Perusahaan (Jika kerja)" />
                            <CheckboxWithLabel label="Alamat Perusahaan (Jika kerja)" />
                            <CheckboxWithLabel label="Nama & Kontak Owner Perusahaan (Jika kerja)" />
                            <CheckboxWithLabel label="Fokus & Produk Perusahaan (Jika kerja)" />
                            <CheckboxWithLabel label="Range penghasilan (Jika kerja)" />
                            <CheckboxWithLabel label="Dapat informasi seputar UNNES dari mana?" />
                            <CheckboxWithLabel label="Is Coming..." />
                        </div>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Temui Ketua Jurusan Untuk Konfirmasi SBVT
                        </h1>
                        <p className=" text-slate-400">
                            Temui Ketua Jurusan dan bilang bahwa kamu sudah mengisi Form SBVT
                        </p>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Pamitan di Grup Keluarga Besar TI
                        </h1>
                        <p className=" text-slate-400">
                            Kamu bisa keluar dan pamitan dengan teman-teman kamu di grup
                        </p>
                        <TemplateCard title="Template Chat untuk Pamitan dari Grup" text={textPamitGrup} />
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Selesai. Kamu Lulus
                        </h1>
                    </RevealRightCard>
                </div>
            </div>

        </div>
    )
}
