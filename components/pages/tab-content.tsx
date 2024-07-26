import { Button } from "../ui/button";

export default function TabContent() {
    return (
        <div>
            <div className="flex flex-col gap-5">
                <div>
                    <h1 className="text-2xl font-bold">Tahap Pembuatan Skripsi</h1>
                    <p className=" text-lg text-slate-400">
                    Baca dari atas-kiri ke bawah-kanan. Langkah utama, di sebelah kiri
                    </p>
                </div>
                <div className="flex justify-between">
                    <Button>Request Update</Button>
                    <p className="text-slate-400 italic">Updated 28 juli 2024</p>
                </div>
            </div>


        </div>
    )
}