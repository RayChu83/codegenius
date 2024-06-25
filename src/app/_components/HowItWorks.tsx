import { roadmap } from "../constants";
import Container from "./Container";

export default function HowItWorks() {
  return (
    <Container className="m-auto max-w-[1280px]">
      <h2 className="text-3xl font-semibold text-center">
        How CodeGenius works
      </h2>
      <section className="relative mt-10">
        {roadmap.map((step, index) => (
          <div key={index} className="md:w-1/2 even:md:ml-auto">
            <div
              className={`absolute bg-gray-dark rounded-full font-semibold p-2 w-10 h-10 flex items-center justify-center left-0 md:left-1/2 -translate-x-1/2`}
            >
              {index + 1}
            </div>
            <article
              className={`md:w-4/5 w-full bg-gray-darker p-6 rounded-lg border border-[#555555] mb-6 ${
                (index + 1) % 2 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <h3 className="text-blue-primary font-sora text-lg flex items-center">
                {index + 1}. {step.heading}
                <span className="ml-auto text-gray-light hover:text-white transition-colors cursor-pointer">
                  <step.icon />
                </span>
              </h3>
              <p className="text-gray-light">{step.description}</p>
            </article>
          </div>
        ))}
        <div className="absolute h-full w-2 bg-gray-dark top-0 left-0 md:left-1/2 -translate-x-1/2 -z-10" />
      </section>
    </Container>
  );
}
