import Image from "next/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function References() {
  return (
    <div id="main">
      <Header />
      <section id="interprofessional education" className="py-20 px-[10%]">
        <div className="pb-10 mx-auto max-w-7xl">
          <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            References
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto flex flex-wrap flex-col sm:flex-row justify-between">
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                Asthma
              </h2>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma"
                >
                  https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/asthma/default.htm"
                >
                  https://www.cdc.gov/asthma/default.htm
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653"
                >
                  https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.nhlbi.nih.gov/health-topics/asthma"
                >
                  https://www.nhlbi.nih.gov/health-topics/asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma
                </a>
              </p>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                Cold v. Flu v. Covid-19
              </h2>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma"
                >
                  https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/asthma/default.htm"
                >
                  https://www.cdc.gov/asthma/default.htm
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653"
                >
                  https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.nhlbi.nih.gov/health-topics/asthma"
                >
                  https://www.nhlbi.nih.gov/health-topics/asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma
                </a>
              </p>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                COPD
              </h2>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma"
                >
                  https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/asthma/default.htm"
                >
                  https://www.cdc.gov/asthma/default.htm
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653"
                >
                  https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.nhlbi.nih.gov/health-topics/asthma"
                >
                  https://www.nhlbi.nih.gov/health-topics/asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma
                </a>
              </p>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                Diabetes
              </h2>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma"
                >
                  https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/asthma/default.htm"
                >
                  https://www.cdc.gov/asthma/default.htm
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653"
                >
                  https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.nhlbi.nih.gov/health-topics/asthma"
                >
                  https://www.nhlbi.nih.gov/health-topics/asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma
                </a>
              </p>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                Heart Failure
              </h2>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma"
                >
                  https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/asthma/default.htm"
                >
                  https://www.cdc.gov/asthma/default.htm
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653"
                >
                  https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.nhlbi.nih.gov/health-topics/asthma"
                >
                  https://www.nhlbi.nih.gov/health-topics/asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma
                </a>
              </p>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                High Blood Pressure
              </h2>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma"
                >
                  https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/asthma/default.htm"
                >
                  https://www.cdc.gov/asthma/default.htm
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653"
                >
                  https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.nhlbi.nih.gov/health-topics/asthma"
                >
                  https://www.nhlbi.nih.gov/health-topics/asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma
                </a>
              </p>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                High Cholesterol
              </h2>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma"
                >
                  https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/asthma/default.htm"
                >
                  https://www.cdc.gov/asthma/default.htm
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653"
                >
                  https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.nhlbi.nih.gov/health-topics/asthma"
                >
                  https://www.nhlbi.nih.gov/health-topics/asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma
                </a>
              </p>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                Osteoporosis
              </h2>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma"
                >
                  https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/asthma/default.htm"
                >
                  https://www.cdc.gov/asthma/default.htm
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653"
                >
                  https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.nhlbi.nih.gov/health-topics/asthma"
                >
                  https://www.nhlbi.nih.gov/health-topics/asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma
                </a>
              </p>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                Pneumonia
              </h2>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma"
                >
                  https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/learn-about-asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/asthma/default.htm"
                >
                  https://www.cdc.gov/asthma/default.htm
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653"
                >
                  https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.nhlbi.nih.gov/health-topics/asthma"
                >
                  https://www.nhlbi.nih.gov/health-topics/asthma
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
