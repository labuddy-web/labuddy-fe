import DoYouKnow from "./doYouKnow";
import Struggling from "./struggling";
import SolveProblem from "./solveProblem";
import WhyLabuddy from "./whyLabuddy";
import Mission from "./mission";
import LetsStart from "./letsStart";

const ContentSection = () => {
  return (
    <section className="font-roca flex flex-col w-full h-auto justify-center items-center">
      <DoYouKnow />
      <Struggling />
      <SolveProblem />
      <WhyLabuddy />
      <Mission />
      <LetsStart />
    </section>
  );
};

export default ContentSection;
