import onboardingJson from "../../data/getstarted.json";

const steps = onboardingJson.onboarding_steps;

const OnboardingSteps = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
      
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold text-indigo-400">
          Learn faster
        </h2>

        <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Get Started In 4 Easy Steps
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
        <dl className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-2">
          {steps.map((step) => (
            <div key={step.step_number} className="relative">
              
              <dt className="text-base font-semibold text-white flex items-center gap-4">
                <img
                  className="h-8 w-8 object-contain"
                  src={step.img_src}
                  alt={step.alt}
                />
                {step.cta_text}
              </dt>

              <dd className="mt-2 text-base text-gray-400">
                {step.description}
              </dd>

            </div>
          ))}
        </dl>
      </div>

    </section>
  );
};

export default OnboardingSteps;
