import ContentSection from "./_main/ContentSection";
import MainSection from "./_main/MainSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-[120px] row-start-2 items-center sm:items-start">
      <MainSection />
      <ContentSection />
    </div>
  );
}
