import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-10">
      <div className="max-w-4xl container flex flex-col items-center justify-center gap-10">
        <Image src="/images/ygt-logo.png" alt="YGT" width={200} height={200} />
        <h1 className="max-w-lg text-center font-black text-5xl text-custom-orange">
          YAZILIM GELİŞTİRME TOPLULUĞU
        </h1>
        <div className="w-full flex flex-col gap-4">
          <Link
            href="/hesap-makinesi"
            className="flex items-center justify-center bg-custom-orange transition-colors hover:bg-custom-blue rounded p-4 text-white font-bold"
          >
            HESAP MAKİNESİ
          </Link>
        </div>
      </div>
    </main>
  );
}
