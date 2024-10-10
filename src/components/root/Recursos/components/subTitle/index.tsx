import { ScaleIcon } from "lucide-react";

const SubTitle = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex items-center gap-1 text-lg text-green-500">
        <ScaleIcon size={23} /> 1183
      </div>

      <div className="flex items-center border border-green-400 px-2 py-1 text-center text-green-500">
        <span>1183/1300 licenças em uso</span>
      </div>
    </div>
  );
};

export default SubTitle;
