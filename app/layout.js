import Footer from "./components/shared/Footer";
import Navbars from "./components/shared/Navbars";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbars />
        {children}
        <Footer />
      </body>
    </html>
  );
}
