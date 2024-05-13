import Header from "./components/Header";

export default function ExamplesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
}
