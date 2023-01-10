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
          <div className="mx-auto flex flex-col sm:flex-row justify-between">
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
                From a Doctor of Osteopathic Medicine candidate's words
              </h2>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Pulmonary: Although COVID-19 is asymptomatic for most, patients
                can get very sick with symptoms. In a study conducted in the
                United States, 20% of people with diagnosed COVID-19 developed
                acute respiratory distress syndrome, and 12.3% of them needed
                mechanical ventilation to stay alive. (See "Coronavirus disease
                2019 (COVID-19): Critical care and airway management issues",
                section on 'Clinical features in critically ill patients'.)
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Cardiovascular: Other complications arising from COVID-19
                infections also include heart-related issues, such as
                arrhythmias, acute cardiac injury, and shock—likely to do with
                the lung ventilation issues that could lead to hypoxia or the
                strong immune responses associated with COVID-19 infections
                [27,66,122,123]. One of the most surprising findings is an
                increase in risk for pulmonary embolism and acute stroke for
                those with COVID-19, even if they are under the age of 50. In a
                series of 21 severely ill patients admitted to the ICU in the
                United States, one-third developed cardiomyopathy [122].
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Thromboembolic complications, including pulmonary embolism and
                acute stroke (even in patients younger than 50 years of age
                without risk factors), have also been reported [124-130].
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Neuro: Encephalopathy, or disease affecting the brain, is also a
                common and unique side affect to the COVID-19 infection, with
                some studies reporting encephalopathy in up to a third of
                hospitalized patients. Out of all the neurological symptoms,
                loss of smell, inability to taste, and muscle weakness are
                common, while stroke, movement disorders, motor and sensory
                deficits, ataxia, and seizures occur less frequently.
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Inflammation: Some patients with severe COVID-19 have laboratory
                evidence of an exuberant inflammatory response, with persistent
                fevers, elevated inflammatory markers (eg, D-dimer, ferritin),
                and elevated proinflammatory cytokines; these laboratory
                abnormalities have been associated with critical and fatal
                illnesses [25,132,133].
              </li>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
