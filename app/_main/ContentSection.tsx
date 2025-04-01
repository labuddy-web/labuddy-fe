import { MainContentBox, MissionContentBox } from "@/components/MainContentBox";
import { contentList, ourMission, footer } from "./contentData";

const ContentSection = () => {
  return (
    <section className="flex flex-col w-full h-auto justify-center items-center px-[32px] lg:px-[120px] xl:px-[320px] py-[180px] gap-[120px]">
      {contentList.map((item, index) => (
        <MainContentBox key={index} title={item.title} content={item.content} />
      ))}
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
