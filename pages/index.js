import Image from "next/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function Home() {
  return (
    <div id="main">
      <Header />
      <section
        id="hero"
        class="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center items-center justify-center lg:pt-32"
      >
        <div>
          <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Welcome to the
            <span class="text-emerald-300"> WesternU AMCP </span>
            Health Helper!
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            The AMCP Health Helper website was established in 2020 by the
            Research and Education Committee of the WesternU AMCP Student
            Chapter. Our goal is to empower patients to take control of their
            health by providing patients resources ranging from flyers about
            common diseases to links to useful healthcare websites.
          </p>
        </div>
        <div class="w-[90%] sm:w-[50%] my-10">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=SleKuPjxZjE"
            width="auto"
          />
        </div>
      </section>
      <section
        id="student_chapter"
        class="py-20 px-[10%] bg-gradient-to-r from-emerald-300 to-cyan-500"
      >
        <div class="flex flex-col lg:flex-row justify-evenly mx-auto max-w-7xl">
          <div class="lg:max-w-[50%] text-white">
            <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
              WesternU AMCP Student Chapter
            </h2>
            <p class="mt-4 text-lg tracking-tight text-white">
              Make sure to visit{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.amcpwesternu.weebly.com"
              >
                amcpwesternu.weebly.com
              </a>{" "}
              for more information about what our chapter entails.
            </p>
            <a
              class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10 mb-10 lg:mb-0"
              href="http://www.amcpwesternu.weebly.com"
            >
              Visit our website
            </a>
          </div>
          <div class="lg:max-w-[45%]">
            <Image
              src="/amcp_website.png"
              alt="AMCP Website"
              width="765"
              height="345"
            />
          </div>
        </div>
      </section>
      <section id="contact-us" class="relative overflow-hidden py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="font-display text-3xl tracking-tight text-black sm:text-4xl">
              Get started today
            </h2>
            <p class="mt-4 text-lg tracking-tight text-black">
              It’s time to take control of your health. You can contact us with
              any inquiries or to schedule a vaccine.
            </p>
            <a
              class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-small font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
              href="/register"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
