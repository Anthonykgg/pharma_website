import Image from "next/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function Contact() {
  return (
    <div id="main">
      <Header />
      <section
        id="hero"
        className="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center items-center justify-center lg:pt-32"
      >
        <div>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Contact
            <span className="text-emerald-300"> Us </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            For any questions or inquiries about the resources or information
            presented on this website, feel free to contact WesternU AMCP at{" "}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="mailto:amcpclub@westernu.edu"
            >
              amcpclub@westernu.edu
            </a>{" "}
            or our WesternU AMCP pharmacist advisors:
          </p>
        </div>
      </section>
      <section
        id="student_chapter"
        className="py-20 px-[10%] bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-blue-400 to-emerald-400"
      >
        <div className="flex flex-col lg:flex-row justify-center mx-auto max-w-7xl">
          <div className="lg:max-w-[50%] pt-16 text-white">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Dr. Micah Hata
            </h2>
            <p className="mt-4 text-lg tracking-tight text-white sm:max-w-[80%]">
              Associate Professor of Pharmacy Practice and Administration
            </p>
            <p className="mt-4 text-lg tracking-tight text-white sm:max-w-[80%]">
              Western University of Health Sciences College of Pharmacy
            </p>
            <p className="mt-4 text-lg tracking-tight text-white sm:max-w-[80%]">
              Email:{" "}
              <a
                className="underline"
                target="_blank"
                rel="noreferrer"
                href="mailto:mhata@westernu.edu"
              >
                mhata@westernu.edu
              </a>{" "}
            </p>
          </div>
          <div className="lg:max-w-[20%] pt-8">
            <Image
              src="/professor.jpg"
              alt="professor picture"
              className="rounded-lg"
              width="765"
              height="345"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
