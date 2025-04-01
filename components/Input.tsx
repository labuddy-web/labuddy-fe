interface InputProps {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const TextInput: React.FC<InputProps> = ({ data, setData }) => (
  <div className="flex flex-row w-full h-[78px] px-[8px] lg:px-[20px] py-[10px] justify-center items-center gap-[24px] sm:gap-[42px] rounded-[20px] bg-black cursor-pointer">
    <p className="text-white font-light text-base lg:text-lg w-auto">phone</p>
    <input
      type="text"
      value={data}
      onChange={(e) => setData(e.target.value)}
      className="w-full bg-black border-none outline-none shadow-none appearance-none text-gray-0"
    />
  </div>
);

export default TextInput;
