import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function Inforgraphics() {
  return (
    <div id="main">
      <Header />
      <section id="infographics1" className="pt-10 pb-5 px-[10%]">
        <div className="pb-10 mx-auto max-w-7xl">
          <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Infographics for{" "}
            <span className="text-emerald-300"> Pharmacies </span>
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto flex flex-wrap flex-col gap-4 sm:flex-row justify-evenly">
            <div className="lg:max-w-[35%] pt-8">
              <a href="exposurepatient.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/exposurepatient.png"
                  alt="Covid 1"
                  width="765"
                  height="345"
                />
              </a>
            </div>
            <div className="lg:max-w-[35%] pt-8">
              <a href="exposurestaff.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/exposurestaff.png"
                  alt="Covid 2"
                  width="765"
                  height="345"
                />
              </a>
            </div>
            <div className="lg:max-w-[35%] pt-8">
              <a href="policyprocedure.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/policyprocedure.png"
                  alt="Covid 1"
                  width="765"
                  height="345"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="inforgraphics2" className="pb-10 px-[10%]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto flex flex-col gap-4 sm:flex-row justify-evenly">
            <div className="lg:max-w-[35%] pt-8">
              <a href="workflowstrat.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/workflowstrat.png"
                  alt="Covid 1"
                  width="765"
                  height="345"
                />
              </a>
            </div>
            <div className="lg:max-w-[35%] pt-8">
              <a href="patientcomm.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/patientcomm.png"
                  alt="Covid 1"
                  width="765"
                  height="345"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="inforgraphics3" className="pb-10 px-[10%]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto flex flex-col gap-4 sm:flex-row justify-evenly">
            <div className="lg:max-w-[35%] pt-8">
              <a href="mask1.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/mask1.png"
                  alt="Covid 1"
                  width="765"
                  height="345"
                />
              </a>
            </div>
            <div className="lg:max-w-[35%] pt-8">
              <a href="mask2.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/mask2.png"
                  alt="Covid 1"
                  width="765"
                  height="345"
                />
              </a>
            </div>
            <div className="lg:max-w-[35%] pt-8">
              <a href="mask3.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/mask3.png"
                  alt="Covid 1"
                  width="765"
                  height="345"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="inforgraphics4" className="pb-20 px-[10%]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto flex flex-nowrap flex-col gap-4 sm:flex-row justify-evenly">
            <div className="lg:max-w-[35%] pt-8">
              <a href="eyewear.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/eyewear.png"
                  alt="Covid 1"
                  width="765"
                  height="345"
                />
              </a>
            </div>
            <div className="lg:max-w-[35%] pt-8">
              <a href="bestpractice.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/bestpractice.png"
                  alt="Covid 2"
                  width="765"
                  height="345"
                />
              </a>
            </div>
            <div className="lg:max-w-[35%] pt-8">
              <a href="gloves.pdf" target="_blank" rel="noreferrer">
                <Image
                  src="/gloves.png"
                  alt="Covid 1"
                  width="765"
                  height="345"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
