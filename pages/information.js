import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function Education() {
  return (
    <div id="main">
      <Header />
      <section id="information" className="py-20 px-[10%]">
        <div className="pb-10 mx-auto max-w-7xl">
          <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Information
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto flex flex-col sm:flex-row justify-between">
            <div className="lg:max-w-[45%] pt-8">
              <a href="covid1.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/covid1.png"
                  alt="Covid 1"
                  width="765"
                  height="345"
                />
              </a>
              <div className="mx-auto flex flex-wrap flex-col sm:flex-row justify-evenly">
                <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Español
                </Link>
                <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tiếng Việt
                </Link>
                <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mandarin
                </Link>
                <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Korean
                </Link>
                <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tagalog
                </Link>
              </div>
            </div>
            <div className="lg:max-w-[45%] pt-8">
              <a href="covid2.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/covid2.png"
                  alt="Covid 2"
                  width="765"
                  height="345"
                />
              </a>
              <div className="mx-auto flex flex-wrap flex-col sm:flex-row justify-evenly">
                <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Español
                </Link>
                <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tiếng Việt
                </Link>
                <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mandarin
                </Link>
                <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Korean
                </Link>
                <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-white hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tagalog
                </Link>
              </div>
            </div>
          </div>
          <h2 className="mx-auto mt-16 max-w-2xl text-lg text-center tracking-tight text-slate-700">
            For more information visit this{" "}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html"
            >
              website
            </a>{" "}
            .
          </h2>
        </div>
      </section>
      <Footer />
    </div>
  );
}
