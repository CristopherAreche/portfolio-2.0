import "./globals.css";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Cristopher | Front-End Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-dark_bg">
        <Providers>
          <Toaster position="top-center" />

          {children}
        </Providers>
      </body>
    </html>
  );
}
