import UploadIcon from "@/components/icons/UploadIcon";
import { FileInput, Label } from "flowbite-react";

const MainSection = () => {
  return (
    <section className="flex w-full bg-labuddy px-[32px] lg:px-[120px] xl:px-[320px] py-[120px] xl:py-[240px] text-white flex-col justify-center items-center gap-[120px] text-center ">
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="flex flex-col justify-center items-center ">
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl">LabBuddy</p>
          <p className="font-bold text-xl md:text-3xl lg:text-4xl">
            : Extract <span className="font-black">Reagent & Equipment</span>{" "}
            Info from Research Papers
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-sm lg:text-base ">
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
          <UploadIcon />
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
