import BeakerIcon from "@/components/icons/BeakerIcon";

const loginPage = () => {
  return (
    <div className="flex flex-col w-full h-[calc(100vh-84px)] justify-center items-center bg-labuddy text-white text-center gap-[20px]">
      <BeakerIcon />
      <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
        searching ...
      </p>
      <p className="text-sm lg:text-base">
        LabBuddy is extracting info from your paper!
      </p>
    </div>
  );
};

export default loginPage;
