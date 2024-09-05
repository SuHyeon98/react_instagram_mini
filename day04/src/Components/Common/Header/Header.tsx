import StatusBar from "./StatusBar";

export type HeaderProps = {
  header?: React.ReactNode;
};

const Header = ({ header }: HeaderProps) => {
  return (
    <header className="max-w-sm m-auto">
      <StatusBar />
      {header}
    </header>
  );
};

export default Header;
