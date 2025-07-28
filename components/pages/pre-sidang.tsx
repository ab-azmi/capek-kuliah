"use client"
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { CheckboxWithLabel } from "../checkbox-label";
import TemplateChat from "@/components/template-chat";
import { cn } from "@/lib/utils";
import { RevealLeftCard, RevealRightCard } from "../reveal";

export default function PreSidang() {
    const textAturJadwalSidang = `Assalamualaikum Wr. Wb. {greeting} Pak, mohon maaf mengganggu waktunya. Saya {nama} dengan NIM {nim}. Saya menghubungi berkaitan dengan Sidang Skripsi. Sebagai penguji 1 saya, apakah Pak punya waktu luang minggu depan untuk melaksanakan Sidang Skripsi? Terima kasih, Pak. Wassalamualaikum Wr. Wb. 🙏`

    const textKonfirmasiSidang = `Assalamualaikum Wr. Wb. {greeting} {kaprodi}, mohon maaf mengganggu waktunya. Saya {nama} dengan NIM {nim}. Izin menyampaikan dan memberikan konfirmasi bahwa saya telah mengisi formulir pendaftaran Sidang Skripsi. Saya memohon arahan Pak terkait SK penguji supaya saya dapat melaksanakan Sidang Skripsi, Pak. Terima kasih, Pak. Wassalamualaikum Wr. Wb. 🙏`

    return (
        <div>
            {/* 6 */}
            <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
                <RevealLeftCard>
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            6
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Melakukan Bimbingan Rutin
                            </h1>
                            <p className=" text-slate-400">
                                Setelah sempro, jangan jeda kelamaan. Langsung sat set
                            </p>
                        </div>
                    </div>
                </RevealLeftCard>
                <div className="col-span-2 flex flex-col gap-4">
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Revisi Proposal dan Menulis Bab 4 & 5
                        </h1>
                        <p className=" text-slate-400">
                            Sesuai {' '}
                            <span className="text-pink-500 dark:text-pink-300">
                                Edaran WR 1 Nomor B/5484/UN37/KR.01.02/2025
                            </span> {' '}
                            Untuk mengikuti sidang skripsi, kamu harus melakukan bimbingan sebanyak 
                            {' '}<span className="text-pink-500 dark:text-pink-300">16x</span>. 
                            Jangan lupa input data bimbingan ke Sitedi.
                        </p>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Bisa Mulai Menulis Artikel Di tahap ini
                        </h1>
                        <p className=" text-slate-400">
                            Selain menulis Bab 4 dan 5, kamu juga bisa mulai menulis artikel skripsi disini. Atau bisa juga nanti setelah sidang.
                        </p>

                    </RevealRightCard>
                </div>
            </div>
            {/* 7 */}
            <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
                <RevealLeftCard>
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            7
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Disetujui Mengikuti Sidang Skripsi
                            </h1>
                            <p className=" text-slate-400">
                                Selamat sudah disetujui sidang
                            </p>
                        </div>
                    </div>
                </RevealLeftCard>
                <div className="col-span-2 flex flex-col gap-4">
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Surat Persetujuan Pembimbing
                        </h1>
                        <p className=" text-slate-400">
                            Setelah disetujui, minta tanda tangan persetujuan sidang dari pembimbingmu.
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href="https://docs.google.com/document/d/1QlrtHgzBr0-vZKFQduJzbMPZ36_4BY0TR3pUwixkHYM/edit?usp=sharing"
                            target="_blank">
                            Template Surat
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Atur Jadwal Pertemuan Sidang
                        </h1>
                        <p className=" text-slate-400">
                            Hubungi kedua dosen penguji secara privat. Jangan takut. Pastikan cocok juga dengan dosen pembimbing.
                        </p>
                        <TemplateChat title="Template Chat untuk Atur Jadwal Sidang" text={textAturJadwalSidang} />
                    </RevealRightCard>
                </div>
            </div>
            {/* 8 */}
            <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
                <RevealLeftCard>
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            8
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Berkas Sidang
                            </h1>
                            <p className=" text-slate-400">
                                Berkas untuk sidang ini lebih banyak dari sempro. Jangan sampai salah baca. Yang teliti.
                            </p>
                        </div>
                    </div>
                </RevealLeftCard>
                <div className="col-span-2 flex flex-col gap-4">
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Persiapan Berkas
                        </h1>
                        <p className=" text-slate-400">
                            Setelah disetujui, minta tanda tangan persetujuan sidang dari pembimbingmu.
                        </p>
                        <div className="mt-3 flex flex-col gap-3">
                            <CheckboxWithLabel label="Scan KTM" />
                            <CheckboxWithLabel label="Scan Rekap Hasil Studi (Sikadu)" />
                            <CheckboxWithLabel label="Scan KRS (Sikadu)" />
                            <CheckboxWithLabel label="Scan Bukti Pembayaran UKT Terakhir" />
                            <CheckboxWithLabel label="Scan Sertifikat KKL (Kuliah Kerja Lapangan)" />
                            <CheckboxWithLabel label="Scan Sertifikat TOEFL dengan skor min 427" />
                            <CheckboxWithLabel label="Scan Sertifikat SNIK" />
                            <CheckboxWithLabel label="Scan Sertifikat Course" />
                            <CheckboxWithLabel label="Scan Sertifikat Kompre" />
                            <CheckboxWithLabel label="Scan SK Pembimbing" />
                        </div>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Surat Usulan Pengujian
                        </h1>
                        <p className=" text-slate-400">
                            Surat ini berguna untuk mengajukan jadwal sidang. Butuh TTD oleh Ketua Jurusan dan Pembimbing
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href="https://docs.google.com/document/d/1SAUGW2A2OBb2DcUiXpZqVvt7_K4KQcgNyLospTpkGzg/edit?usp=sharing" target="_blank">
                            Template Surat
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Surat Rekap Bimbingan
                        </h1>
                        <p className=" text-slate-400">
                            Surat ini berfungsi untuk merekap aktivitas bimbingan kamu. Akan ditandatangani oleh Ketua Jurusan. <span className="text-pink-500 dark:text-pink-300">(Jangan edit di Gdocs, templatenya bisa rusak)</span>
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href="https://drive.google.com/file/d/1yXvy06EWOs35j5x3ZTVNBagrRfdJYc-6/view?usp=sharing" target="_blank">
                            Template Surat
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Surat Identitas
                        </h1>
                        <p className=" text-slate-400">
                            Surat ini isinya identitas kalian. Udah, itu aja
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href={'https://docs.google.com/document/d/1aKK7pkVcHEKuO_cbcwilPoVr-dN9h3_9wRji-DuVWiQ/edit?usp=sharing'} target="_blank">
                            Template Surat
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Submit Skripsi Kalian ke Turnitin UNNES
                        </h1>
                        <p className=" text-slate-400">
                            Ini hal penting. Wajib kalian isi. Jadi syarat wajib dalam SBVT nanti
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href={'https://docs.google.com/forms/d/e/1FAIpQLSfTC_U35YRgZ2zBQQKE-c8B1bypPQb_yBly7y77ruNfkEkmmQ/viewform'} target="_blank">
                            Google Form
                        </Link>
                    </RevealRightCard>
                </div>
            </div>
            {/* 9 */}
            <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
                <RevealLeftCard>
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            9
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Mendaftar Sidang
                            </h1>
                            <p className=" text-slate-400">
                                Mantap. Sudah sampai level 9. Semangat untuk persiapan sidangnya.
                            </p>
                        </div>
                    </div>
                </RevealLeftCard>
                <div className="col-span-2 flex flex-col gap-4">
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Mengisi Form Pendaftaran Sidang
                        </h1>
                        <p className=" text-slate-400">
                            Isi form dengan cermat dan jangan sampai salah
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href="http://bit.ly/daftarujianilkom" target="_blank">
                            Google Form
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Konfirmasi ke Ketua Jurusan
                        </h1>
                        <p className=" text-slate-400">
                            Setelah mengisi form, konfirmasi ke Kajur supaya mendapatkan file “Berkas Ujian”. Simpan file tersebut
                        </p>
                        <TemplateChat title="Template Chat untuk Konfirmasi Sidang" text={textKonfirmasiSidang} />
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Pemesanan Ruang Sidang
                        </h1>
                        <p className=" text-slate-400">
                            Jangan lupa untuk melakukan konfirmasi pemesanan ruang sidang ke Teknisi Lab
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href={"https://docs.google.com/forms/d/e/1FAIpQLSerrc_Rosgy3LhtpKBSkJBZp7LM52Sf57ng1KS8w7-bEi4wcg/viewform?usp=send_form"} target="_blank">
                            Google Form
                        </Link>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Pemesanan Konsumsi Sidang
                        </h1>
                        <p className=" text-slate-400">
                            Mulai 2025, Snack atau jamuan untuk penguji sidang sudah disediakan kampus.
                            Usahakan H-3 Sudah pesan konsumsi ke FMIPA
                        </p>
                        <Link className={cn(buttonVariants(), 'mt-3')} href="http://s.id/KonsumsiTugasAkhirFMIPA" target="_blank">
                            Google Form
                        </Link>
                    </RevealRightCard>
                </div>
            </div>
            {/* 10 */}
            <div className="py-5 flex flex-col md:grid md:grid-cols-3 gap-4">
                <RevealLeftCard>
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            10
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Sidang
                            </h1>
                            <p className=" text-slate-400">
                                Mantap. Sudah sampai level 9. Semangat untuk persiapan sidangnya.
                            </p>
                        </div>
                    </div>
                </RevealLeftCard>
                <div className="col-span-2 flex flex-col gap-4">
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Perisapan Sidang
                        </h1>
                        <p className=" text-slate-400">
                            Kumpulkan hal-hal yang diperlukan saat sidang. Jangan lupa belajar presentasi.
                        </p>
                        <div className="mt-3 flex flex-col gap-3">
                            <CheckboxWithLabel label="PPT Sidang" />
                            <CheckboxWithLabel label="Snack dan Minum" />
                            <CheckboxWithLabel label="Alat Tulis" />
                            <CheckboxWithLabel label="Cetak file Berkas Ujian" />
                        </div>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            H-1 Sidang
                        </h1>
                        <p className=" text-slate-400">
                            Jangan lupa untuk mengingatkan Dosen terkait jadwal sidang mu. Supaya mereka tidak lupa
                        </p>
                    </RevealRightCard>
                    <RevealRightCard>
                        <h1 className="text-2xl font-semibold">
                            Sidang
                        </h1>
                        <p className=" text-slate-400">
                            Semarangat sidangnya !
                        </p>
                    </RevealRightCard>
                </div>
            </div>
        </div>
    )
}
