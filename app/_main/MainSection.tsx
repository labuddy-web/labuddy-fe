import { FileInput, Label } from "flowbite-react";

const MainSection = () => {
  return (
    <section className="flex w-full h-[800px] bg-labuddy px-[320px] text-white flex-col justify-center items-center gap-[120px]">
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="flex flex-col justify-center items-center ">
          <p className="font-bold text-4xl">LabBuddy</p>
          <p className="font-bold text-4xl">
            : Extract <span className="font-black">Reagent & Equipment</span>{" "}
            Info from Research Papers
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p>
            Short on time for experiments and spending too much of it reading
            papers?
          </p>
          <p>
            Just upload a PDF and get reagent and equipment information from the
            paper in just 3 seconds!
          </p>
        </div>
      </div>

      <Label className="flex flex-col items-center justify-center w-[760px] max-w-full h-[120px] border-2 border-white border-dashed rounded-lg cursor-pointer bg-transparent dark:bg-transparent dark:border-white">
        <div className="flex flex-col items-center justify-center">
          <svg
            className="w-8 h-8 mb-4 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="text-sm text-white dark:text-white">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
        </div>
        <FileInput id="dropzone-file" className="hidden" />
      </Label>
    </section>
  );
};

export default MainSection;
