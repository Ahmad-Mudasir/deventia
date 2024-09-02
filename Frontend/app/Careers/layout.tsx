import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { AppWrapper } from "@/app/context/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1750px] mx-auto">
      <Navbar />
      <AppWrapper>{children}</AppWrapper>
      <Footer />
    </div>
  );
}
