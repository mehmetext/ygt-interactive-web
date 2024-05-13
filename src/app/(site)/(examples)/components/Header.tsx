import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center py-4 bg-white shadow-lg">
      <div className="container flex">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/ygt-logo.png" alt="YGT" width={36} height={36} />
          <h2 className="font-black text-2xl text-custom-orange">
            YAZILIM GELİŞTİRME TOPLULUĞU
          </h2>
        </Link>
      </div>
    </header>
  );
}
