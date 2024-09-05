import { iconSize, Size } from "../../../Styles/sizes";

type IconProps = {
  icon: React.ReactNode;
  size?: Size;
};

const Icon = ({ icon, size = "md" }: IconProps) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        ...iconSize[size],
      }}
    >
      {icon}
    </div>
  );
};

export default Icon;
