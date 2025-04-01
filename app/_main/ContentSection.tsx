import MainContentBox from "@/components/MainContentBox";
import contentList from "./contentData";

const ContentSection = () => {
  return (
    <section className="flex flex-col w-full h-auto justify-center items-center px-[320px] py-[180px] gap-[120px]">
      {contentList.map((item, index) => (
        <MainContentBox key={index} title={item.title} content={item.content} />
      ))}
    </section>
  );
};

export default ContentSection;
