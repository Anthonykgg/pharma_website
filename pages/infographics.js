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
            Infographics for{" "}
            <span className="text-emerald-300"> Pharmacies </span>
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto flex flex-col sm:flex-row justify-between">
            <div className="lg:max-w-[45%] pt-8">
              <Image src="/covid1.png" alt="Covid 1" width="765" height="345" />
              <div className="mx-auto flex flex-wrap flex-col sm:flex-row justify-evenly"></div>
            </div>
            <div className="lg:max-w-[45%] pt-8">
              <Image src="/covid2.png" alt="Covid 2" width="765" height="345" />
              <div className="mx-auto flex flex-wrap flex-col sm:flex-row justify-evenly"></div>
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
