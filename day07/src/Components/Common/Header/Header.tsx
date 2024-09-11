import StatusBar from './StatusBar';

export type HeaderProps = {
  header?: React.ReactNode;
};

const Header = ({ header }: HeaderProps) => {
  return (
    <header className="max-w-md m-auto">
      <StatusBar />
      {header}
    </header>
  );
};

export default Header;
