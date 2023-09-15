import Footer from "@/components/Footer";
import Headernav from "@/components/Header";
import { Karla, Montserrat } from "@next/font/google";
const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });
export default function RootLayout({
    
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Headernav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
