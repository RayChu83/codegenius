import Container from "@/app/_components/Container";
import { pricing } from "../constants";
import { FaCircleCheck } from "react-icons/fa6";

export default function Pricing() {
  return (
    <Container className="max-w-[1440px] m-auto">
      <h2 className="font-sora text-3xl font-semibold text-center">
        Our Pricing Plans
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-6 relative">
        {pricing.map((plan, i) => (
          <article
            key={i}
            className={`bg-gray-darker border border-[#555555] p-6 rounded-lg relative ${plan?.additionalClassNames} z-20`}
          >
            <h4 className="text-blue-primary text-center text-lg">
              [{plan.name}]
            </h4>
            <h2 className="font-sora text-3xl font-bold text-center my-4">
              {Number.isInteger(plan.price)
                ? `$${plan.price}/month`
                : "Contact us"}
            </h2>
            <ul>
              {plan.bulletPoints.map((bulletPoint, j) => (
                <li
                  key={j}
                  className="flex items-center gap-2 text-gray-light mb-1"
                >
                  <span>
                    <FaCircleCheck className="text-blue-primary" />
                  </span>
                  {bulletPoint}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Container>
  );
}
