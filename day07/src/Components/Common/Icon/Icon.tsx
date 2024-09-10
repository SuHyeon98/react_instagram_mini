import { iconSize, Size } from "../../../Styles/sizes";

type IconProps = {
  icon: React.ReactNode;
  size?: Size;
  onClick?: () => void;
};

const Icon = ({ icon, size = "md", onClick }: IconProps) => {
  return (
    <div
      onClick={onClick}
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
