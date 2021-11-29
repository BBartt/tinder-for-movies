interface IHeader {
  children: string;
}

const Header: React.FC<IHeader> = ({ children }) => {
  return <header className="header">{children}</header>;
};

export default Header;
