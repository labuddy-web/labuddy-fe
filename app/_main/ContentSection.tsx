import { MissionContentBox } from "@/components/MainContentBox";
import { ourMission, footer } from "./contentData";
import DoYouKnow from "./doYouKnow";

const ContentSection = () => {
  return (
    <section className="font-roca flex flex-col w-full h-auto justify-center items-center">
      <DoYouKnow />
      <div className="flex w-full h-auto border-4 rounded-xl border-labuddy py-[40px] px-[16px] justify-center items-center">
        <MissionContentBox
          title={ourMission.title}
          content={ourMission.content}
        />
      </div>
      <div className="text-xl lg:text-3xl text-labuddy font-extrabold text-center">
        {footer}
      </div>
    </section>
  );
};

export default ContentSection;
