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
                From the words of a Registered Nurse with Masters of Nursing
                Degree
              </h2>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Main factors of medication adherence: health literacy,
                organizational health literacy, and health equity. Disease
                stigma also contributes to less help-seeking behaviors & poorer
                health outcomes, especially within high risk individuals who
                don&apos;t seek out medical diagnoses or treatment for diseases
                such as mental health disorders, HIV infection, or substance use
                disorders.
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                To spread awareness of medication adherence: increase health
                literacy through health promotion, primary and secondary
                prevention strategies such as health fairs with free health
                screenings, and educational tools for health promotion such as
                community outreach events for the public.
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Medication adherence reduces the impact of a disease, prevents
                long-term damage and can be part of a treatment plan to return
                people to their original health. When patients do not take their
                medication for diseases such as diabetes, hypertension, or
                hyperlipidemia it often results in frequent medical emergencies,
                permanent disability, and eventually premature death. When
                patients adhere to their medication regimen it allows healthcare
                professionals to focus on preventative treatment versus
                emergency treatment.
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Interprofessional collaboration allows for the treatment of the
                whole person. Utilizing dietary, nursing, PCP, pharmacy,
                spiritual guidance counselors, mental health counselors,
                pharmacy will allow for any hurdles keeping the patient from
                obtaining their goals of healing to be identified and addressed.
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Tips to improve adherence: finding a system and routine that
                works best for you, putting medications in a safe spot that is
                easily visible, setting alarms, and ensuring medications are
                getting refilled by utilizing the pharmacy&apos;s reminder
                system.
              </li>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Do not let yourself run low or out of medication. For some
                people their motivation is being alive and healthy for their
                loved ones. I like to remind them of how their adherence to
                medication regimen will help them meet that goal.
              </li>
            </div>
            <div className="sm:w-[45%]">
              <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-600">
                From a Doctor of Osteopathic Medicine candidate&apos;s words
              </h2>
              <li className="mt-1.5 text-base tracking-tight text-slate-600">
                Pulmonary: Although COVID-19 is asymptomatic for most, patients
                can get very sick with symptoms. In a study conducted in the
                United States, 20% of people with diagnosed COVID-19 developed
                acute respiratory distress syndrome, and 12.3% of them needed
                mechanical ventilation to stay alive. (See &quot;Coronavirus
                disease 2019 (COVID-19): Critical care and airway management
                issues&quot;, section on &apos;Clinical features in critically
                ill patients&apos;.)
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
      <section
        id="interprofessional education"
        className="py-20 px-[10%] bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-blue-400 to-emerald-400"
      >
        <div className="mx-auto flex flex-col sm:flex-row justify-between">
          <div className="sm:w-[45%]">
            <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-200">
              From a Doctor of Physical Therapy candidate&apos;s words
            </h2>
            <li className="mt-1.5 text-base tracking-tight text-slate-100">
              High blood pressure is something PTs must take into consideration
              when treating patients. PTs are movement specialists, and our job
              is to get people moving. When it comes to acute care settings
              (in-patient hospitals, ICUs, SNFs, etc.), blood pressure is taken
              before, during, and after most treatments.
            </li>
            <li className="mt-1.5 text-base tracking-tight text-slate-100">
              Asthma treatment through PT can vary for each patient. Treatment
              options focus on improving the quality of breathing or the
              efficiency. Breathing techniques can be practiced and prescribed,
              such as diaphragmatic breathing or pursed lip breathing. The
              muscles used for breathing can be strengthened through
              neuromuscular education, using a device that provides a resistive
              load against inspiration, or even aquatic exercise. The water in a
              pool will provide resistance against inspiration, but this will
              need to be monitored as it can be too restricting on patients
              especially if they already had breathing difficulties.
            </li>
            <li className="mt-1.5 text-base tracking-tight text-slate-100">
              Other considerations for asthma treatment are if the patient has
              mucus build up in their respiratory system. There are percussive
              treatments and postural drainage techniques that PTs can use to
              help clear the lungs based on where the mucus has built up. There
              are also techniques to help the patient cough most effectively to
              clear mucus. One such way is using a very quick cryotherapy
              application. Taking an ice cube in a quick swipe to the
              patient&apos;s back can cause the expiratory muscles to fire and
              produce a cough.
            </li>
            <li className="mt-1.5 text-base tracking-tight text-slate-100">
              Lifestyle changes for patients with asthma include limiting
              exposure to respiratory irritants, like dust, smoke, pet dander,
              etc. Postural education and correction can also benefit those with
              asthma. Poor posture can limit the ability of the respiratory
              muscle to function properly/efficiently and can limit the amount
              that the lungs can expand while breathing. This can include
              stretching tight muscles and joints and strengthening others,
              depending on the presentation of the patient.
            </li>
            <li className="mt-1.5 text-base tracking-tight text-slate-100">
              We have not had much discussion on COVID-19 specific treatments
              within the realm of physical therapy. Assisting patients in
              sitting, standing, and walking as tolerated will benefit their
              condition or at least limit the negative impact of symptomatic
              COVID-19.
            </li>
          </div>
          <div className="sm:w-[45%]">
            <h2 className="text-lg mt-8 mb-8 font-bold tracking-tight text-slate-200">
              From a Doctor of Osteopathic Medicine candidate&apos;s words
            </h2>
            <li className="mt-1.5 text-base tracking-tight text-slate-100">
              Pulmonary: Although COVID-19 is asymptomatic for most, patients
              can get very sick with symptoms. In a study conducted in the
              United States, 20% of people with diagnosed COVID-19 developed
              acute respiratory distress syndrome, and 12.3% of them needed
              mechanical ventilation to stay alive. (See &quot;Coronavirus
              disease 2019 (COVID-19): Critical care and airway management
              issues&quot;, section on &apos;Clinical features in critically ill
              patients&apos;.)
            </li>
            <li className="mt-1.5 text-base tracking-tight text-slate-100">
              Cardiovascular: Other complications arising from COVID-19
              infections also include heart-related issues, such as arrhythmias,
              acute cardiac injury, and shock—likely to do with the lung
              ventilation issues that could lead to hypoxia or the strong immune
              responses associated with COVID-19 infections [27,66,122,123]. One
              of the most surprising findings is an increase in risk for
              pulmonary embolism and acute stroke for those with COVID-19, even
              if they are under the age of 50. In a series of 21 severely ill
              patients admitted to the ICU in the United States, one-third
              developed cardiomyopathy [122].
            </li>
            <li className="mt-1.5 text-base tracking-tight text-slate-100">
              Thromboembolic complications, including pulmonary embolism and
              acute stroke (even in patients younger than 50 years of age
              without risk factors), have also been reported [124-130].
            </li>
            <li className="mt-1.5 text-base tracking-tight text-slate-100">
              Neuro: Encephalopathy, or disease affecting the brain, is also a
              common and unique side affect to the COVID-19 infection, with some
              studies reporting encephalopathy in up to a third of hospitalized
              patients. Out of all the neurological symptoms, loss of smell,
              inability to taste, and muscle weakness are common, while stroke,
              movement disorders, motor and sensory deficits, ataxia, and
              seizures occur less frequently.
            </li>
            <li className="mt-1.5 text-base tracking-tight text-slate-100">
              Inflammation: Some patients with severe COVID-19 have laboratory
              evidence of an exuberant inflammatory response, with persistent
              fevers, elevated inflammatory markers (eg, D-dimer, ferritin), and
              elevated proinflammatory cytokines; these laboratory abnormalities
              have been associated with critical and fatal illnesses
              [25,132,133].
            </li>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
