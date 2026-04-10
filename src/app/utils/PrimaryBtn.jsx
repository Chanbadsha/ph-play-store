const PrimaryBtn = ({ text }) => {
  return (
    <div className="flex items-center gap-1 md:text-lg  border px-4 rounded-lg text-white font-semibold bg-linear-to-r from-[#6832e4] to-[#9f62f2] py-2">
      {text}
    </div>
  );
};

export default PrimaryBtn;
