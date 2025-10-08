import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";


const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "Spendly",
  description: "One Stop Fianance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* {header} */}
        <Header />
        <main className="min-h-screen">

        {children}
        </main>
        <Toaster richColors/>
        {/* footer */}
        <footer className="bg-green-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>Made with 🤎 by Anushka </p>
          </div>
        </footer>
      </body>
    </html> 
    </ClerkProvider>
  );
}
