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
      <section id="interprofessional education" className="py-20 px-[10%]">
        <div className="pb-10 mx-auto max-w-7xl">
          <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Information
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto flex flex-col sm:flex-row justify-between">
            <div className="lg:max-w-[45%]">
              <Image src="/covid1.png" alt="Covid 1" width="765" height="345" />
            </div>
            <div className="lg:max-w-[45%]">
              <Image src="/covid2.png" alt="Covid 2" width="765" height="345" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
