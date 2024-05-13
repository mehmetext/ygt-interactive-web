import Image from "next/image";

export default function HomePage() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-10">
      <Image src="/images/ygt-logo.png" alt="YGT" width={200} height={200} />
      <h1 className="max-w-lg text-center font-black text-5xl text-custom-orange">
        YAZILIM GELİŞTİRME TOPLULUĞU
      </h1>
    </main>
  );
}
