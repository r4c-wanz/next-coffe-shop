import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100dvh-138px)]">{children}</div>
      <Footer />
    </div>
  );
}
