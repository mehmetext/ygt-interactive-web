export default function HesapMakinesiPage() {
  return (
    <main className="flex items-center justify-center">
      <div className="max-w-6xl container flex items-center justify-center p-20 gap-20">
        <div className="flex-1 bg-gray-200 shadow-xl rounded-xl p-10 gap-4 flex flex-col">
          <input
            type="number"
            className="rounded p-2"
            placeholder="1. sayıyı giriniz..."
          />
          <input
            type="number"
            className="rounded p-2"
            placeholder="2. sayıyı giriniz..."
          />
          <button className="flex items-center justify-center bg-custom-orange transition-colors hover:bg-custom-blue rounded p-2 text-white font-bold">
            HESAPLA
          </button>
          <div className="flex items-center gap-2">
            Sonuç: <b className="text-3xl">20</b>
          </div>
        </div>
        <div className="flex-1 bg-gradient-to-br from-custom-orange to-custom-blue rounded-xl p-10 text-white flex flex-col gap-2">
          <h2 className="font-bold text-3xl">Hesap Makinesi Örneği</h2>
          <p>
            Kodlardan butonun fonksiyonunu güncelleyerek değişiklikleri
            önizleyebilirsiniz...
          </p>
        </div>
      </div>
    </main>
  );
}
