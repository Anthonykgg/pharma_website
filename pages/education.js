import Image from "next/image";
import dynamic from "next/dynamic";
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
            Interprofessional{" "}
            <span className="text-emerald-300"> Education </span>
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto flex flex-col sm:flex-row justify-between">
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                From a Doctor of Physical Therapy candidates words
              </h2>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                High blood pressure is something PTs must take into
                consideration when treating patients. PTs are movement
                specialists, and our job is to get people moving. When it comes
                to acute care settings (in-patient hospitals, ICUs, SNFs, etc.),
                blood pressure is taken before, during, and after most
                treatments.
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Asthma treatment through PT can vary for each patient. Treatment
                options focus on improving the quality of breathing or the
                efficiency. Breathing techniques can be practiced and
                prescribed, such as diaphragmatic breathing or pursed lip
                breathing. The muscles used for breathing can be strengthened
                through neuromuscular education, using a device that provides a
                resistive load against inspiration, or even aquatic exercise.
                The water in a pool will provide resistance against inspiration,
                but this will need to be monitored as it can be too restricting
                on patients especially if they already had breathing
                difficulties.
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Other considerations for asthma treatment are if the patient has
                mucus build up in their respiratory system. There are percussive
                treatments and postural drainage techniques that PTs can use to
                help clear the lungs based on where the mucus has built up.
                There are also techniques to help the patient cough most
                effectively to clear mucus. One such way is using a very quick
                cryotherapy application. Taking an ice cube in a quick swipe to
                the patient's back can cause the expiratory muscles to fire and
                produce a cough.
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Lifestyle changes for patients with asthma include limiting
                exposure to respiratory irritants, like dust, smoke, pet dander,
                etc. Postural education and correction can also benefit those
                with asthma. Poor posture can limit the ability of the
                respiratory muscle to function properly/efficiently and can
                limit the amount that the lungs can expand while breathing. This
                can include stretching tight muscles and joints and
                strengthening others, depending on the presentation of the
                patient.
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                We have not had much discussion on COVID-19 specific treatments
                within the realm of physical therapy. Assisting patients in
                sitting, standing, and walking as tolerated will benefit their
                condition or at least limit the negative impact of symptomatic
                COVID-19.
              </li>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                From a Doctor of Osteopathic Medicine candidates words
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
