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
          <div className="mx-auto justify-center">
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
                Cold, Flu, and Covid-19
              </h2>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.covidbestpractices.com"
                >
                  https://www.covidbestpractices.com
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/healthcare-resources/pharmacies.html"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/healthcare-resources/pharmacies.html
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="http://www.ncpa.co/media/webinar/COVID-Personnel-and-Safety-Issues.pdf"
                >
                  http://www.ncpa.co/media/webinar/COVID-Personnel-and-Safety-Issues.pdf
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/ppe-strategy/burn-calculator.html"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/hcp/ppe-strategy/burn-calculator.html
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.avantinstitute.com/course?courseid=exclusivelighthouse"
                >
                  https://www.avantinstitute.com/course?courseid=exclusivelighthouse
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/niosh/topics/hcwcontrols/recommendedguidanceextuse.html#ref19"
                >
                  https://www.cdc.gov/niosh/topics/hcwcontrols/recommendedguidanceextuse.html#ref19
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="​https://www.cdc.gov/coronavirus/2019-ncov/hcp/ppe-strategy/decontamination-reuse-respirators.html"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/hcp/ppe-strategy/decontamination-reuse-respirators.html
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/hai/pdfs/ppe/ppe-sequence.pdf"
                >
                  https://www.cdc.gov/hai/pdfs/ppe/ppe-sequence.pdf
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/dotw/common-cold/index.html"
                >
                  https://www.cdc.gov/dotw/common-cold/index.html
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/flu/treatment/index.html"
                >
                  https://www.cdc.gov/flu/treatment/index.html
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/flu/about/keyfacts.htm"
                >
                  https://www.cdc.gov/flu/about/keyfacts.htm
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/treatments-for-severe-illness.html"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/your-health/treatments-for-severe-illness.html
                </a>
              </p>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                COPD
              </h2>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/copd/maps/docs/pdf/CA_COPDFactSheet.pdf"
                >
                  https://www.cdc.gov/copd/maps/docs/pdf/CA_COPDFactSheet.pdf
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://foundation.chestnet.org/patient-education-resources/copd/"
                >
                  https://foundation.chestnet.org/patient-education-resources/copd/
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="​https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#copd"
                >
                  ​
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#copd
                </a>
              </p>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                Diabetes
              </h2>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/diabetes/basics/quick-facts.html"
                >
                  https://www.cdc.gov/diabetes/basics/quick-facts.html
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.diabetes.org/covid-19-faq"
                >
                  https://www.diabetes.org/covid-19-faq
                </a>
              </p>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                Heart Failure
              </h2>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/dhdsp/data_statistics/fact_sheets/fs_heart_failure.htm"
                >
                  https://www.cdc.gov/dhdsp/data_statistics/fact_sheets/fs_heart_failure.htm
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cardiosmart.org/~/media/Images/Infographics/2016/Heart%20Failure%20resize.ashx"
                >
                  https://www.cardiosmart.org/~/media/Images/Infographics/2016/Heart%20Failure%20resize.ashx
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#heart-conditions"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#heart-conditions
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
                  href="https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/what-is-high-blood-pressure"
                >
                  https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/what-is-high-blood-pressure
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.heart.org/en/health-topics/high-blood-pressure/why-high-blood-pressure-is-a-silent-killer/what-are-the-symptoms-of-high-blood-pressure"
                >
                  https://www.heart.org/en/health-topics/high-blood-pressure/why-high-blood-pressure-is-a-silent-killer/what-are-the-symptoms-of-high-blood-pressure
                </a>
              </p>
              <p className="mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="http://www.onlinejacc.org/content/71/19/e127?_ga=2.23809855.468353801.1610422981-1909084498.1610422981"
                >
                  http://www.onlinejacc.org/content/71/19/e127?_ga=2.23809855.468353801.1610422981-1909084498.1610422981
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
                  href="https://www.nfid.org/infectious-diseases/pneumococcal-infographic/"
                >
                  https://www.nfid.org/infectious-diseases/pneumococcal-infographic/
                </a>
              </p>
              <p className="break-words mt-1.5 text-base tracking-tight text-slate-600">
                {" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.cdc.gov/globalhealth/immunization/infographic/pneumo.htm"
                >
                  https://www.cdc.gov/globalhealth/immunization/infographic/pneumo.htm
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
