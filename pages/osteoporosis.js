import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function osteoporosis() {
  return (
    <div id="main">
      <Header />
      <section
        id="hero"
        className="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 text-center items-center justify-center py-20 px-[10%]"
      >
        <div>
          <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Osteoporosis
          </h1>
        </div>
        <div className="lg:max-w-[45%] pt-8">
          <a href="Osteoporosis.pdf" target="_blank" rel="noreferrer">
            <Image
              src="/Osteoporosis.png"
              alt="Covid 1"
              width="765"
              height="345"
            />
          </a>
          <div className="mx-auto flex flex-wrap flex-col sm:flex-row justify-around">
            <Link
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
              href="OstSpan.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Español
            </Link>
            <Link
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
              href="OstViet.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Tiếng Việt
            </Link>
            <Link
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
              href="OstChin.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Mandarin
            </Link>
            <Link
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
              href="OstKor.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Korean
            </Link>
            <Link
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
              href="OstTag.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Tagalog
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
