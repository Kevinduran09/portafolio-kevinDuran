import "./globals.css";
import { Header } from "./sections/Header";
import {Footer} from "./sections/Footer";
import { Rubik } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google';
const rubik = Rubik({
  subsets: ["latin"]
})
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Puedes agregar más pesos
  variable: '--font-plus-jakarta', // Variable CSS opcional
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative text-white'>
        <div className="fixed left-0 top-0 -z-10 h-full w-full "><div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-full sm:h-[1000px] sm:w-[1000px] bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div></div>
        <div className={`relative  h-screen ${plusJakartaSans.className} `}>
          <Header />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
