import { SkillChip } from "../../components/skill-chip/SkillChip";
import skills from "../../data/skills.json";
import OnboardingSteps from "../../components/onboarding/onboarding";
import homeJson from "../../data/home.json"

const hero = homeJson.hero;
const mentor = homeJson.mentorsSection

export default function Home() {
  return (
    <div className="relative bg-slate-950 isolate overflow-hidden">

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10" />

      <section className="mx-auto max-w-3xl px-6 py-10 text-center lg:pt-12">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {hero.title}
        </h1>

        <p className="mt-6 text-lg text-slate-400">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#"
            className="rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400 transition"
          >
            {hero.actions[1].label}
          </a>

          <a
            href="#"
            className="flex items-center text-sm font-semibold text-slate-300 hover:text-white transition"
          >
            {hero.actions[0].label}
          </a>
        </div>
      </section>
      <section className="relative py-8 sm:py-16">


        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <h2 className="text-center text-base font-semibold text-white">
            {mentor.heading}
          </h2>

          <div className="mx-auto mt-6 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-6
                    sm:max-w-xl sm:grid-cols-6 sm:gap-x-10
                    lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {mentor.companies.map((c) => <img
              className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
              src={c.logo}
              alt={c.name}
            />)}




          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">

        <p className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold text-white sm:text-5xl">
          Learn what matters in real projects
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-900 border border-white/10 p-6 hover:border-indigo-500/40 transition"
            >
              <h3 className="text-xl font-semibold text-white">
                {card.title}
              </h3>

              <ul className="mt-4 space-y-2 text-slate-400 text-sm">
                {card.skills.map((skill, i) => (
                  <li key={i}>
                    <SkillChip label={skill.name} logo={skill.logo} />
                  </li>
                ))}
              </ul>

              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition">
                Explore skills <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>



      <OnboardingSteps />

    </div>
  );
}
