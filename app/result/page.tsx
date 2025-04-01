import ResultTable from "./ResultTable";

const resultPage = () => {
  return (
    <div className="w-full h-auto min-h-[calc(100vh-84px)]">
      <div className="absolute z-10 w-full h-auto min-h-[calc(100vh-84px)] bg-white/80" />
      <div className="relative flex flex-col w-full h-auto min-h-[calc(100vh-84px)] px-[32px] lg:px-[120px] xl:px-[320px] py-[32px] md:py-[60px] xl:py-[80px] justify-start bg-labuddy">
        <ResultTable />
      </div>
    </div>
  );
};

export default resultPage;
