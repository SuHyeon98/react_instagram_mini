import { IoCameraOutline } from 'react-icons/io5';
import { CiLocationArrow1 } from 'react-icons/ci';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { colors } from '../../../Styles/color';
import Icon from '../Icon/Icon';
import Image from '../Image/Image';

const TopBar = () => {
  return (
    <div
      style={{
        backgroundColor: colors.background.lightGrey,
        padding: '0px 14px 0px 14px',
        height: '44px',
      }}
      className="w-full max-w-md flex justify-between items-center"
    >
      <Icon icon={<IoCameraOutline />} />
      <Image src={'Instagram_logo.png'} />
      <span className="flex gap-1">
        <Icon icon={<MdOutlineCheckBoxOutlineBlank />} />
        <Icon icon={<CiLocationArrow1 />} />
      </span>
    </div>
  );
};

export default TopBar;
