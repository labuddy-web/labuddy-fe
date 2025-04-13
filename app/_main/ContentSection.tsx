import { footer } from "./contentData";
import DoYouKnow from "./doYouKnow";
import Struggling from "./struggling";
import SolveProblem from "./solveProblem";
import WhyLabuddy from "./whyLabuddy";
import Mission from "./mission";

const ContentSection = () => {
  return (
    <section className="font-roca flex flex-col w-full h-auto justify-center items-center">
      <DoYouKnow />
      <Struggling />
      <SolveProblem />
      <WhyLabuddy />
      <Mission />
      <div className="text-xl lg:text-3xl text-labuddy font-extrabold text-center">
        {footer}
      </div>
    </section>
  );
};

export default ContentSection;
